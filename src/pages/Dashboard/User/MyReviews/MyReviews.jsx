import { LiaEditSolid } from "react-icons/lia";
import { RiDeleteBinLine } from "react-icons/ri";


const MyReviews = () => {
    return (
        <div>
            <div className=" w-full p-2 mx-auto sm:p-4 dark:text-gray-800">
                <h2 className="mb-4 text-2xl font-semibold leading-tight">Request Meals</h2>
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
                                <th className="p-3">EDIT</th>
                                <th className="p-3">DELETE</th>
                                <th className="p-3">VIEW</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                                <td className="p-3">
                                    <p>97412378923</p>
                                </td>
                                <td className="p-3">
                                    <p>Microsoft Corporation</p>
                                </td>
                                <td className="p-3">
                                    <p>14 Jan 2022</p>
                                    <p className="dark:text-gray-600">Friday</p>
                                </td>
                                <td className="p-3">
                                    <p>01 Feb 2022</p>
                                    <p className="dark:text-gray-600">Tuesday</p>
                                </td>
                                <td className="p-3 text-right">
                                    <p>$15,792</p>
                                </td>
                                <td>
                                <LiaEditSolid className="text-3xl hover:text-green-500"/>
                                </td>
                                <td>
                                <RiDeleteBinLine className="text-3xl hover:text-red-600"/>
                                </td>
                                <td className="p-3 text-right">
                                    <span className="btn px-3 py-1 text-white font-semibold rounded-md bg-rose-600 dark:text-gray-50">
                                        <span> View</span>
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyReviews;