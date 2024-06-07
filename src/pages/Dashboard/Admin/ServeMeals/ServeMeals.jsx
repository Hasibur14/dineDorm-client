import LoadingSpinner from "../../../../components/LoadingSpinner";
import useRequestMeal from "../../../../hooks/useRequestMeal";

const ServeMeals = () => {

    const [requestMeal, loading, refetch] = useRequestMeal()

    if (loading) {
        return <LoadingSpinner />;
    }

    return (
        <div>
            <div className="w-full p-2 mx-auto sm:p-4 dark:text-gray-800">
                <h2 className="mb-4 text-2xl font-semibold leading-tight">Request Meals: <span className="bg-primary text-white p-1 rounded-full">0{requestMeal.length}</span></h2>
                <div className="overflow-x-auto">
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
                                <th className="p-3 text-right">STATUS</th>
                                <th className="p-3">CANCEL</th>
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
                                        <p>{item.likes}</p>
                                    </td>
                                    <td className="p-3">
                                        <p>{item.reviews}</p>
                                    </td>
                                    <td className='text-center px-6 py-4 whitespace-nowrap '>
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
                                    <td className="p-3 text-right">
                                        <span className="px-3 py-2 text-white font-semibold rounded-md bg-fuchsia-600 dark:text-gray-50">
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
