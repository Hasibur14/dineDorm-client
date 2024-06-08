import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import LoadingSpinner from "../../../components/LoadingSpinner";

const MemberShipCard = ({ packages, loading }) => {

    if (loading) return <LoadingSpinner></LoadingSpinner>

    return (
        <div>
            <section className="py-6 dark:text-gray-900">
                <div >
                    <div className="grid max-w-md grid-cols-1 gap-6 mx-auto auto-rows-fr lg:max-w-full lg:gap-2 xl:gap-6 lg:grid-cols-3">
                        {
                            packages.map(item => (
                                <div key={item._id} className="relative z-0 flex flex-col items-center p-8 border-t hover:border hover:border-red-500 rounded-md bg-white shadow-xl ">
                                    <span className="absolute top-0 px-6 pt-1 pb-2 font-medium rounded-b-lg bg-rose-600 text-gray-50 uppercase">{item.title}</span>
                                    <p className="flex items-center justify-center my-6 space-x-2 font-bold">
                                        <span className="pb-2 text-4xl">${item.price}</span>
                                        <span className="text-lg">/{item.frequency}</span>
                                    </p>
                                    <ul className="flex-1 space-y-2">
                                        {
                                            item.features.map(feature => (
                                                <li key={feature} className="flex items-center space-x-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-rose-600">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                                                    </svg>
                                                    <span>{feature}</span>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                    <Link to={`/checkout/${item._id}`}>
                                        <button className="px-4 py-2 mt-4 font-semibold uppercase border rounded-lg md:mt-12 sm:py-3 sm:px-8 border-rose-600 hover:border-none hover:text-white hover:bg-gradient-to-tr from-[#DC3545] to-[#910404]">
                                            Upgrade to {item.title}
                                        </button>
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

MemberShipCard.propTypes = {
    packages: PropTypes.arrayOf(PropTypes.shape({
        _id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        frequency: PropTypes.string.isRequired,
        features: PropTypes.arrayOf(PropTypes.string).isRequired
    })).isRequired,
    loading: PropTypes.bool.isRequired
};

export default MemberShipCard;
