import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useUpcomingMeal = () => {
    const axiosPublic = useAxiosPublic();

    const { data: upcomingMeal = [], isPending: loading, refetch } = useQuery({
        queryKey: ['upcomingMeal'],
        queryFn: async () => {
            const res = await axiosPublic.get('/upcomingMeals')
            return res.data
        }
    })

    return [upcomingMeal, loading, refetch]
};

export default useUpcomingMeal;