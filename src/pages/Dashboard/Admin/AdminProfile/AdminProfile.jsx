import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import profileBg from '../../../../assets/profileBg.jpg';
import LoadingSpinner from "../../../../components/LoadingSpinner";
import useAuth from "../../../../hooks/useAuth";
import useMeal from "../../../../hooks/useMeal";
import useUser from "../../../../hooks/useUser";

const AdminProfile = () => {
    const { user, loading: authLoading } = useAuth();
    const [totalMeals, setTotalMeals] = useState(0);
    const [userInfo, setUserInfo] = useState(null);
    const [meals, mealsLoading] = useMeal();
    const [users] = useUser();

    useEffect(() => {
        if (user?.email && meals.length > 0) {
            const adminMeals = meals.filter(meal => meal.adminEmail === user.email);
            setTotalMeals(adminMeals.length);
        }
    }, [user, meals]);

    useEffect(() => {
        if (user?.email && users.length > 0) {
            const currentUser = users.find(u => u.email === user.email);
            setUserInfo(currentUser);
        }
    }, [user, users]);

    if (authLoading || mealsLoading) return <LoadingSpinner />;

    return (
        <div className='flex justify-center items-center md:mt-16'>
            <Helmet>
                <title>Profile-Dashboard || DineDorm</title>
            </Helmet>
            <div className='bg-white shadow-lg rounded-2xl w-4/5 lg:ml-60'>
                <img
                    alt='profile'
                    src={profileBg}
                    className='w-full mb-4 rounded-t-lg h-36'
                />
                <div className='flex flex-col items-center justify-center p-4 -mt-16'>
                    <a href='#' className='relative block'>
                        <img
                            alt='profile'
                            src={user?.photoURL}
                            className='mx-auto object-cover rounded-full h-24 w-24  border-2 border-white '
                        />
                    </a>
                    {userInfo && (
                        <>
                            <p className='p-2 px-4 text-xs text-white bg-pink-500 rounded-full'>
                            {userInfo.role.charAt(0).toUpperCase() + userInfo.role.slice(1)}
                            </p>
                            <p className='mt-2 md:text-xl font-medium text-gray-800 '>
                                User Id: {user?.uid}
                                <p className="badge badge-warning ml-2">{userInfo.badge}</p>
                            </p>
                            <p className='mt-2 md:text-xl font-medium text-gray-800 '>
                                Total Meals Added: {totalMeals}
                            </p>
                            <div className='w-full p-2 mt-4 rounded-lg'>
                                <div className='flex flex-wrap items-center justify-between text-sm text-gray-600 '>
                                    <p className='flex flex-col'>
                                        Name
                                        <span className='font-bold text-black '>
                                            {user?.displayName}
                                        </span>
                                    </p>
                                    <p className='flex flex-col'>
                                        Email
                                        <span className='font-bold text-black '>{user?.email}</span>
                                    </p>
                                    <div>
                                        <button className='bg-[#F43F5E] px-7 py-1 rounded-lg text-white cursor-pointer hover:bg-[#af4053]'>
                                            Update Profile
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AdminProfile;
