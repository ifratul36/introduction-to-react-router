

import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const User = ({user}) => {
    const {id, name, email, phone} = user;
    return (
       <div>
         <div  className=" border-2 text-center border-pink-500  p-2 py-8 space-y-4 rounded-lg">
            <h2 className="text-2xl font-bold">{name}</h2>
            <p><span className="text-xl font-semibold">email:</span> <span className="font-semibold">{email}</span></p>
            <p><span className="text-xl font-semibold">phone:</span> <span>
            {phone}</span></p>
            <Link to={`/user/${id}`}>Show Details</Link>
            <Link to={`/user/${id}`}>
               <button className="mx-2 my-3 px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Click Me</button>
            </Link>
        </div>
       </div>
    );
};

export default User;