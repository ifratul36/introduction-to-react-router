import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData();
    const navigate = useNavigate();
    const {id, title, body} = post;
    const {postId} = useParams();
    console.log(postId);

    const handleGoBack = () =>{
   navigate(-1);
    }
    return (
        <div>
            <h3>Post Details About:{id}</h3>
            <p>Title: {title}</p>
            <p><small>{body}</small></p>
            <button className="px-4 py-2 rounded-xl my-4 border border-orange-300 hover:bg-orange-300 hover:text-black" onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;