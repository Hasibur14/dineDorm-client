import { Helmet } from "react-helmet-async";
import Banner from "../../Home/Banner/Banner";
import MealCategory from "../MealCategory/MealCategory";
import MemberShip from "../MemberShip/MemberShip";
import Testimonial from "../Testimonial/Testimonial";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>
                    Home || DineDorm
                </title>
            </Helmet>
            <div className="space-y-24">
                <Banner></Banner>
                <MealCategory></MealCategory>
                <MemberShip></MemberShip>
                <Testimonial></Testimonial>
            </div>
        </div>
    );
};

export default Home;