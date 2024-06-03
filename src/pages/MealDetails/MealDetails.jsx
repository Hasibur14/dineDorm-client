import { useQuery } from "@tanstack/react-query";
import { BiLike } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoArrowRedoCircleOutline } from "react-icons/io5";
import { TiArrowBack } from "react-icons/ti";
import { VscGitPullRequestGoToChanges } from "react-icons/vsc";
import { Link, useParams } from "react-router-dom";
import bannerImg from '../../assets/banner_101.jpg';
import BannerTitle from "../../components/BannerTitle/BannerTitle";
import Container from "../../components/Container/Container";
import LoadingSpinner from "../../components/LoadingSpinner";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const MealDetails = () => {
    const { id } = useParams();
    const axiosCommon = useAxiosPublic();

    const { data: meal = {}, isLoading } = useQuery({
        queryKey: ['meal', id],
        queryFn: async () => {
            const { data } = await axiosCommon.get(`/meal/${id}`);
            return data;
        },
    });

    if (isLoading) return <LoadingSpinner />;

    console.log(meal);

    return (
        <div>
            <div>
                <BannerTitle
                    bannerImg={bannerImg}
                    subTitle="Dine Dorm"
                    title="Meal Details"
                />
            </div>
            <Container>
                <div className="font-heading lg:flex justify-between my-16 border md:px-8 py-6 gap-16">
                    <div className="justify-center lg:w-[30%] space-y-3">
                        <h4 className="text-xl font-semibold">{meal.category}</h4>
                        <h2 className="text-4xl font-bold">{meal.title}</h2>
                        <p>{meal.description}</p>
                        <h5><span className="font-bold">Distributor: </span> Hasib</h5>
                        <div>
                            <span className="font-bold">Ingredients :</span>
                            <p className="lg:ml-8">
                                {meal.ingredients.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </p>
                        </div>
                        <div className="md:flex gap-16">
                            <Link to='/' className="button px-3 py-2 flex "><TiArrowBack className="text-2xl " />Back Home</Link>

                            <button className="bg-gradient-to-tl hover:bg-gradient-to-tr rounded-md from-[#910404] to-[#DC3545] text-white px-3 py-2 flex">Request <VscGitPullRequestGoToChanges  className="text-xl ml-2"/></button>
                        </div>
                        <hr />
                        <div>
                            <div className="flex justify-between mt-4">
                                <h4 className="flex text-lg">Ratings <FaArrowRightLong className="text-xl mt-1 ml-2 text-red-600" /> </h4>
                                <h2 className="flex text-lg">Reviews <IoArrowRedoCircleOutline className="text-2xl ml-2 text-red-600" /></h2>
                            </div>
                            <div className="flex justify-between">
                                <div className="flex mt-2 ml-4 items-center">
                                    {[...Array(5)].map((_, index) => (
                                        <svg
                                            key={index}
                                            className={`w-5 h-5 ${index < meal.rating ? 'text-red-600 dark:text-gray-300' : 'text-gray-500'} fill-current`}
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                                        </svg>
                                    ))}
                                </div>

                                <div>
                                    {meal.reviews?.map((review, index) => (
                                        <li key={index}>{review}</li>
                                    ))}
                                </div>
                            </div>
                            <h4 className="md:text-4xl ml-8 font-bold">{meal.rating}</h4>
                        </div>
                    </div>
                    <div className="w-[56%]">
                        <img className="w-full lg:h-[500px] rounded-lg" src={meal.image} alt={meal.title} />
                        <div className="flex justify-between mt-4">
                            <div className="flex">
                                <div className="flex ml-10">
                                    <BiLike className="text-3xl hover:text-red-600 mr-2" />
                                    <h5 className="text-xl">44</h5>
                                </div>
                                <div className="flex ml-10">
                                    <FaRegComment className="text-3xl hover:text-red-600" />
                                </div>
                            </div>
                            <div className="lg:mr-24">
                                {meal.postTime}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default MealDetails;
