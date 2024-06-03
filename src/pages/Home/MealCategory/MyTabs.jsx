
import 'react-tabs/style/react-tabs.css';

const MyTabs = ({ item }) => {
    return (
        <div>
            <div className="flex max-w-2xl h- overflow-hidden bg-neutral rounded-lg shadow-lg dark:bg-gray-800 hover:border border-red-500">
                <div className="w-2/5 bg-cover" style={{ backgroundImage: `url(${item.image})` }}></div>

                <div className="w-2/3 p-4 md:p-4">
                    <h1 className="text-xl font-bold text-gray-800 dark:text-white">{item.title}</h1>

                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{item.description}</p>

                    <div className="flex mt-2 item-center">
                    
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

                    <div className="flex justify-between mt-3 item-center">
                        <h1 className="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">Price: ${item.price}</h1>
                        <button className="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gradient-to-tl hover:bg-gradient-to-tr rounded-md from-[#910404] to-[#DC3545]">Details</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default MyTabs;
