import { Helmet } from "react-helmet-async";
import aboutBg from "../../assets/aboutBg_1280.jpg";
import BannerTitle from "../../components/BannerTitle/BannerTitle";


const About = () => {
    return (
        <div>
            <Helmet>
                <title>About || DineDorm</title>
            </Helmet>
          
         <BannerTitle
         bannerImg={aboutBg}
         subTitle=""
         title="About"></BannerTitle>
        </div>
    );
};

export default About;