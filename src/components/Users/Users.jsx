import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {


    const users = useLoaderData();
    // state--> data
    // sate-->loader
    // use effect
    // fetch --> state set --> set state

    return (
        <div className="space-y-4">
            <h2>Our Users : {users.length}</h2>
            <div  className="grid lg:grid-cols-3  md:grid-cols-2 grid-cols-1 gap-3">
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;