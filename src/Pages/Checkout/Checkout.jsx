import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { Toaster, toast } from 'sonner';

const Checkout = () => {
    const product = useLoaderData();
    console.log(product);
    const { img } = product;
    const { user } = useContext(AuthContext);

    const handleCheckout = e => {
        e.preventDefault();

        const form = e.target;

        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const date = form.date.value;
        const serviceName = form.serviceName.value;

        const order = {
            customer: firstName + " " + lastName,
            email,
            phone,
            img,
            date,
            serviceName
        }

        console.log(order);

        fetch('http://localhost:5000/bookings', {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data.acknowledged);
                if (data.acknowledged) {
                    toast.success("Service checkout booked successfully")

                }
            })
    }
    return (
        <form onSubmit={handleCheckout} className="card-body">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" placeholder="First Name" name="firstName" className="input input-bordered" required />

                <input type="text" placeholder="Last Name" name="lastName" className="input input-bordered" required />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="tel" placeholder="Your Phone" name="phone" className="input input-bordered" required />
                <input type="email" defaultValue={user?.email} placeholder="Your Email" name="email" className="input input-bordered" required />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="date" name="date" className="input input-bordered" required />
                <input type="text" defaultValue={product?.title} name="serviceName" className="input input-bordered" required />
            </div>
            <div className="">
                <textarea placeholder="Your Message" name="message" className="textarea textarea-bordered textarea-lg w-full max-w-full" ></textarea>
            </div>
            <div className="form-control mt-6">
                <Toaster />
                <button className="btn bg-[#ff3811] text-white">Order Confirm</button>
            </div>
        </form>
    );
};

export default Checkout;