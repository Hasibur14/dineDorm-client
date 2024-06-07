import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import profileBg from '../../../../assets/profileBg.jpg';
import LoadingSpinner from "../../../../components/LoadingSpinner";
import useAuth from "../../../../hooks/useAuth";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";

const MyProfile = () => {
    const { user, loading: authLoading } = useAuth();
    const axiosPublic = useAxiosPublic();


    const { data: userBadge = {}, isLoading: badgeLoading } = useQuery({
        queryKey: ['userBadge', user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/user/${user?.email}`);
            return res.data?.badge;
        },
        enabled: !!user?.email,
    });

    if (authLoading || badgeLoading) {
        return <LoadingSpinner />;
    }

    return (
        <div className="">
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
                                className='mx-auto object-cover rounded-full h-24 w-24 border-2 border-white'
                            />
                        </a>
                        {userBadge && ( // Check if userBadge is available
                            <p className='p-2 px-4 text-xs text-white bg-pink-500 rounded-full'>
                                <span className="">{userBadge}</span>
                            </p>
                        )}
                        <p className='mt-2 md:text-xl font-medium text-gray-800 '>
                            User Id: {user?.uid}
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
                                    <button className='bg-[#F43F5E] px-10 py-1 rounded-lg text-white cursor-pointer hover:bg-[#af4053] block mb-1'>
                                        Role : User
                                    </button>
                                    <button className='bg-[#F43F5E] px-7 py-1 rounded-lg text-white cursor-pointer hover:bg-[#af4053]'>
                                        Update Profile
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;
