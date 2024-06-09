import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const PaymentHistory = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user?.email}`);
            return res.data;
        }
    });

    return (
        <div>
            <Helmet>
                <title>Payment History || DineDorm</title>
            </Helmet>
            <h2 className="mb-4 text-2xl font-semibold leading-tight ">Total Payment:
                <span className="bg-pink-500 text-lg text-white p-1 ml-2 rounded-full">0{payments.length}</span>
            </h2>
            <section className="container px-4 mx-auto lg:w-[1530px]">
                <div className="flex flex-col">
                    <div className="-mx-4 -my-2 overflow-x-auto-lg:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                                <table className="min-w-full  divide-y divide-gray-200 dark:divide-gray-700">
                                    <thead className="bg-secondary uppercase text-white" >
                                        <tr>
                                            <th scope="col" className="px-4 py-3.5 text-md text-left rtl:text-right text-white font-semibold">
                                                # No
                                            </th>
                                            <th scope="col" className="px-4 py-3.5 text-md text-left rtl:text-right text-white font-semibold">
                                                package
                                            </th>
                                            <th scope="col" className="px-4 py-3.5 text-md text-left rtl:text-right text-white font-semibold">
                                                Price
                                            </th>
                                            <th scope="col" className="px-4 py-3.5 text-md text-left rtl:text-right text-white font-semibold">
                                                Status
                                            </th>
                                            <th scope="col" className="px-4 py-3.5 text-md text-left rtl:text-right text-white font-semibold">
                                                Transaction Id
                                            </th>
                                            <th scope="col" className="px-4 py-3.5 text-md text-left rtl:text-right text-white font-semibold">
                                                Date
                                            </th>
                                            <th scope="col" className="px-4 py-3.5 text-md text-left rtl:text-right text-white font-semibold">
                                                Action
                                            </th>

                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                                        {payments.map((item, index) => (
                                            <tr key={item._id} className="hover:bg-red-100">
                                                <td className="px-4 py-4 text-md text-gray-500 dark:text-gray-300 whitespace-nowrap">{index + 1}</td>
                                                <td className="px-4 py-4 text-md text-gray-500 dark:text-gray-300 whitespace-nowrap">{item.packageName}</td>
                                                <td className="px-4 py-4 text-md text-gray-500 dark:text-gray-300 whitespace-nowrap">$ {item.price}</td>
                                                <td className="px-4 py-4 text-md font-medium text-gray-700 whitespace-nowrap">
                                                    <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-emerald-500 bg-emerald-100/60 dark:bg-gray-800">
                                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                        <h2 className="text-md">{item.status}</h2>
                                                    </div>
                                                </td>
                                                <td className="px-4 py-4 text-md text-gray-500 dark:text-gray-300 whitespace-nowrap">{item.transactionId}</td>
                                                <td className="px-4 py-4 text-md text-gray-500 dark:text-gray-300 whitespace-nowrap">{new Date(item.date).toLocaleDateString()}</td>
                                                <td className="px-4 py-4 text-md whitespace-nowrap">
                                                    <button className="text-blue-500 transition-colors duration-200 hover:text-indigo-500 focus:outline-none">
                                                        Download
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PaymentHistory;
