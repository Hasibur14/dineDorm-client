import { AiOutlineMenu } from "react-icons/ai";
import { FaHome, FaUserAlt } from "react-icons/fa";
import { MdOutlineRateReview, MdPayments } from "react-icons/md";
import { NavLink } from "react-router-dom";
// import { AiOutlineMenuFold } from "react-icons/ai";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { VscRequestChanges } from "react-icons/vsc";
import logo from "../../../assets/titleImg (2).png";
import useAuth from "../../../hooks/useAuth";

const Sidebar = () => {
    const { user } = useAuth();
    const [isMenuTrue, setIsMenuTrue] = useState(false);
    //   const { role } = useRole();

    const iconStyle = ({ isActive }) => isActive ? `text-[19px] flex items-center  gap-2.5  py-2 px-4 rounded-md bg-gradient-to-tl from-[#121e2d] to-[#34d1bc] text-white transition-all duration-300` : `text-[19px] flex items-center  gap-2.5  py-2 px-4 rounded-md  hover:shadow-md hover:shadow-accent text-white transition-all duration-300`;




    const dashLinks = (
        <>
            <NavLink to="/" className={iconStyle}>
                <FaHome></FaHome>
                <li> Home</li>
            </NavLink>

            <NavLink to="/dashboard/profile" className={iconStyle} navLinkStyles>
                <FaUserAlt></FaUserAlt>
                <li>My Profile</li>
            </NavLink>

            {/* {role && role === "admin" ? ( */}
            <>
                {/* admin routes */}
                {/* <NavLink to="/dashboard/add-product" className={iconStyle}>
                    <FiShoppingCart></FiShoppingCart>
                    <li> Add Product</li>
                </NavLink>
                <NavLink to="/dashboard/event-requests" className={iconStyle}>
                    <FaCodePullRequest></FaCodePullRequest>
                    <li> Event Requests</li>
                </NavLink>
                <NavLink to="/dashboard/manage-events" className={iconStyle}>
                    <MdSummarize></MdSummarize>
                    <li>Manage Events</li>
                </NavLink>
                <NavLink to="/dashboard/admin-summary" className={iconStyle}>
                    <MdSummarize></MdSummarize>
                    <li> Admin Summary</li>
                </NavLink> */}
            </>
            {/* ) : ( */}
            <>
                {/* user Routes */}

                <NavLink to="/dashboard/requested-meals" className={iconStyle}>
                    <VscRequestChanges className="text-2xl "/>
                    <li>Requested Meals</li>
                </NavLink>

                <NavLink to="/dashboard/my-reviews" className={iconStyle}>
                <MdOutlineRateReview className="text-2xl" />
                    <li> My Reviews</li>
                </NavLink>

                <NavLink to="/dashboard/payment-history" className={iconStyle}>
                    <MdPayments></MdPayments>
                    <li> Payment History</li>
                </NavLink>
            </>
            {/* )} */}
        </>
    );

    return (
        <div className="flex">
            {/* side bar */}
            <div
                className={`fixed h-screen w-[280px] bg-[#050c3c] border-r shadow-2xl px-6 pt-5 top-0 lg:left-0 z-50 transition-all
         duration-300 ${isMenuTrue ? "left-0" : "-left-[300px]"}`}
                style={{ boxShadow: " 6px 0px 5px 0px rgba(79,79,79,0.75);" }}
            >
                {/* logo */}
                <div className="flex justify-between items-center">
                    <img src={logo} alt="Event Planet" className="w-40" />
                    <IoMdClose
                        className="text-3xl text-white cursor-pointer block lg:hidden"
                        onClick={() => setIsMenuTrue(false)}
                    />
                </div>
                <ul className=" space-y-3 dashboard-route">{dashLinks}</ul>
            </div>
            <div className="w-[343px] hidden lg:block"></div>

            {/* main */}
            <div className="bg-[#F8F7FA] w-full lg:w-[1600px] h-44 rounded col-span-10">
                {/* dashboard nav */}
                <div className="overflow-y-auto w-[95%] mx-auto h-20 shadow-2xl bg-white  my-10 rounded-lg flex justify-between items-center px-10">
                    <AiOutlineMenu
                        onClick={() => setIsMenuTrue(true)}
                        className="text-2xl cursor-pointer block lg:hidden"
                    />

                    <div></div>
                    <div>
                        <img
                            src={user?.photoURL}
                            alt=""
                            className="w-12 h-12 rounded-full border border-red-600 object-cover"
                            title={user?.displayName}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;