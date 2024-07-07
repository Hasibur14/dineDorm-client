import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import 'react-tabs/style/react-tabs.css';

const MyTabs = ({ item }) => {
    return (
        <div className='border-2 rounded '>
            <div className="flex h-44 max-w-3xl gap-4 overflow-hidden bg-neutral rounded shadow-lg  dark:bg-gray-800 hover:border border-red-700 ">
                <div className="relative w-6/12 bg-cover transform transition duration-500 hover:scale-110" style={{ backgroundImage: `url(${item.image})` }}>
                    <div className="absolute top-0 w-[70px] h-[70px] p-6 flex flex-col items-center justify-center  bg-gradient-to-tr  from-primary to-[#921b42] ">
                        <p className="text-md text-white font-bold">Price</p>
                        <p className="text-xl text-white font-bold">
                            ${item.price}
                        </p>
                    </div>
                </div>
                <div className="p-2 space-y-2 w-6/12 ">
                    <h1 className="text-xl font-bold text-gray-800 dark:text-white">{item.title.substring(0, 25) + '...'}</h1>
                    <p className="mt-2  text-gray-600 dark:text-gray-400">
                        {item.description.substring(0, 60) + '...'}
                    </p>
                    <div className="flex py-1 item-center">

                        {[...Array(5)].map((_, index) => (
                            <svg
                                key={index}
                                className={`w-5 h-5 ${index < item.rating ? 'text-red-600 dark:text-gray-300' : 'text-gray-500'} fill-current`}
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                            </svg>
                        ))}
                    </div>
                    <div className=''>
                        <Link to={`/meal/${item._id}`}
                            className="font-bold text-white uppercase transition-colors duration-300 transform bg-gradient-to-tl hover:bg-gradient-to-tr rounded-lg w-full px-8 py-2 from-[#910404] to-[#DC3545] text-xs">
                            Details 
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

MyTabs.propTypes = {
    item: PropTypes.shape({
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        _id: PropTypes.string.isRequired,
    }).isRequired,
};

export default MyTabs;
