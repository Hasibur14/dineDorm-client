import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { TbDetailsOff } from "react-icons/tb";
import { Link } from "react-router-dom";
import bgImg from '../../assets/allmeals_Bg_Img.jpg';
import BannerTitle from "../../components/BannerTitle/BannerTitle";
import Container from "../../components/Container/Container";
import LoadingSpinner from "../../components/LoadingSpinner";
import useAxiosPublic from "../../hooks/useAxiosPublic";


const Meals = () => {
    const axiosPublic = useAxiosPublic();
    const [services, setServices] = useState([]);
    const [search, setSearch] = useState('')
    const [searchText, setSearchText] = useState('')


    const { data: meals = [], isPending: loading, refetch } = useQuery({
        queryKey: ['meals'],
        queryFn: async () => {
            const res = await axiosPublic.get('/meals')
            setServices(meals)
            return res.data
        }
    });


    const handleSearch = e => {
        e.preventDefault()
        setSearch(searchText)
    }

    if (loading) { <LoadingSpinner></LoadingSpinner> }
    console.log(meals.length)

    return (
        <div className="bg-neutral ">
            <Helmet>
                <title>All Menu || DineDorm</title>
            </Helmet>
            <BannerTitle
                bannerImg={bgImg}
                subTitle="Dine Dorm"
                title="All Meals"
            ></BannerTitle>

            <Container>
                <div className="lg:flex gap-10 my-16 space-y-3 lg:space-y-0">
                    <select className="select select-error w-full max-w-xs">
                        <option disabled selected>Filter by Category</option>
                        <option>Breakfast</option>
                        <option>Lunch</option>
                        <option>Dinner</option>
                    </select>
                    <div className="w-[330px]">
                        <form onSubmit={handleSearch}>
                            <div className='flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-red-600 focus-within:ring-red-600 border-primary'>
                                <input
                                    className='px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent'
                                    type='text'
                                    onChange={e => setSearchText(e.target.value)}
                                    value={searchText}
                                    name='search'
                                    placeholder='Enter the Text'
                                    aria-label='Enter the Text'
                                />
                                <button className='px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 bg-primary uppercase transition-colors duration-300 transform  focus:outline-none rounded'>
                                    Search
                                </button>
                            </div>
                        </form>
                    </div>
                    <select className="select select-error w-full max-w-xs">
                        <option disabled selected>Filter by Price</option>
                        <option>Breakfast</option>
                        <option>Lunch</option>
                        <option>Dinner</option>
                    </select>
                </div>

                <div className="font-heading grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 pb-10">
                    {
                        meals.map(meal => (
                            <div key={meal._id} className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 ">
                                <img className="object-cover p-4 rounded-lg w-full h-64" src={meal.image} alt={meal.title} />

                                <div className="p-6">
                                    <div>
                                        <span className="text-md font-medium text-secondary uppercase dark:text-blue-400">{meal.category}</span>
                                        <a href="#" className="block mt-2 text-2xl font-bold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline" tabIndex="0" role="link">{meal.title}</a>
                                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                                            {meal.description.substring(0, 40) + '.....'}
                                        </p>
                                    </div>

                                    <div className="mt-4">
                                        <Link to={`/meal/${meal._id}`} className="flex w-full text-sm py-1.5 text-center justify-center font-semibold text-white  transition-colors duration-300 transform bg-gradient-to-tl hover:bg-gradient-to-tr rounded from-[#910404] to-[#DC3545]">
                                            <TbDetailsOff className="text-lg mr-2" />
                                            Details
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </Container>
        </div>
    );
};

export default Meals;