
import { useEffect, useState } from "react";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import contactBg from "../../assets/contact_Bg_1280.jpg";
import BannerTitle from "../../components/BannerTitle/BannerTitle";

const ContactUs = () => {



    const [currentTime, setCurrentTime] = useState(new Date());
    const [timeSlots, setTimeSlots] = useState([]);
    const [selectedSlot, setSelectedSlot] = useState("");

    // Time related
    useEffect(() => {
        const timerID = setInterval(() => tick(), 1000);
        return () => clearInterval(timerID);
    }, []);

    function tick() {
        setCurrentTime(new Date());
    }


  
    // Generate time slots from startTime to endTime with a specified interval
    const generateTimeSlots = (startTime, endTime, interval) => {
        const slots = [];
        let currentTime = new Date(startTime);

        while (currentTime <= endTime) {
            const timeString = currentTime.toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
            });
            slots.push(timeString);
            currentTime.setMinutes(currentTime.getMinutes() + interval);
        }

        return slots;
    };

    useEffect(() => {
        const startTime = new Date();
        startTime.setHours(21, 0, 0); // 9:00 PM
        const endTime = new Date();
        endTime.setHours(23, 0, 0); // 11:00 PM
        const interval = 20; // 20 minutes

        const slots = generateTimeSlots(startTime, endTime, interval);
        setTimeSlots(slots);
    }, []);

   

    return (
        <div>
            <BannerTitle
                bannerImg={contactBg}
                subTitle="Get IN Tauch"
                title="Contact">
            </BannerTitle>
          
                               
            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 lg:py-16  md:px-4 md:mx-auto max-w-screen-lg">
                    <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
                        Lets<span>`S Start a Conversation</span>
                    </h2>
                    <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
                        Got a technical issue? Want to send feedback about a beta feature?
                        Need details about our Business plan? Let us know.
                    </p>
                    {/* Main div */}
                    <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5 md:p-5 rounded-lg text-black">
                        <div>
                            <form className="space-y-8 ">
                                <div>
                                    <label
                                        htmlFor="subject"
                                        className="block mb-2 text-sm font-medium text-black dark:text-gray-300"
                                    >
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        name="from_name"
                                        id="subject"
                                        className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                        placeholder="Enter your name"
                                        required
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block mb-2 text-sm font-medium text-black dark:text-gray-300"
                                    >
                                        Your email
                                    </label>
                                    <input
                                        type="email"
                                        name="from_email"
                                        id="email"
                                        className="shadow-sm w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                        placeholder="name@example.com"
                                        required
                                    />
                                </div>
                                <div className="sm:col-span-2">
                                    <label
                                        htmlFor="message"
                                        className="block mb-2 text-sm font-medium text-black dark:text-gray-400"
                                    >
                                        Your message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="6"
                                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Leave a comment..."
                                        required
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    value="Send"
                                    className="py-3 px-5 text-sm font-medium text-center  rounded-lg bg-primary text-white sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 bg-primary-600 hover:bg-primary-700 focus:ring-primary-800"
                                >
                                    Send message
                                </button>
                            </form>
                        </div>
                        <div className=" p-5 space-y-3">
                            <iframe
                                className="sm:mb-10 w-full "
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57903.062360049844!2d91.81983580698456!3d24.89998049301974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375054d3d270329f%3A0xf58ef93431f67382!2sSylhet!5e0!3m2!1sen!2sbd!4v1708321918956!5m2!1sen!2sbd"
                                height="280"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                            <div className="flex items-center  gap-5">
                                <FaLocationDot className="w-6 h-6 text-primary" />
                                <p className="text-xl font-title">
                                    Level-4, 34, Awal Centre, Dhaka
                                </p>
                            </div>
                            <div className="flex items-center  gap-5">
                                <FaPhone className="w-6 h-6 text-primary" />
                                <p className="text-xl font-title"></p>
                            </div>
                            <div className="flex items-center  gap-5">
                                <MdEmail className="w-6 h-6 text-primary" />
                                <p className="text-xl font-title"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactUs;