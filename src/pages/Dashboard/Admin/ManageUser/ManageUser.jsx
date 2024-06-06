import toast from "react-hot-toast";
import { FaUsers } from "react-icons/fa";
import { MdOutlinePublishedWithChanges } from "react-icons/md";
import { RiUserUnfollowFill } from "react-icons/ri";
import Swal from "sweetalert2";
import LoadingSpinner from "../../../../components/LoadingSpinner";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useUser from "../../../../hooks/useUser";


const ManageUser = () => {

    const axiosSecure = useAxiosSecure()
    //get using data in db using userHook
    const [users, loading, refetch] = useUser();


    //Make Admin

    const handleMakeAdmin = user => {
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    refetch()
                    toast.success(`${user.name} is an Admin Now!`)
                }
            })
    };

    //handle Delete user in db
    const handleDeleteUser = user => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/users/${user._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            toast.success(`${user.name} has been deleted!`)
                        }
                    })
            }
        })
    };

    if (loading) {
        return <LoadingSpinner></LoadingSpinner>
    }


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
                            <col className="w-44" />
                        </colgroup>
                        <thead className="bg-secondary rounded-xl text-white dark:bg-gray-300">
                            <tr className="text-left uppercase">
                                <th className="p-3">NO.</th>
                                <th className="p-3">User Name</th>
                                <th className="p-3">Email</th>
                                <th className="p-3">User Role</th>
                                <th className="p-3">Make Admin</th>
                                <th className="p-3">Delete user</th>
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
                                        <td>
                                            {user.role === 'admin' ?
                                                <MdOutlinePublishedWithChanges
                                                    className="text-[33px] bg-green-500 text-white p-0.5 rounded " />
                                                : <button
                                                    onClick={() => handleMakeAdmin(user)}
                                                    className="p-1 rounded bg-orange-500 hover:scale-125">
                                                    <FaUsers className="text-white text-2xl " />
                                                </button>}
                                        </td>
                                        <td>
                                            <button
                                                onClick={() => handleDeleteUser(user)}
                                                className="p-1 rounded bg-primary hover:scale-125">
                                                <RiUserUnfollowFill className="text-white text-2xl " />
                                            </button>
                                        </td>

                                        <td className="">
                                            <span className=" px-3 py-  font-semibold rounded-md bg-sky-100 text-sky-500 dark:text-gray-50 lg:mr-4">
                                                <span>{user.badge}</span>
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