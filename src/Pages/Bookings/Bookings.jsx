import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Bookings = () => {
    const {user} = useContext(AuthContext);
    console.log(user.email);
    const [bookings, setBookings] = useState([]);

    const url = `http://localhost:5000/bookings?email=${user?.email}`;
    console.log(url);
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setBookings(data);
        })
    },[])
    return (
        <div>
            <h2>Your bookings: {bookings.length}</h2>
            
        </div>
    );
};

export default Bookings;