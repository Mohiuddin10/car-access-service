import { FcOvertime, FcPhone } from "react-icons/fc";
import { GrMapLocation } from "react-icons/gr";

const WorkTime = () => {
    return (
        <div data-theme="dark" className="grid lg:grid-cols-3 gap-14 text-white px-16">
            <div className="card card-side bg-base-100 shadow-xl my-20 mr-5 content-center">
                <figure className="w-1/3 h-1/3 my-auto"><FcOvertime /></figure>
                <div className="card-body">
                    <p className="text-base text-left">We are open monday-friday</p>
                    <h2 className="card-title text-2xl font-bold">7:00 am - 9:00 pm</h2>
                </div>
            </div>

            <div className="card card-side bg-base-100 shadow-xl my-20 mr-5 content-center">
                <figure><FcPhone /></figure>
                <div className="card-body">
                    <p>Have a question?</p>
                    <h2 className="card-title">+2546 251 2658</h2>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Watch</button>
                    </div>
                </div>
            </div>

            <div className="card card-side bg-base-100 shadow-xl">
                <figure><GrMapLocation /></figure>
                <div className="card-body">
                    <p>Need a repair? our address</p>
                    <h2 className="card-title">Liza Street, New York</h2>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Watch</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkTime;