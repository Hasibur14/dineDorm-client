import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { LiaEditSolid } from "react-icons/lia";
import { RiDeleteBinLine } from "react-icons/ri";
import useAuth from "../../../../hooks/useAuth";
import useReview from "../../../../hooks/useReview";


const MyReviews = () => {

    const { user } = useAuth();
    const [rev, setRev] = useState([])
    const [reviews, loading, refetch] = useReview()

    useEffect(() => {
        if (user?.email && reviews) { // Add a check to ensure reviews is initialized
            const userReviews = reviews.filter(meal => meal.reviewUserEmail === user?.email);
            setRev(userReviews);
        }
    }, [user, reviews]);


    return (
        <div className="lg:w-[1530px] shadow-2xl border">
            <Helmet>
                <title>My Review || DineDorm</title>
            </Helmet>
            <h2 className="mb-4 text-2xl font-semibold leading-tight ">My Review:
                <span className="bg-pink-500 text-lg text-white p-1 ml-2 rounded-full">0{reviews.length}</span>
            </h2>
            <section className="container px-4 mx-auto ">
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
                                                Title
                                            </th>
                                            <th scope="col" className="px-4 py-3.5 text-md text-left rtl:text-right text-white font-semibold">
                                                Likes
                                            </th>
                                            <th scope="col" className="px-4 py-3.5 text-md text-left rtl:text-right text-white font-semibold">
                                                Review
                                            </th>
                                            <th scope="col" className="px-4 py-3.5 text-md text-left rtl:text-right text-white font-semibold">
                                                Edit
                                            </th>
                                            <th scope="col" className="px-4 py-3.5 text-md text-left rtl:text-right text-white font-semibold">
                                                Delete
                                            </th>
                                            <th scope="col" className="px-4 py-3.5 text-md text-left rtl:text-right text-white font-semibold">
                                                Action
                                            </th>

                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                                        {rev.map((item, index) => (
                                            <tr key={item._id} className="hover:bg-red-100">
                                                <td className="px-4 py-4 text-md text-gray-500 dark:text-gray-300 whitespace-nowrap">{index + 1}</td>
                                                <td className="px-4 py-4 text-md text-gray-500 dark:text-gray-300 whitespace-nowrap">{item.title}</td>
                                                <td className="px-4 py-4 text-md text-gray-500 dark:text-gray-300 whitespace-nowrap"> {item.likes}</td>
                                                <td className="px-4 py-4 text-md text-gray-500 dark:text-gray-300 whitespace-nowrap"> {item.review}</td>
                                                <td>
                                                    <LiaEditSolid className="text-3xl hover:text-green-500" />
                                                </td>
                                                <td>
                                                    <RiDeleteBinLine className="text-3xl hover:text-red-600" />
                                                </td>
                                                <td className="p-3 text-right">
                                                    <span className="btn px-3 py-1 text-white font-semibold rounded-md bg-rose-600 dark:text-gray-50">
                                                        <span> View</span>
                                                    </span>
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

export default MyReviews;
