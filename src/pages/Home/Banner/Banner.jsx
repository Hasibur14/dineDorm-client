import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import bannerBg from "../../../assets/banner_102.jpg";
import Container from "../../../components/Container/Container";


const HomeBanner = () => {

    return (
        <div
            className="h-[400px] md:min-h-screen grid place-items-center
      bg-cover bg-no-repeat bg-[#12080ccf] bg-blend-overlay "
            style={{
                backgroundImage: `url(${bannerBg})`,
            }}
        >
            <Container>
                <div className="font-title space-y-6 lg:space-y-8 py-16 lg:py-20">
                    {/* Title and Subtitle for banner */}
                    <div className="text-left lg:text-center pt-10 lg:pt-0">
                        <h1
                            className="text-white text-3xl md:text-4xl lg:text-5xl font-semibold pb-2 md:pb-4"
                        >
                            Welcome To Our Dine Dorm
                        </h1>
                        <p className="text-xl  md:text-2xl lg:text-4xl text-white pb-2 md:pb-4">
                            Explore top-rated Meals, activities and more!
                        </p>
                    </div>
                    {/* Button */}
                    <div className="md:flex lg:ml-28">
                        <div className="relative flex items-center  ">
                            <span className="absolute">
                                <CiSearch className="mx-4 " />
                            </span>
                            <input type="email" placeholder="Search here" className="block w-/12 py-3 text-gray-700 placeholder-gray-400/70 bg-white border border-gray-200 rounded-l-lg pl-11 pr-5 rtl:pr-11 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-[#34d1bc] dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <button
                                className="text-base md:text-xl font-semibold bg-gradient-to-tl hover:bg-gradient-to-tr text-white py-3 px-5 rounded-r-lg from-[#121e2d] to-secondary mr-4" >
                                Search
                            </button>
                        </div>
                        <div>
                            <Link to="sign-up">
                                <button
                                    className="text-base md:text-xl font-semibold bg-gradient-to-tl hover:bg-gradient-to-tr text-white py-3 px-5 rounded-md from-[#121e2d] to-secondary">
                                    Explore Now
                                </button>
                            </Link>
                        </div>
                    </div>

                </div>
            </Container >
        </div >
    );
};

export default HomeBanner;