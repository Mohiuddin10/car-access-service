import { FcOvertime, FcPhone } from "react-icons/fc";
import { GrMapLocation } from "react-icons/gr";

const WorkTime = () => {
    return (
        <div data-theme="dark" className="grid lg:grid-cols-3 text-white gap-4 px-10 mt-32 rounded-xl mb-32">
            <div className="card card-side bg-base-100 shadow-xl my-20 mr-5 content-center w-full">
                <figure className="my-auto"><FcOvertime className="w-[51px] h-[51px]"/></figure>
                <div className="card-body my-auto">
                    <p className="text-sm text-left">We are open monday-friday</p>
                    <h2 className="card-title text-2xl font-bold">7:00 am - 9:00 pm</h2>
                </div>
            </div>

            <div className="card card-side bg-base-100 shadow-xl my-20 mr-5 content-center">
                <figure className="my-auto"><FcPhone  className="w-[51px] h-[51px]"/></figure>
                <div className="card-body my-auto">
                    <p className="text-base text-left">Have a question?</p>
                    <h2 className="card-title text-2xl font-bold">+2546 251 2658</h2>
                </div>
            </div>

            <div className="card card-side bg-base-100 shadow-xl my-20 mr-5 content-center">
                <figure className="my-auto"><GrMapLocation  className="w-[51px] h-[51px]"/></figure>
                <div className="card-body my-auto">
                    <p className="text-base text-left">Need a repair? our address</p>
                    <h2 className="card-title text-2xl font-bold">Liza Street, New York</h2>
                </div>
            </div>
        </div>
    );
};

export default WorkTime;