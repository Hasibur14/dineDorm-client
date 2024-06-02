import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer";
import Navbar from "../pages/Shared/Navbar/Navbar";



const Main = () => {
    return (
        <div>
           <div className="h-20">
                <Navbar></Navbar>
            </div >
            <div className="min-h-[calc(100vh-365px)]">
                <Outlet ></Outlet>
            </div>

            <div >
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Main;