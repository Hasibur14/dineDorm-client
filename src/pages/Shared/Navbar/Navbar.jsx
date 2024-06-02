import { useState } from "react";
import toast from "react-hot-toast";
import { FaRegUserCircle } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { IoIosClose, IoIosMenu } from "react-icons/io";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { Link, NavLink } from 'react-router-dom';
import titleImg from '../../../assets/titleImg (2).png';
import useAuth from "../../../hooks/useAuth";
import './Navbar.css';

const Navbar = () => {
    const [navbarMobile, setNavbarMobile] = useState(false);
    const { user, logOut } = useAuth();
    console.log(user);

    const handleResponsiveBtn = () => {
        setNavbarMobile(!navbarMobile);
    };

    const navLinkStyles = ({ isActive, isPending }) =>
        isPending ? "pending"
            : isActive
                ? "text-white px-3.5 py-1.5 bg-gradient-to-tl from-[#121e2d] to-[#34d1bc] rounded-md"
                : "hover:text-[#FF497C]";

    const handleLogOut = () => {
        logOut();
        toast.success('Logout successfully');
    }

    return (
        <div className="absolute bg-[#0000007d] bg-opacity-100 top-0 z-50 w-full shadow-2xl py-3">
            <div className='md:mx-10 lg:mx-72 flex justify-between items-center py-3 z-10'>
                <Link to="/">
                    <img loading="lazy" src={titleImg} className='w-28' alt="Logo" />
                </Link>

                <div className='menu-bar lg:hidden' onClick={handleResponsiveBtn}>
                    {navbarMobile ? (
                        <div className="text-5xl text-white hover:text-red-500"><IoIosClose /></div>
                    ) : (
                        <div className="text-5xl text-white hover:text-red-500"><IoIosMenu /></div>
                    )}
                </div>

                <div className={`lg:flex list-none text-white font-medium ${navbarMobile ? 'responsive' : 'hidden'} lg:items-center lg:space-x-6`}>
                    <NavLink to='/' className={navLinkStyles}><li>Home</li></NavLink>
                    <NavLink to='/meals' className={navLinkStyles}><li>Meals</li></NavLink>
                    <NavLink to='/upcomingMeals' className={navLinkStyles}><li>Upcoming Meals</li></NavLink>
                    <NavLink to='/contact' className={navLinkStyles}><li>Contact</li></NavLink>
                </div>

                {user ? (
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                {user?.photoURL ? (
                                    <img alt="User Avatar" src={user?.photoURL} />
                                ) : (
                                    <FaRegUserCircle className="text-4xl text-white hover:text-primary" />
                                )}
                            </div>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded w-72">
                            <li>
                                <a className="justify-between">
                                    {user?.displayName}
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <hr />
                            <li>
                                <Link to="/dashboard">
                                    <div className="flex">
                                        <MdOutlineDashboardCustomize className="text-md mr-2 mt-1" />
                                        <p>Dashboard</p>
                                    </div>
                                </Link>
                            </li>
                            <hr />
                            <li onClick={handleLogOut} className="hover:bg-red-500 hover:text-white">
                                <div className="flex">
                                    <FiLogOut className="mr-2 mt-1" />
                                    <p>Logout</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                ) : (
                    <NavLink to='/joinUs' className="hidden lg:flex text-white border rounded px-3 py-1.5 border-secondary hover:bg-secondary transition font-semibold">
                        <p>Join Us</p>
                    </NavLink>
                )}
            </div>
        </div>
    );
};

export default Navbar;
