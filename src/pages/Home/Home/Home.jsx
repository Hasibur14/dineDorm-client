import { Helmet } from "react-helmet-async";
import Banner from "../../Home/Banner/Banner";
import MealCategory from "../MealCategory/MealCategory";


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
        </div>
    );
};

export default Home;