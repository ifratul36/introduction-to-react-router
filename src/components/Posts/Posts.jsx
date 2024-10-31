
import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";

const Posts = () => {
    const posts = useLoaderData();
    console.log(posts);
    return (
        <div>
            <h2 className="text-xl font-semibold space-y-4">Posts: {posts.length}</h2>
            <br />
            <div className="grid lg:grid-cols-3  md:grid-cols-2 grid-cols-1 gap-3">
                {
                    posts.map(post =><Post key={post.id} post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;