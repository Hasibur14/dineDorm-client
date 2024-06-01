import { useState } from "react";
import { IoIosClose, IoIosMenu } from "react-icons/io";
import { IoBagHandleOutline } from "react-icons/io5";
import { RiNotification2Line } from "react-icons/ri";
import { Link, NavLink, useNavigation } from 'react-router-dom';
import titleImg from '../../../assets/titleImg (2).png';
import './Navbar.css';

const Navbar = () => {
    const [navbarMobile, setNavbarMobile] = useState(false);
    const navigation = useNavigation();

    const handleResponsiveBtn = () => {
        setNavbarMobile(!navbarMobile);
    }

    const handleScroll = () => {
        window.scrollTo(0, 0);
    };

    const navLinkStyles = ({ isActive, isPending }) =>
        isPending ? "pending"
            : isActive
                ? `text-white  px-3.5 py-1.5 bg-gradient-to-tl from-[#121e2d] to-[#34d1bc] rounded-md`
                : "hover:text-[#FF497C]";



    return (
        <div className="absolute bg-[#0000007d] bg-opacity-100 top-0 z-50 w-full  shadow-2xl py-3 ">
            {navigation.state === "loading" && (
                <span className="absolute top-[50%] z-30 left-[50%] loading loading-dots bg-[var(--mainColor)] w-[80px]"></span>
            )}
            <div data-aos="fade-left" className='container mx-auto  flex justify-between items-center py-3 z-10'>
                <Link to="/">
                    <img loading="lazy" src={titleImg} className='w-32' alt="Logo" />
                </Link>

                <div className='menu-bar lg:hidden' onClick={handleResponsiveBtn}>
                    {navbarMobile ? (
                        <div className="text-5xl text-white hover:text-red-500"><IoIosClose /></div>
                    ) : (
                        <div className="text-5xl text-white hover:text-red-500"><IoIosMenu /></div>
                    )}
                </div>

                <div className={`lg:flex list-none text-white font-medium ${navbarMobile ? 'responsive' : 'hidden'} lg:items-center lg:space-x-6 `}>
                    <NavLink to='/' className={navLinkStyles}><li>Home</li></NavLink>
                    <NavLink to='/meals' className={navLinkStyles}><li>Meals</li></NavLink>
                    <NavLink to='/services' className={navLinkStyles}><li>Upcoming Meals</li></NavLink>
                    <NavLink to='/team' className={navLinkStyles}><li>Join Us</li></NavLink>
                    <NavLink to='/contact' className={navLinkStyles}><li>Contact</li></NavLink>
                </div>

                <div className={`lg:flex items-center ${navbarMobile ? 'responsiveRightSide' : 'hidden'} lg:space-x-6`}>
                    <div className='flex my-3 lg:my-0'>
                        <div className='text-xl text-white'><IoBagHandleOutline /></div>
                        <div className='text-xl mx-4 text-white'><RiNotification2Line className="text-2xl hover:text-primary" /></div>
                    </div>
                    <Link to='/services/65ff12d7ef05b89aa3ce6d3e' onClick={handleScroll}>
                        <button className='btn'>Appointment</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
