import toast from 'react-hot-toast';
import LoadingSpinner from '../../../../components/LoadingSpinner';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import useUpcomingMeal from "../../../../hooks/useUpcomingMeal";

const UpcomingMeals = () => {
    const [upcomingMeal, loading, refetch] = useUpcomingMeal();
    const axiosSecure = useAxiosSecure();

    const handlePostMeal = async (mealId) => {
        try {
            const response = await axiosSecure.post('/moveMeal', { mealId });

            if (response.status === 200) {
                toast.success('Meal posted successfully');
                refetch();  // Refresh the list after successful operation
            }
        } catch (error) {
            console.error('Error moving meal:', error);
            toast.error('Failed to move meal');
        }
    };

    if (loading) return <LoadingSpinner />;

    return (
        <div>
            <div className="p-2 lg:w-[1520px] shadow-2xl rounded sm:p-4 dark:text-gray-800 border-2">
                <div className="text-center justify-between flex ">
                    <h2 className="mb-4 text-2xl font-semibold leading-tight">Total Upcoming Meals: {upcomingMeal.length}</h2>
                    <div className='flex'>
                        <h4 className='text-xl font bold'>Add Upcoming meal</h4>
                        <button className="font-bold text-white uppercase transition-colors duration-300 transform bg-gradient-to-tl hover:bg-gradient-to-tr rounded btn from-[#9e4444] to-[#e94051] text-sm">
                            Add Meal
                        </button>
                    </div>
                </div>
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
                                <th className="p-3">Price</th>
                                <th className="p-3">Add_Collection</th>
                            </tr>
                        </thead>
                        <tbody>
                            {upcomingMeal.map((item, index) => (
                                <tr key={item._id} className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50 hover:bg-red-50">
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
                                        <p>{item.price}</p>
                                    </td>
                                    <td className="p-1.5">
                                        <button
                                            onClick={() => handlePostMeal(item._id)}
                                            className="w-28 py-2 px-4 text-white font-semibold rounded bg-cyan-500 dark:text-gray-50 hover:bg-orange-700 ">
                                            Post Meal
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default UpcomingMeals;
