import { Link } from "react-router-dom";

import bannerBg from "../../../assets/banner_101.jpg";
import Container from "../../../components/Container/Container";


const HomeBanner = () => {

    return (
        <div
            className="h-[400px] md:min-h-screen grid place-items-center
      bg-cover bg-no-repeat bg-[#1f0f15cf] bg-blend-overlay "
            style={{
                backgroundImage: `url(${bannerBg})`,
            }}
        >
            <Container>
                <div className="font-title space-y-6 lg:space-y-8 py-16 lg:py-20">
                    {/* Title and Subtitle for banner */}
                    <div className="text-left lg:text-center pt-10 lg:pt-0">
                        <h1
                            className="text-white text-3xl md:text-4xl
             lg:text-5xl font-semibold pb-2 md:pb-4"
                        >
                            Welcome To Our Dine Dorm
                        </h1>
                        <p className="text-xl  md:text-2xl lg:text-4xl text-white pb-2 md:pb-4">
                            Explore top-rated Meals, activities and more!
                        </p>
                    </div>
                    {/* Button */}
                    <div className="text-center">
                        <Link to="event">
                            <button
                                className="text-base md:text-xl font-semibold bg-gradient-to-tl hover:bg-gradient-to-tr text-white py-3 px-5 rounded-md from-[#121e2d]
                        to-accent mr-4"
                            >
                                Explore Events
                            </button>
                        </Link>

                        <Link to="sign-up">
                            <button
                                className="text-base md:text-xl font-semibold bg-gradient-to-tl hover:bg-gradient-to-tr text-white py-3 px-5 rounded-md from-[#121e2d]
              to-accent"
                            >
                                Register Now
                            </button>
                        </Link>

                    </div>
                </div>
            </Container>
        </div>
    );
};

export default HomeBanner;