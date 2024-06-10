import { RiDeleteBinLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import useUpcomingMeal from "../../../../hooks/useUpcomingMeal";

const UpcomingMeals = () => {

    const [upcomingMeal, loading, refetch] = useUpcomingMeal()


    return (
        <div>
            <div className="p-2 lg:w-[1520px] shadow-2xl rounded  sm:p-4 dark:text-gray-800 border-2">
                <h2 className="mb-4 text-2xl font-semibold leading-tight">Total Upcoming Meals: {upcomingMeal.length}</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full text-md border">
                        <colgroup>
                            <col />
                            <col />
                            <col />
                            <col />
                            <col />
                            <col className="w-24" />
                        </colgroup>
                        <thead className="bg-secondary rounded-xl text-white dark:bg-gray-300">
                            <tr className="text-left uppercase">
                                <th className="p-3">NO.</th>
                                <th className="p-3">TITLE</th>
                                <th className="p-3">LIKES</th>
                                <th className="p-3">Review</th>
                                <th className="p-3">DELETE</th>
                                <th className="p-3 ">Add_Collection</th>
                            </tr>
                        </thead>
                        <tbody>
                            {upcomingMeal.map((item, index) => (
                                <tr key={item._id}
                                    className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50 hover:bg-red-50">
                                    <td className="p-3">
                                        <p>{index + 1}</p>
                                    </td>
                                    <td className="p-3">
                                        <p>{item.title}</p>
                                    </td>
                                    <td className="p-3">
                                        <p>{item.likes}</p>
                                    </td>
                                    <td className="p-3">
                                        <p>{item.reviews ? item.reviews.length : 0}</p>
                                    </td>
                                    <td className="p-3">
                                        <RiDeleteBinLine
                                            // onClick={() => handleDeleteReview(item)}
                                            className="text-3xl p-1 text-white bg-red-600 hover:scale-110 rounded" />
                                    </td>
                                    <td className="p-1">
                                        <Link to={`/meal/${item._id}`}
                                            className="w-24 py-2 px-4 text-white font-semibold rounded bg-cyan-500 dark:text-gray-50 hover:bg-orange-700 lg:mr-4">
                                            <span>Post Meal </span>
                                        </Link>
                                    </td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="text-center justify-end flex my-4 mr-10">
                    <button className="font-bold text-white uppercase transition-colors duration-300 transform bg-gradient-to-tl hover:bg-gradient-to-tr rounded btn from-[#9e4444] to-[#e94051] text-sm">
                        <h4>Add Meal</h4>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UpcomingMeals;