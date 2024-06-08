import { CiLocationArrow1 } from 'react-icons/ci';
import { FaFacebook, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import title from '../../assets/titleImg (2).png';
import Container from '../../components/Container/Container';

const Footer = () => {
    return (
        <div className='bg-black'>
          <Container>
          <footer>
                <div className=" footer p-8 text-white mt-24">
                    <aside className="lg:space-y-3">
                        <div className="flex">
                            <img className="w-28 h-16" src={title} alt="dine dorm" />
                        </div>
                        <p className="text-md opacity-75">Discover Dine Dorm: Your Premier Destination for Streamlined Meal Planning, Event Coordination, and Culinary Delights. Join Our Vibrant Community and Unlock Endless Possibilities to Bring Your Vision to Life!</p>

                    </aside>

                    <div className="flex ml-12 space-x-10 lg:space-x-44">
                        <nav>
                            <header className="footer-title text-md font-bold">Company</header>
                            <a className="link link-hover">About us</a><br />
                            <a className="link link-hover">Leadership</a><br />
                            <a className="link link-hover">Careers</a><br />
                            <a className="link link-hover">News & Article</a><br />
                            <a className="link link-hover">Legal Notice</a><br />
                        </nav>
                        <nav className="lg:ml-20">
                            <header className="footer-title font-eb text-md font-bold ">Support</header>
                            <a className="link link-hover">Help Center</a><br />
                            <a className="link link-hover">FAQ</a><br />
                            <a className="link link-hover">Ticket Support</a><br />
                            <a className="link link-hover">Contact Us</a>
                        </nav>

                    </div>
                    <nav className="lg:ml-28">
                        <header className="footer-title font-eb text-md font-bold">Subscribe</header>
                        <p>Subscribe for our latest <br /> & Articles. We Won’t Give <br />You Spam Mails</p>
                        <div className="flex items-center justify-center border-none">
                            <input className="lg:w-48 h-10 lg:h-14 rounded-l-lg" type="text" placeholder="  Email Address" name="" id="" />

                            <button className="w-10 lg:w-16 h-10 lg:h-14 bg-gradient-to-tl hover:bg-gradient-to-tr text-white py-3 px-5  from-[#121e2d]
                        to-[#34d1bc] rounded-r-lg  border-none hover:bg-pink-950"><CiLocationArrow1 className='text-3xl' /></button>

                        </div>
                    </nav>
                </div>
                <div className='container mx-auto'>
                    <hr />
                </div>
                <div className="footer justify-between container mx-auto p-4 flex text-white">
                    <p className='text-white'>Copyright © 2024 - All right reserved by Dine Dorm</p>
                    <div className='flex space-x-2 text-xl'>
                        <span><FaFacebook className='hover:text-red-600' /></span>
                        <span><FaLinkedin className='hover:text-red-600' /></span>
                        <span><FaTwitterSquare className='hover:text-red-600' /></span>
                    </div>
                </div>
            </footer>

          </Container>
        </div>
    );
};

export default Footer;





{/* 


            <button className="w-96 font-semibold py-3 rounded-full transition-all duration-300 ease-in
                        bg-gradient-to-tl from-[#8B0000]
                        to-[#DC3545] hover:bg-gradient-to-tr
                       text-white">HASIB</button>


              <button
                className="w-96 text-base md:text-xl font-semibold bg-gradient-to-tl hover:bg-gradient-to-tr text-white py-3 px-5 rounded-md from-[#121e2d]
                        to-[#34d1bc] mr-4">
                HASIB</button> */}