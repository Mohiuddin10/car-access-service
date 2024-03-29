import { useContext } from 'react';
import img from '../../assets/images/login/login.svg';
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import axios from 'axios';

const Login = () => {

    const { userSigninWithEmail } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location);

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        userSigninWithEmail(email, password)
            .then(result => {
                if (result) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: result.user.displayName ? `${result.user.displayName} login successfully` : "User login successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    // get access token 
                    const loggedInUser = result.user;
                    console.log(loggedInUser);
                    const user = { email };
                    axios.post("http://localhost:5000/jwt", user, {withCredentials: true})
                    .then(res => {
                        console.log(res.data);
                        if(res.data.success){
                            navigate(location?.state ? location?.state : "/");
                        }
                    })
                    
                }
            })
            .catch(error => {

                if (error.code == "auth/invalid-credential") {
                    console.log(error);
                    Swal.fire({
                        position: "top-end",
                        icon: "warning",
                        title: "Wrong email or password",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            }
            )
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row justify-between">
                <div className="text-center lg:text-left w-2/5">

                    <img src={img} className='' alt="" />
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-4xl font-semibold pt-16 mx-auto">Login</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#ff3811] text-white">Sign In</button>
                            <div className="mx-auto space-y-7 mt-7">
                                <p className='text-lg'>Or Sign In with</p>

                                <div className="flex mx-auto align-middle justify-center gap-4">
                                    <button><FaFacebookF className='text-[#3B5998]' /></button>
                                    <button><FaLinkedinIn className='text-[#0A66C2]' /></button>
                                    <button><FcGoogle /></button>
                                </div>

                            </div>
                            <p className='text-lg mx-auto mt-12'>Have an account? <Link to={"/signup"} className='text-[#ff3811]'>Sign Up</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;