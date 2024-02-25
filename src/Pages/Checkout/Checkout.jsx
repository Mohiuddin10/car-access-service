import { useLoaderData } from "react-router-dom";

const Checkout = () => {
    const product = useLoaderData();
    console.log(product);

    const handleCheckout = e => {
        e.preventDefault();

        const form = e.target;

        const firstName = form.firstName.value;
        console.log(firstName);
    }
    return (
        <form onSubmit={handleCheckout} className="card-body">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" placeholder="First Name" name="firstName" className="input input-bordered" required />

                <input type="text" placeholder="Last Name" name="lastName" className="input input-bordered" required />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="tel" placeholder="Your Phone" name="phone" className="input input-bordered" required />
                <input type="email" placeholder="Your Email" name="email" className="input input-bordered" required />
            </div>

            <div className="">
                <textarea placeholder="Your Message" className="textarea textarea-bordered textarea-lg w-full max-w-full" ></textarea>
            </div>
            <div className="form-control mt-6">
                <button className="btn bg-[#ff3811] text-white">Order Confirm</button>
            </div>
        </form>
    );
};

export default Checkout;