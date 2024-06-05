import { RiExchangeLine } from "react-icons/ri";
import useUser from "../../../../hooks/useUser";


const ManageUser = () => {

 const [users] = useUser()

    return (
        <div>
            <div className=" p-2 lg:w-[1520px] sm:p-4 dark:text-gray-800">
                <h2 className="mb-4 text-2xl font-semibold leading-tight">Total Users: {users.length}</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full text-md border ">
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
                                <th className="p-3">User Name</th>
                                <th className="p-3">Email</th>
                                <th className="p-3">User Role</th>
                                <th className="p-3">Make Admin</th>
                                <th className="p-3">subscription</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => (
                                    <tr key={user._id} className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50 text-lg">
                                        <td className="p-3">
                                            <p>{index + 1}</p>
                                        </td>
                                        <td className="p-3">
                                            <p>{user.name}</p>
                                        </td>
                                        <td className="p-3">
                                            <p>{user.email}</p>
                                        </td>
                                        <td className="p-3">
                                        <p>{user.role || 'user'}</p>
                                        </td>
                                        <td className="p-3 flex">
                                        <RiExchangeLine className="text-3xl hover:text-green-500 hover:scale-125"/>
                                        </td>
                                        <td className="">
                                            <span className=" px-3 py-1  font-semibold rounded-md bg-rose-50 text-red-600 dark:text-gray-50 lg:mr-4">
                                                <span>subscription</span>
                                            </span>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageUser;