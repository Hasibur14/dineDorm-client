import { useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import { AiFillLike } from "react-icons/ai";
import { CiCalendarDate } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { TiArrowBack } from "react-icons/ti";
import { VscGitPullRequestGoToChanges } from "react-icons/vsc";
import { Link, useParams } from "react-router-dom";
import bannerImg from '../../assets/banner_101.jpg';
import BannerTitle from "../../components/BannerTitle/BannerTitle";
import Container from "../../components/Container/Container";
import LoadingSpinner from "../../components/LoadingSpinner";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import UserRequestedMeal from "../UserRequestedMeal/UserRequestedMeal";

const MealDetails = () => {
    const { id } = useParams();
    const axiosPublic = useAxiosPublic();
    const [isOpen, setIsOpen] = useState(false);
    const [selectedMeal, setSelectedMeal] = useState(null);
    const { user } = useAuth();

    const { data: meal = {}, isLoading, refetch } = useQuery({
        queryKey: ['meal', id],
        queryFn: async () => {
            const { data } = await axiosPublic.get(`/meal/${id}`);
            return data;
        },
    });

    const { mutate } = useMutation({
        mutationKey: 'likeMeal',
        mutationFn: async (mealId) => {
            const response = await axiosPublic.post(`/meal/${mealId}/like`, { userId: user.id });
            return response.data;
        },
        onSuccess: (data) => {
            toast.success("Like successful:", data);
            setSelectedMeal(prevMeal => ({
                ...prevMeal,
                likes: data.likes
            }));
            refetch();
        },
    });

    const handleLike = async () => {
        try {
            await mutate(meal._id);
        } catch (error) {
            console.error("Error liking meal:", error);
        }
    };

    const formattedDate = new Date(meal.postTime).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    const closeModal = () => {
        setIsOpen(false);
    };

    const openModal = (meal) => {
        setSelectedMeal(meal);
        setIsOpen(true);
    };

    if (isLoading) return <LoadingSpinner />;

    return (
        <div>
            <Helmet>
                <title>Meal Details || DineDorm</title>
            </Helmet>
            <div>
                <BannerTitle
                    bannerImg={bannerImg}
                    subTitle="Dine Dorm"
                    title="Meal Details"
                />
            </div>
            <Container>
                <div className="font-heading lg:flex justify-between my-16 border shadow-2xl bg-base-100 md:px-8 py-6 gap-16">
                    <div className="justify-center lg:w-[35%] space-y-3">
                        <Link to='/' className="max-w-36 border hover:bg-red-500 hover:text-white px-3 py-2 flex items-center">
                            <TiArrowBack className="text-2xl mr-2" />Back Home
                        </Link>
                        <h4 className="text-xl text-secondary font-semibold">{meal.category}</h4>
                        <h2 className="text-2xl font-bold">{meal.title}</h2>
                        <p>{meal.description}</p>
                        <h5><span className="font-bold">Distributor: </span> {meal.admin}</h5>
                        <div>
                            <span className="font-bold">Ingredients :</span>
                            <ul className="list-disc lg:ml-8">
                                {meal.ingredients?.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="md:flex gap-16">
                            <button
                                onClick={() => openModal(meal)}
                                className="bg-gradient-to-tl hover:bg-gradient-to-tr rounded-md from-[#910404] to-[#DC3545] text-white px-3 py-2 flex items-center">
                                Request <VscGitPullRequestGoToChanges className="text-xl ml-2" />
                            </button>
                        </div>
                        <hr />
                        <div>
                            <div className="flex justify-between mt-4">
                                <h4 className="flex text-lg">Ratings <FaArrowRightLong className="text-xl mt-1 ml-2 text-red-600" /></h4>
                                <h2 className="flex text-lg">
                                    Reviews
                                    <div className="badge badge-secondary ml-2">{meal.reviews?.length}</div>
                                </h2>
                            </div>
                            <div className="flex justify-between">
                                <div className="flex mt-2 ml-4 items-center">
                                    {[...Array(5)].map((_, index) => (
                                        <svg
                                            key={index}
                                            className={`w-5 h-5 ${index < meal.rating ? 'text-red-600' : 'text-gray-500'} fill-current`}
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                                        </svg>
                                    ))}
                                </div>

                                <ul>
                                    {meal.reviews?.map((review, index) => (
                                        <li key={index}>{review}</li>
                                    ))}
                                </ul>
                            </div>
                            <h4 className="md:text-4xl ml-8 font-bold">{meal.rating}</h4>
                        </div>
                    </div>
                    <div className="lg:w-[60%]">
                        <img className="w-full h-[300px] md:h-[570px] rounded" src={meal.image} alt={meal.title} />
                        <div className="flex justify-between mt-3">
                            <div className="flex">
                                <div className="flex ml-8">
                                    <AiFillLike
                                        onClick={handleLike}
                                        className="text-2xl text-blue-500 hover:text-red-600 mr-2" />
                                    <h5 className="text-xl">{meal.likes}</h5>
                                </div>
                                <div className="flex ml-10">
                                    <FaRegComment className="text-xl text-red-600 mr-1" />
                                    <a href="">Review</a>
                                </div>
                            </div>
                            <div className="lg:mr-24 text-lg flex">
                                <CiCalendarDate className="text-red-600 text-2xl mr-1" />
                                {formattedDate}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

            {selectedMeal && (
                <UserRequestedMeal
                    closeModal={closeModal}
                    isOpen={isOpen}
                    meal={selectedMeal}
                />
            )}
        </div>
    );
};

export default MealDetails;
