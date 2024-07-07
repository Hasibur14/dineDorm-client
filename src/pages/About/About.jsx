import { Helmet } from "react-helmet-async";
import { ImArrowRight } from "react-icons/im";
import { Link } from "react-router-dom";
import aboutBg from "../../assets/aboutBg_1280.jpg";
import BannerTitle from "../../components/BannerTitle/BannerTitle";
import Container from "../../components/Container/Container";
import ChooseUs from "./ChooseUs";




const About = () => {
    return (
        <div>
            <Helmet>
                <title>About || DineDorm</title>
            </Helmet>

            <BannerTitle
                bannerImg={aboutBg}
                subTitle="Dine Dorm"
                title="About"></BannerTitle>

            <Container>
                <div className="grid lg:grid-cols-2 lg:gap-16">
                    <div className="p-10 bg-violet-200 mt-14 rounded-lg">
                        <h3 className="text-xl font-bold">Welcome to Dine Dorm!</h3>
                        <p> At Dine Dorm, we understand the importance of nutritious and delicious meals for students living in hostels. Our mission is to provide an efficient, reliable, and delightful meal system that caters to the diverse needs of hostel residents.</p>
                    </div>
                    <div className="p-10 bg-orange-200 mt-10 lg:mt-14 rounded-lg">
                        <h3 className="text-xl font-bold">What We Offer</h3>
                        <p> <span className="font-semibold"> Flexible Meal Packages</span>
                            We offer a variety of meal packages (Silver, Gold, Platinum) to suit different preferences and budgets. Each package includes access to three meals a day with the option to customize your meals.</p>
                    </div>
                </div>
                <div className="lg:flex justify-center items-center mt-10">
                    <div className="p-10 bg-fuchsia-200 rounded-lg w-full lg:w-[48%]">
                        <h3 className="text-xl font-bold">Our Story</h3>
                        <p>
                            Founded with the vision to enhance the hostel dining experience, Dine Dorm was created to address the common challenges faced by students in accessing quality meals. We believe that every student deserves easy access to nutritious food without the hassle of meal planning and preparation.
                        </p>
                    </div>
                </div>
                
                <div className="">
                    <h2 className="text-4xl font-extrabold mt-16 flex justify-center">Choose Us</h2>
                    <ChooseUs/>
                </div>

              <div className="flex justify-end">
              <Link to="/contact" className="flex"> <span className="text-xl font-bold">Contact</span> <ImArrowRight className="animate-pulse text-red-500 mt-2 ml-2"/></Link>
              </div>
            </Container>
        </div>
    );
};

export default About;