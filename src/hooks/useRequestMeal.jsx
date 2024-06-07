import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useRequestMeal = () => {
    const axiosPublic = useAxiosPublic();

    const { data: requestMeal = [], isPending: loading, refetch } = useQuery({
        queryKey: ['requestMeal'],
        queryFn: async () => {
            const res = await axiosPublic.get('/requestMeals')
            return res.data
        }
    })

    return [requestMeal, loading, refetch]
};

export default useRequestMeal;