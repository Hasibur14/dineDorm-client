import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import LoadingSpinner from "../../../../components/LoadingSpinner";
import useAuth from "../../../../hooks/useAuth";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import useRequestMeal from "../../../../hooks/useRequestMeal";

const RequestedMeals = () => {

    const { user } = useAuth();
    const axiosPublic = useAxiosPublic()
    const [reqMeals, setReqMeals] = useState([]);
    const [requestMeal, loading, refetch] = useRequestMeal();

    useEffect(() => {
        if (user?.email) {
            const meals = requestMeal.filter(meal => meal.requestUserEmail === user?.email);
            setReqMeals(meals);
        }
    }, [user, requestMeal]);


    const handleDeleteMeal = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, cancel it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosPublic.delete(`/requestMeal/${item._id}`);
                if (res.data.deletedCount > 0) {
                    refetch();
                    toast.success('Request Meal has been deleted!');
                }
            }
        });
    };


    if (loading) {
        return <LoadingSpinner />;
    }

    return (
        <div>
            <div className="bg-[#F8F7FA] lg:w-[1520px] p-2 mx-auto sm:p-4 dark:text-gray-800  shadow-lg rounded md:space-y-8">
                <h2 className="mb-4 text-2xl font-semibold leading-tight ">Request Meals:
                    <span className="bg-pink-500 text-lg text-white p-1 ml-2 rounded-full">0{reqMeals.length}</span>
                </h2>
                <div className="overflow-x-auto border  ">
                    <table className="min-w-full text-md">
                        <colgroup>
                            <col />
                            <col />
                            <col />
                            <col />
                            <col />
                            <col className="w-24" />
                        </colgroup>
                        <thead className="bg-secondary text-white dark:bg-gray-300">
                            <tr className="text-left">
                                <th className="p-3">NO.</th>
                                <th className="p-3">TITLE</th>
                                <th className="p-3">LIKES</th>
                                <th className="p-3">REVIEW</th>
                                <th className="p-3">STATUS</th>
                                <th className="p-3 ml-4">CANCEL</th>
                            </tr>
                        </thead>
                        <tbody>
                            {reqMeals.map((item, index) => (
                                <tr key={item._id} className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
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
                                        <p>{item.reviews}</p>
                                    </td>
                                    <td className='whitespace-nowrap '>
                                        <div
                                            className={`inline-flex items-center px-3 py-1 rounded-full gap-x-2 
                                                 ${item.status === 'pending' && 'bg-orange-100/60 text-orange-500'} 
                                                 ${item.status === 'delivery' && 'bg-emerald-100/60 text-emerald-500'}`}>

                                            <span className={`h-1.5 w-1.5 rounded-full 
                                                ${item.status === 'pending' && 'bg-orange-500'}
                                                ${item.status === 'delivery' && 'bg-green-500'}`}></span>
                                            <h2 className='text-sm font-normal'>{item.status}</h2>
                                        </div>
                                    </td>
                                    <td className=" py-1 text-right">
                                        <span
                                            onClick={() => handleDeleteMeal(item)}
                                            className="btn px-3 text-white font-semibold rounded-md bg-rose-600 dark:text-gray-50 hover:bg-red-700 mr-4">
                                            Cancel
                                        </span>
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

export default RequestedMeals;
