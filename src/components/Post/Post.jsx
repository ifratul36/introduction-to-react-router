/* eslint-disable react/prop-types */
import { Link, useNavigate } from "react-router-dom";


const Post = ({post}) => {
    const {id, title} = post;
    const navigate = useNavigate();

  const handleShowDetail = () =>{
      navigate(`/post/${id}`);
  }

    return (
        <div className=" border-2 text-center border-yellow-300 text-white p-4 py-8 space-y-4 rounded-lg">
            <h4  className="text-2xl font-bold">Post of id: {id}</h4>
            <p>{title}</p>
            <Link to={`/post/${id}`}>Post Details : </Link>
            <Link to={`/post/${id}`}><button className="mx-2 my-4 px-4 py-2 rounded-xl bg-gradient-to-r from-yellow-600 via- rose-500 to-red-500">Show Details</button></Link>
            <br />
            <button className="px-4 py-2 rounded-xl my-4 border border-orange-300 hover:bg-orange-300 hover:text-black" onClick={handleShowDetail}>Click to see details</button>
        </div>
    );
};

export default Post;