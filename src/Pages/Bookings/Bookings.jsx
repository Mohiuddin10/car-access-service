import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import BookingRow from "./BookingRow";

const Bookings = () => {
    const { user } = useContext(AuthContext);
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
    }, [])
    return (
        <div>
            <h2>Your bookings: {bookings.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Service Charge</th>
                            <th>Date</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody> 
                        {
                            bookings.map(booking => <BookingRow
                            key={booking._id}
                            booking={booking}
                            ></BookingRow>)
                        }                  
                    </tbody>
                    

                </table>
            </div>

        </div>
    );
};

export default Bookings;