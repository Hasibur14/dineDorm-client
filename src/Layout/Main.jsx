import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer";
import Navbar from "../pages/Shared/Navbar/Navbar";



const Main = () => {
    return (
        <div>
           <div className="">
                <Navbar></Navbar>
            </div >
            <div className="min-h-[calc(100vh-278px)]">
                <Outlet ></Outlet>
            </div>

            <div className="">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Main;