import { LiaHandPointRight } from "react-icons/lia";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const MemberShip = () => {
    return (
        <div>
            <div>
                <SectionTitle
                    subHeading="MemberShip Now"
                    Heading="Upgrade your plan"
                ></SectionTitle>
            </div>
            <div className="bg-white dark:bg-gray-900">
                <div className="container px-6 py-8 mx-auto">
                    <div className="flex flex-col items-center justify-center space-y-8 lg:-mx-4 lg:flex-row lg:items-stretch lg:space-y-0">
                        <div className="flex flex-col w-full max-w-sm p-8 space-y-8 text-center bg-white border-2 border-gray-200 rounded-lg lg:mx-4 dark:bg-gray-900 dark:border-gray-700 hover:scale-105 transition duration-300 hover:bg-secondary">
                            <div className="flex-shrink-0">
                                <h2 className="inline-flex items-center justify-center px-2 font-semibold tracking-tight text-primary text-lg uppercase rounded-lg bg-red-50 dark:bg-gray-700">
                                    Silver
                                </h2>
                            </div>

                            <div className="flex-shrink-0">
                                <span className="pt-2 text-3xl font-bold text-gray-800 uppercase dark:text-gray-100">
                                    $24.90
                                </span>

                                <span className="text-gray-500 dark:text-gray-400">
                                    /month
                                </span>
                            </div>

                            <ul className="flex-1 space-y-4">
                                <li className="text-gray-500 dark:text-gray-400 flex">
                                    <LiaHandPointRight className="mr-2 text-xl " />
                                    Up to 2 meals per day
                                </li>

                                <li className="text-gray-500 dark:text-gray-400 flex">
                                    <LiaHandPointRight className="mr-1 text-xl " />
                                    Breakfast: Continental (cereal, toast, fruit)
                                </li>

                                <li className="text-gray-500 dark:text-gray-400 flex">
                                    <LiaHandPointRight className="mr-1 text-xl " />
                                    Lunch: Basic meal (sandwich, salad, soup)
                                </li>

                                <li className="text-gray-500 dark:text-gray-400 flex">
                                    <LiaHandPointRight className="mr-1 text-xl " />
                                    Access to basic snacks ( tea/coffee)
                                </li>

                                <li className="text-gray-500 dark:text-gray-400 flex">
                                    <LiaHandPointRight className="mr-2 text-xl " />
                                    Dining area access from 7 AM to 7 PM
                                </li>
                            </ul>

                            <button className="inline-flex items-center justify-center px-4 py-2 font-medium text-white uppercase bg-gradient-to-tl hover:bg-gradient-to-tr rounded-md from-[#750505] to-[#DC3545]">
                                Upgrade to Silver
                            </button>
                        </div>

                        <div className="flex flex-col w-full max-w-sm p-8 space-y-8 text-center bg-white border-2 border-gray-200 rounded-lg lg:mx-4 dark:bg-gray-900 dark:border-gray-700 hover:scale-105 transition duration-300 hover:bg-secondary">
                            <div className="flex-shrink-0">
                                <h2 className="inline-flex items-center justify-center px-2 font-semibold tracking-tight text-primary text-lg uppercase rounded-lg bg-red-50 dark:bg-gray-700">
                                    Gold
                                </h2>
                            </div>

                            <div className="flex-shrink-0">
                                <span className="pt-2 text-3xl font-bold text-gray-800 uppercase dark:text-gray-100">
                                    $34.90
                                </span>

                                <span className="text-gray-500 dark:text-gray-400">
                                    /month
                                </span>
                            </div>

                            <ul className="flex-1 space-y-4">
                                <li className="text-gray-500 dark:text-gray-400 flex">
                                    <LiaHandPointRight className="mr-2 text-xl " />
                                    Up to 3 meals per day
                                </li>

                                <li className="text-gray-500 dark:text-gray-400 flex">
                                    <LiaHandPointRight className="mr-2 text-2xl " />
                                    Breakfast: Continental and hot options (eggs, pancakes)
                                </li>

                                <li className="text-gray-500 dark:text-gray-400 flex">
                                    <LiaHandPointRight className=" text-2xl " />
                                    Lunch: Standard meal options (pasta, grilled chicken, salad)
                                </li>

                                <li className="text-gray-500 dark:text-gray-400 flex">
                                    <LiaHandPointRight className="text-2xl " />
                                    Dinner: Standard meal options (stir-fry, pizza, vegetables)
                                </li>

                                <li className="text-gray-500 dark:text-gray-400 flex">
                                    <LiaHandPointRight className="mr-2 text-2xl " />
                                    Access to premium snacks (fruit, yogurt, smoothies)
                                </li>

                                <li className="text-gray-500 dark:text-gray-400 flex">
                                    <LiaHandPointRight className="mr-2 text-xl " />
                                    Dining area access from 6 AM to 10 PM
                                </li>
                            </ul>

                            <button className="inline-flex items-center justify-center px-4 py-2 font-medium text-white uppercase bg-gradient-to-tl hover:bg-gradient-to-tr rounded-md from-[#750505] to-[#DC3545]">
                                Upgrade to Gold
                            </button>
                        </div>

                        <div className="flex flex-col w-full max-w-sm p-8 space-y-8 text-center bg-white border-2 border-gray-200 rounded-lg lg:mx-4 dark:bg-gray-900 dark:border-gray-700 hover:scale-105 transition duration-300 hover:bg-secondary">
                            <div className="flex-shrink-0">
                                <h2 className="inline-flex items-center justify-center px-2 font-semibold tracking-tight text-primary text-lg uppercase rounded-lg bg-red-50 dark:bg-gray-700">
                                    Platinum
                                </h2>
                            </div>

                            <div className="flex-shrink-0">
                                <span className="pt-2 text-3xl font-bold text-gray-800 uppercase dark:text-gray-100">
                                    $49.90
                                </span>

                                <span className="text-gray-500 dark:text-gray-400">
                                    /month
                                </span>
                            </div>

                            <ul className="flex-1 space-y-4">
                                <li className="text-gray-500 dark:text-gray-400 flex">
                                    <LiaHandPointRight className="mr-2 text-xl " />
                                    Unlimited meals per day
                                </li>

                                <li className="text-gray-500 dark:text-gray-400 flex">
                                    <LiaHandPointRight className=" text-3xl " />
                                    Breakfast: Continental and hot options (custom omelets, waffles)
                                </li>

                                <li className="text-gray-500 dark:text-gray-400 flex">
                                    <LiaHandPointRight className=" text-4xl " />
                                    Lunch: Premium meal options (gourmet sandwiches, sushi, premium salads)
                                </li>

                                <li className="text-gray-500 dark:text-gray-400 flex">
                                    <LiaHandPointRight className="text-3xl " />
                                    Dinner: Premium meal options (steak, seafood, gourmet vegetarian)
                                </li>

                                <li className="text-gray-500 dark:text-gray-400 flex">
                                    <LiaHandPointRight className="mr-1 text-3xl " />
                                    Evening snacks: Premium options (cheese platter, gourmet desserts)
                                </li>

                                <li className="text-gray-500 dark:text-gray-400 flex">
                                    <LiaHandPointRight className=" text-3xl " />
                                    Access to deluxe snacks (protein bars, specialty drinks, nuts)
                                </li>

                                <li className="text-gray-500 dark:text-gray-400 flex">
                                    <LiaHandPointRight className="mr-2 text-xl " />
                                    24x7 dining area access
                                </li>
                            </ul>

                            <button className="inline-flex items-center justify-center px-4 py-2 font-medium text-white uppercase bg-gradient-to-tl hover:bg-gradient-to-tr rounded-md from-[#750505] to-[#DC3545]">
                                Upgrade to Platinum
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MemberShip;
