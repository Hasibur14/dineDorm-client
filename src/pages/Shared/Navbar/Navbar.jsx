import { useEffect, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { SlMenu } from "react-icons/sl";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/titleImg (2).png";
import Container from "../../../components/Container/Container";
import NotificationDropDown from "../../../components/Notification/NotificationDropDown";
import useAuth from "../../../hooks/useAuth";
import MenuDropdown from "./MenuDropDown";

const Navbar = () => {
    const { user, logOut } = useAuth();
    const [isMenuTrue, setIsMenuTrue] = useState(false);
    const [isNotificationOpen, setIsNotificationOpen] = useState(false);
    const [notificationCount, setNotificationCount] = useState(3);

    useEffect(() => {
        const savedNotificationCount = localStorage.getItem('notificationCount');
        if (savedNotificationCount !== null) {
            setNotificationCount(parseInt(savedNotificationCount, 10));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('notificationCount', notificationCount);
    }, [notificationCount]);

    const handleNotificationClick = () => {
        setIsNotificationOpen(!isNotificationOpen);
        setNotificationCount(0);
    };

    const navLinkStyles = ({ isActive }) =>
        isActive
            ? "text-white px-3.5 py-1.5 bg-gradient-to-tl from-[#121e2d] to-[#34d1bc] rounded-md"
            : "hover:text-[#FF497C]";

    const navLinks = (
        <>
            <NavLink onClick={() => setIsMenuTrue(false)} to="/" className={navLinkStyles}>
                <li>Home</li>
            </NavLink>
            <NavLink onClick={() => setIsMenuTrue(false)} to="/dashboard/profile" className={`block lg:hidden ${navLinkStyles}`}>
                <li>Dashboard</li>
            </NavLink>
            <NavLink onClick={() => setIsMenuTrue(false)} to="/meals" className={navLinkStyles}>
                <li>All Meals</li>
            </NavLink>
            <NavLink onClick={() => setIsMenuTrue(false)} to="/upcomingMeals" className={navLinkStyles}>
                <li>Upcoming Meals</li>
            </NavLink>
            <NavLink onClick={() => setIsMenuTrue(false)} to="/about" className={navLinkStyles}>
                <li>About</li>
            </NavLink>
            <NavLink onClick={() => setIsMenuTrue(false)} to="/contact" className={navLinkStyles}>
                <li>Contact</li>
            </NavLink>
        </>
    );

    const authLinks = (
        <>
            {user ? (
                <>
                    <button className="btn btn-ghost btn-circle" onClick={handleNotificationClick}>
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                            {notificationCount > 0 && <span className="badge badge-sm badge-error indicator-item text-white">{notificationCount}</span>}
                            {isNotificationOpen && <NotificationDropDown />}
                        </div>
                    </button>
                    <hr className="block lg:hidden" />
                    <button className="hidden lg:block">
                        <MenuDropdown />
                    </button>
                    <NavLink onClick={() => setIsMenuTrue(false)} to="signIn">
                        <button
                            className="font-semibold border-2 border-secondary rounded-md py-2 px-4 transition-all duration-500 ease-out hover:text-white hover:bg-secondary block lg:hidden"
                            onClick={() => logOut()}
                        >
                            Logout
                        </button>
                    </NavLink>
                </>
            ) : (
                <NavLink to="joinUs">
                    <button className="font-semibold border-2 border-secondary rounded-md py-2 px-4 transition-all duration-500 ease-out hover:bg-secondary">
                        Join Us
                    </button>
                </NavLink>
            )}
        </>
    );

    return (
        <div className="">
            <div className="absolute bg-[#0000007d] bg-opacity-100 top-0 z-50 w-full shadow-2xl py-3">
                <Container>
                    <div className="flex justify-between items-center text-secondary lg:text-neutral">
                        <div>
                            <Link to="/" className="text-2xl font-bold">
                                <img src={logo} className="w-32" alt="Dine Dorm" />
                            </Link>
                        </div>
                        <ul className="lg:flex items-center space-x-6 gap-1 hidden text-lg">
                            {navLinks}
                        </ul>
                        <ul className="hidden lg:flex items-center gap-5">
                            {authLinks}
                        </ul>
                        <div className="block lg:hidden">
                            <SlMenu
                                onClick={() => setIsMenuTrue(true)}
                                className={`text-2xl text-white font-bold cursor-pointer hover:text-secondary transition-all duration-300 ${isMenuTrue ? "hidden" : "block"}`}
                            />
                            <IoCloseOutline
                                onClick={() => setIsMenuTrue(false)}
                                className={`text-3xl text-white cursor-pointer hover:text-secondary transition-all duration-300 ${isMenuTrue ? "block" : "hidden"}`}
                            />
                        </div>
                    </div>
                </Container>

                {/* responsive menu */}
                <div className={`overflow-y-auto block lg:hidden transition-all bg-neutral duration-500 text-secondary w-full ${isMenuTrue ? "opacity-100 max-h-screen p-10" : "opacity-0 max-h-0"} px-4`}>
                    <ul className="pt-5 space-y-3">
                        {navLinks}
                    </ul>
                    <ul className="pb-5 flex flex-col gap-3">
                        {authLinks}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
