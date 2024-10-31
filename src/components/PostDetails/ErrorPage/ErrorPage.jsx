import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError();
    // console.log(error);
    return (
        <div className="flex justify-center items-center text-center">
            <div>
            {/* <h2 className=" text-3xl font-bold">Oops!!!</h2> */}
            {/* <p className="text-2xl font-semibold">{error.statusText || error.message}....</p> */}
            {
                error.status === 404 && <div>
                
                <h3 className="my-4 font-bold  text-3xl">Page not found</h3>
                <p className="my-2 text-2xl font-semibold">Go  back where you from</p>
                <Link to="/"><button className="px-4 py-2 rounded-xl my-4 border border-orange-300">Home</button></Link>
                </div>
            }
            {/* <p className=" text-center text-xl font-semibold">Sorry, an unexpected error has occurred</p> */}
            </div>
        </div>
    );
};

export default ErrorPage;