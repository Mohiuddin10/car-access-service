import axios from "axios";
import { useState } from "react";

const useServices = (url) => {
    const [services, setServices] = useState([]);
    axios.get(url)
    .then(res => {
        setServices(res.data)
    })

    return services
};

export default useServices;