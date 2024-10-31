
import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../Header/Header";


const Home = () => {
    const navigation = useNavigation();
    const location = useLocation();
    console.log(location);
    return (
        <div className="text-center space-y-4">
            <Header></Header>
            {
                navigation.state === "loading" ? <p>Loading....</p> : <Outlet>ji</Outlet> 
            }
            <Footer></Footer>
        </div>
    );
};

export default Home;