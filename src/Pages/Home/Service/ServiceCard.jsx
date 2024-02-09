import { FaArrowRight } from "react-icons/fa";
const ServiceCard = ({ service }) => {
    const { img, title, price } = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl w-[314px] h-[208px]" />
            </figure>
            <div className="card-body px-16">
                <h2 className="card-title text-2xl font-bold">{title}</h2>

                <div className="card-actions">
                    <p className="text-[#ff3811] text-xl font-semibold">Price: ${price}</p>
                    <button className="my-auto btn-primary text-[#ff3911]"><FaArrowRight /></button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;