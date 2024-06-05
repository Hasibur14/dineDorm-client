// import { useQuery } from "@tanstack/react-query";
// import useAuth from "./useAuth";
// import useAxiosPublic from "./useAxiosPublic";

// const useUser = () => {
//     const axiosPublic = useAxiosPublic();
//     const { user } = useAuth();

//     const { data: userData, isLoading, refetch } = useQuery({
//         queryKey: ['user', user?.email],
//         queryFn: async () => {
//             const res = await axiosPublic.get(`/user/${user?.email}`);
//             return res.data;
//         },
//         enabled: !!user, // Ensure user is available before making the request
//     });

//     return [userData, isLoading, refetch];
// };

// export default useUser;
