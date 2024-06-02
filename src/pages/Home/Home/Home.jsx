import { Helmet } from "react-helmet-async";
import Banner from "../../Home/Banner/Banner";
import MealCategory from "../MealCategory/MealCategory";
import MemberShip from "../MemberShip/MemberShip";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>
                    Home || DineDorm
                </title>
            </Helmet>
            <Banner></Banner>
            <MealCategory></MealCategory>
            <MemberShip></MemberShip>
        </div>
    );
};

export default Home;