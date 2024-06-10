import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import imageBg from "../../../assets/banner_104.jpg";
// import { useEffect, useState } from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Testimonial = () => {

    // const axiosSecure = useAxiosSecure();

    // const { data: feedbackData } = useQuery({
    //     queryKey: ["feedbackData"],
    //     queryFn: async () => {
    //         const res = await axiosSecure.get("/feedback");
    //         return res?.data?.result;
    //     },
    // });

    return (
        <div className="">
            <div
                id="my-id"
                className=" min-h-[70vh] bg-blend-darken py-8 items-center bg-fixed"
                style={{
                    backgroundImage: `url(${imageBg})`,
                }}
            >
                <SectionTitle
                    subHeading="Testimonial"
                    Heading="Client Says"
                ></SectionTitle>
                <div className=" mx-auto text-white md:w-6/12 lg:w-4/12 text-center my-5">
                </div>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper md:w-3/4 mx-auto p-5"
                >
                    <div>
                        {/* {feedbackData?.map((testInfo, id) => ( */}
                        <div >
                            <SwiperSlide>
                                <div className="p-10">
                                    <div className="card  space-y-3 p-2 card-compact  bg-neutral-100 shadow-2xl">
                                        <div className="bg-white md:w-3/4 mx-auto relative rounded-xl p-5">
                                            <FaQuoteLeft className="absolute text-[#F53F7B]"></FaQuoteLeft>
                                            <p className="ml-6 text-lg text-center break-all font-title">
                                            Developing a Hostel Management System that focuses on meal services in a university hostel setting can greatly enhance the efficiency and satisfaction of students and staff.
                                            </p>
                                            <FaQuoteRight className="relative text-[#F53F7B] left-full"></FaQuoteRight>
                                        </div>

                                        <div className="flex items-center justify-center gap-7">
                                            <img
                                                className="w-[90px] h-[90px] rounded-full"
                                                src=''
                                                alt=''
                                            />
                                            <div>
                                                <div>
                                                    <h1 className="text-xl font-medium font-title">
                                                        Taj Khan
                                                    </h1>
                                                    <div className="rating">
                                                        <input
                                                            type="radio"
                                                            name="rating-2"
                                                            className="mask mask-star-2 bg-orange-400"
                                                        />
                                                        <input
                                                            type="radio"
                                                            name="rating-2"
                                                            className="mask mask-star-2 bg-orange-400"
                                                            checked
                                                        />
                                                        <input
                                                            type="radio"
                                                            name="rating-2"
                                                            className="mask mask-star-2 bg-orange-400"
                                                        />
                                                        <input
                                                            type="radio"
                                                            name="rating-2"
                                                            className="mask mask-star-2 bg-orange-400"
                                                        />
                                                        <input
                                                            type="radio"
                                                            name="rating-2"
                                                            className="mask mask-star-2 bg-orange-400"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </div>

                    </div>
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonial;