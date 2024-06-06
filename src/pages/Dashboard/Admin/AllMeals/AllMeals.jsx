import toast from "react-hot-toast";
import { LiaEditSolid } from "react-icons/lia";
import { RiDeleteBinLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import LoadingSpinner from '../../../../components/LoadingSpinner';
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useMeal from "../../../../hooks/useMeal";

const AllMeals = () => {
    const axiosSecure = useAxiosSecure();
    const [meals, loading, refetch] = useMeal();

    const handleDeleteMeal = (meal) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/meal/${meal._id}`);
                if (res.data.deletedCount > 0) {
                    refetch(); 
                    toast.success('Meal has been deleted!');
                }
            }
        });
    };

    if (loading) {
        return <LoadingSpinner></LoadingSpinner>
    }

    return (
        <div>
            <div className="p-2 lg:w-[1520px] sm:p-4 dark:text-gray-800">
                <h2 className="mb-4 text-2xl font-semibold leading-tight">Total Meals: {meals.length}</h2>
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
                                <th className="p-3">REVIEW</th>
                                <th className="p-3">Distributor Name</th>
                                <th className="p-3">EDIT</th>
                                <th className="p-3">DELETE</th>
                                <th className="p-3">Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {meals.map((meal, index) => (
                                <tr key={meal._id} className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                                    <td className="p-3">
                                        <p>{index + 1}</p>
                                    </td>
                                    <td className="p-3">
                                        <p>{meal.title}</p>
                                    </td>
                                    <td className="p-3">
                                        <p>{meal.likes}</p>
                                    </td>
                                    <td className="p-3">
                                        <p>{meal.reviews ? meal.reviews.length : 0}</p>
                                    </td>
                                    <td className="p-3">
                                        <p>{meal.admin}</p>
                                    </td>
                                    <td className="p-3">
                                        <LiaEditSolid className="text-3xl hover:text-green-500" />
                                    </td>
                                    <td className="p-3">
                                        <RiDeleteBinLine
                                            onClick={() => handleDeleteMeal(meal)}
                                            className="text-3xl hover:text-red-600" />
                                    </td>
                                    <td className="p-2 text-right">
                                        <Link to="#" className="btn px-5 text-white font-semibold rounded-md bg-rose-600 dark:text-gray-50 hover:bg-orange-700 lg:mr-4">
                                            <span>View</span>
                                        </Link>
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

export default AllMeals;
