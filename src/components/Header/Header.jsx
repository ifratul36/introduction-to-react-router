import { Link, NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <nav>
                <span className="text-2xl font-bold">My Website :</span>
                <Link to="/" className="px-2   hover:text-orange-500 text-xl font-semibold">Home</Link>
                {/* <Link to="/users" className="px-2   hover:text-red-600 text-xl font-semibold">Users</Link> */}
                <NavLink className="px-2   text-xl font-semibold active:underline hover:text-orange-400" to="/users">Users</NavLink>
                {/* <Link to="/posts" className="text-xl font-semibold px-2   hover:text-red-600">Posts</Link> */}
                <NavLink to="/posts" className="text-xl font-semibold px-2 active:underline hover:text-orange-400">Posts</NavLink>
                <Link to="/about" className="px-2   hover:text-orange-400 text-xl font-semibold">About Us</Link>
                <Link to="/contact" className="px-2 hover:text-orange-400 text-xl font-semibold">Contact Us</Link>
            </nav>
        </div>
    );
};

export default Header;