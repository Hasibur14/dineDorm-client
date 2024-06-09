
import toast from "react-hot-toast";
import { RiDeleteBinLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import LoadingSpinner from '../../../../components/LoadingSpinner';
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useReview from "../../../../hooks/useReview";

const AllReviews = () => {
    const axiosSecure = useAxiosSecure();
   const [reviews, loading, refetch] = useReview()

    const handleDeleteMeal = (review) => {
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
                const res = await axiosSecure.delete(`/review/${review._id}`);
                if (res.data.deletedCount > 0) {
                    refetch();
                    toast.success('Review has been deleted!');
                }
            }
        });
    };

    if (loading) {
        return <LoadingSpinner></LoadingSpinner>
    }

    return (
        <div>
            <div className="p-2 lg:w-[1520px] shadow-2xl rounded  sm:p-4 dark:text-gray-800 border">
                <h2 className="mb-4 text-2xl font-semibold leading-tight">Total Meals: {reviews.length}</h2>
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
                                <th className="p-3">Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {reviews.map((review, index) => (
                                <tr key={review._id}
                                    className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50 hover:bg-red-50">
                                    <td className="p-3">
                                        <p>{index + 1}</p>
                                    </td>
                                    <td className="p-3">
                                        <p>{review.title}</p>
                                    </td>
                                    <td className="p-3">
                                        <p>{review.likes}</p>
                                    </td>
                                    <td className="p-3">
                                        <p>{review.reviews ? review.reviews.length : 0}</p>
                                    </td>
                                    <td className="p-3">
                                        <RiDeleteBinLine
                                            onClick={() => handleDeleteMeal(review)}
                                            className="text-3xl p-1 text-white bg-red-600 hover:scale-110 rounded" />
                                    </td>
                                    <td className="p-1">
                                        <Link to={`/meal/${review._id}`} className="py-2 px-4 text-white font-semibold rounded bg-cyan-500 dark:text-gray-50 hover:bg-orange-700 lg:mr-4">
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

export default AllReviews;
