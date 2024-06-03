import PropTypes from 'prop-types';
import Container from '../Container/Container';


const BannerTitle = ({ bannerImg, title, subTitle }) => {
    return (
        <div
            className="grid md:h-72 lg:h-[450px] place-items-center bg-cover bg-no-repeat bg-[#3f1212cf] bg-blend-overlay"
            style={{
                backgroundImage: `url(${bannerImg})`,
            }}
        >
            <Container>
                <div className="font-title space-y-6 lg:space-y-8 py-16 lg:py-20">
                    <div className="text-left lg:text-center pt-10 lg:pt-0">
                        <p className="text-xl text-white pb-2 md:pb-4">
                            {subTitle}
                        </p>
                        <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-semibold pb-2 md:pb-4">
                            {title}
                        </h1>
                    </div>
                </div>
            </Container>
        </div>
    );
};

BannerTitle.propTypes = {
    bannerImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
};

export default BannerTitle;
