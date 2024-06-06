import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaHome, FaUserAlt } from "react-icons/fa";
import { FaCodePullRequest } from "react-icons/fa6";
import { HiOutlineServer } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { MdLogout, MdManageHistory, MdOutlineAddchart, MdOutlineRateReview, MdOutlineUpcoming, MdPayments } from "react-icons/md";
import { VscRequestChanges } from "react-icons/vsc";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../../assets/titleImg (2).png";
import useAdmin from "../../../hooks/useAdmin";
import useAuth from "../../../hooks/useAuth";

const Sidebar = () => {
    const { user, logOut } = useAuth();
    const navigate = useNavigate()
    const [isMenuTrue, setIsMenuTrue] = useState(false);
    const [isAdmin] = useAdmin();


    const handleSignOut = () => {
        logOut()
        navigate('/signIn')
    }

    const iconStyle = ({ isActive }) =>
        isActive
            ? `text-[19px] flex items-center  gap-2.5  py-2 px-4 rounded-md bg-gradient-to-tl from-[#121e2d] to-[#34d1bc] text-white transition-all duration-300`
            : `text-[19px] flex items-center  gap-2.5  py-2 px-4 rounded-md  hover:shadow-md hover:shadow-accent text-white transition-all duration-300`;


    return (
        <div className="flex">
            <div
                className={`fixed h-screen w-[280px] bg-[#050c3c] border-r shadow-2xl px-3 pt-4 top-0 lg:left-0 z-50 transition-all duration-300 ${isMenuTrue ? "left-0" : "-left-[300px]"
                    }`} >
                <div className="flex justify-between items-center shadow-lg shadow-primary">
                    <img src={logo} alt="Dine Dorm" className="w-36 lg:ml-4 lg:mb-" />
                    <IoMdClose
                        className="text-3xl text-white cursor-pointer block lg:hidden"
                        onClick={() => setIsMenuTrue(false)}
                    />
                </div>
                <ul className=" space-y-3 dashboard-route lg:mt-10">
                    <NavLink to="/" className={iconStyle}>
                        <FaHome />
                        <li> Home</li>
                    </NavLink>

                    {isAdmin ? (
                        <>
                            <NavLink to="/dashboard/admin-profile" className={iconStyle} navLinkStyles>
                                <FaUserAlt />
                                <li>Admin Profile</li>
                            </NavLink>
                            <NavLink to="/dashboard/manage-user" className={iconStyle}>
                                <MdManageHistory className="text-2xl" />
                                <li>Manage User</li>
                            </NavLink>
                            <NavLink to="/dashboard/add-meals" className={iconStyle}>
                                <MdOutlineAddchart className="text-2xl" />
                                <li> Add Meals</li>
                            </NavLink>
                            <NavLink to="/dashboard/all-meals" className={iconStyle}>
                                <FaCodePullRequest />
                                <li>All Meals</li>
                            </NavLink>
                            <NavLink to="/dashboard/all-reviews" className={iconStyle}>
                                <MdOutlineRateReview className="text-2xl" />
                                <li>All Reviews </li>
                            </NavLink>
                            <NavLink to="/dashboard/serve-meals" className={iconStyle}>
                                <HiOutlineServer className="text-2xl" />
                                <li>serve Meals</li>
                            </NavLink>
                            <NavLink to="/dashboard/upcoming-meals" className={iconStyle}>
                                <MdOutlineUpcoming className="text-2xl" />
                                <li>Upcoming Meals</li>
                            </NavLink>
                        </>
                    ) : (
                        <>
                            <NavLink to="/dashboard/profile" className={iconStyle} navLinkStyles>
                                <FaUserAlt />
                                <li>My Profile</li>
                            </NavLink>
                            <NavLink to="/dashboard/requested-meals" className={iconStyle}>
                                <VscRequestChanges className="text-2xl" />
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
                    )}

                    <li>
                        <button
                            onClick={handleSignOut}
                            className="button px-3 py-2 flex mt-20 md:mt-44 lg:mt-60 ml-4">
                            Sign Out
                            <MdLogout className="text-xl ml-2" />
                        </button>
                    </li>
                </ul>
            </div>
            <div className="w-[343px] hidden lg:block">
            </div>
            <div className="bg-[#F8F7FA] w-full  h-44 rounded col-span-10">
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
