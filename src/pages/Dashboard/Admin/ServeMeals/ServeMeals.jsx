import toast from "react-hot-toast";
import LoadingSpinner from "../../../../components/LoadingSpinner";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import useRequestMeal from "../../../../hooks/useRequestMeal";

const ServeMeals = () => {

    const axiosPublic = useAxiosPublic()
    const [requestMeal, loading, refetch] = useRequestMeal();



    const handleStatusChange = async (id, status) => {
        try {
            const { data } = await axiosPublic.patch(`/requestMeal/${id}`, { status });
            console.log(data);
            toast.success('Delivery Completed!');
            refetch()
        } catch (error) {
            toast.error('Failed to delivery');
        }
    };

    if (loading) {
        return <LoadingSpinner />;
    }

    return (
        <div>
            <div className="bg-[#F8F7FA] rounded shadow-md lg:w-[1520px] p-2 mx-auto sm:p-4 dark:text-gray-800">
                <h2 className="mb-4 text-2xl font-semibold leading-tight">Request Meals: <span className="bg-fuchsia-600 text-lg text-white p-1 rounded-full">0{requestMeal.length}</span></h2>
                <div className="overflow-x-auto border">
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
                            <tr className="text-left uppercase">
                                <th className="p-3">#NO.</th>
                                <th className="p-3">TITLE</th>
                                <th className="p-3"> Name</th>
                                <th className="p-3">Email</th>
                                <th className="p-3">STATUS</th>
                                <th className="p-3">Delivery</th>
                            </tr>
                        </thead>
                        <tbody>
                            {requestMeal.map((item, index) => (
                                <tr key={item._id} className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                                    <td className="p-3">
                                        <p>{index + 1}</p>
                                    </td>
                                    <td className="p-3">
                                        <p>{item.title}</p>
                                    </td>
                                    <td className="p-3">
                                        <p>{item.requestUserName}</p>
                                    </td>
                                    <td className="p-3">
                                        <p>{item.requestUserEmail}</p>
                                    </td>
                                    <td className='px-6 whitespace-nowrap '>
                                        <div
                                            className={`inline-flex  items-center px-3 py-1 rounded-full gap-x-2 
                                                 ${item.status === 'pending' && 'bg-orange-100/60 text-orange-500'} 
                                                 ${item.status === 'delivery' && 'bg-emerald-100/60 text-emerald-500'}`}>

                                            <span className={`h-1.5 w-1.5 rounded-full 
                                                ${item.status === 'pending' && 'bg-orange-700'}
                                                ${item.status === 'delivery' && 'bg-green-500'}`}></span>
                                            <h2 className=''>{item.status}</h2>
                                        </div>
                                    </td>
                                    <td className="p-1 text-right">
                                        <span
                                            onClick={() => handleStatusChange(item._id, 'delivery')}
                                            className="btn px-3 lg:px-6  text-white font-semibold rounded-md bg-fuchsia-600 
                                        hover:bg-pink-500 dark:text-gray-50">
                                            <span>Serve</span>
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

export default ServeMeals;
