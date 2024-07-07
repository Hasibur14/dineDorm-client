import { Helmet } from "react-helmet-async";
import aboutBg from "../../assets/aboutBg_1280.jpg";
import BannerTitle from "../../components/BannerTitle/BannerTitle";
import Container from "../../components/Container/Container";


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
            <div className="bg-neutral">

            </div>
         </Container>
        </div>
    );
};

export default About;