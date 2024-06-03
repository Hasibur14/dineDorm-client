
import PropTypes from 'prop-types';
import { GiCampCookingPot } from 'react-icons/gi';

const SectionTitle = ({ Heading, subHeading }) => {
    return (
        <div className="mx-auto text-center md:w-8/12 lg:w-4/12 my-8 space-y-2 mt-28">
            <p className="text-3xl font-semibold font-subHeading text-primary">{subHeading}</p>
            <h2 className="uppercase text-3xl md:text-5xl font-bold font-heading">{Heading}</h2>
            <p className="flex text-center justify-center ">
                <span className="mt-5 text-primary font-semibold">----------------------</span>
                <GiCampCookingPot className="text-primary text-5xl" />
                <span className="mt-5 text-primary font-semibold">----------------------</span>
            </p>
        </div>
    );
};

SectionTitle.propTypes = {
    Heading: PropTypes.string.isRequired,
    subHeading: PropTypes.string.isRequired
};

export default SectionTitle;
