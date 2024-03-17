// import { useEffect, useState } from "react";
import useServices from "../../../hooks/useServices";
import ServiceCard from "./ServiceCard";

const Service = () => {
    // const [services, setServices] = useState([])
    // useEffect(() => {
    //     fetch('http://localhost:5000/services/')
    //         .then(res => res.json())
    //         .then(data => {
    //             setServices(data);
    //         })
    // },
    //     [])

    const services = useServices('http://localhost:5000/services/')
    return (
        <>
            <div className="text-center space-y-4">
                <h3 className="text-lg text-[#ff3811] font-bold">Service</h3>
                <h2 className="font-bold text-5xl">Our Service Area</h2>
                <p className="w-1/2 capitalize mx-auto">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    services.map(service => <ServiceCard
                    key={service._id}
                    service={service}></ServiceCard>)
                }
            </div>
        </>
    );
};

export default Service;