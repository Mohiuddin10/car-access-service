import { IoIosCloseCircle } from "react-icons/io";

const BookingRow = ({booking, handleDelete, handleUpdate}) => {
    const {customer:name, serviceName, phone, date, img, _id:id, status} = booking;

    
    
    return (

        <tr>
            <th>
                <label>
                    {/* <input type="checkbox" className="checkbox" /> */}
                    <button onClick={() => handleDelete(id)}><IoIosCloseCircle className="w-[40px] h-[40px]" /></button>
                </label>
            </th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask rounded w-[150px] h-[150px]">
                            {img ? <img src={img}  alt="Avatar Tailwind CSS Component" /> : <></>}
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>
                        <div className="text-sm opacity-50">United States</div>
                        <div className="text-sm opacity-50">Phone: {phone}</div>
                    </div>
                </div>
            </td>
            <td>
                <div className="font-bold">{serviceName}</div>
            </td>
            <td>{date}</td>
            <th>
                {
                    status === "confirm" ? <button className="btn btn-primary">Confirmed</button> :
                    <button onClick={() => handleUpdate(id)} className="btn btn-ghost btn-xs bg-[#ff3811] text-white w-[120px] h-[48px]">Pending</button>
                }
            </th>
        </tr>
    );
};

export default BookingRow;