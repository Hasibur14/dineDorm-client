import axios from "axios";
import { useEffect, useState } from "react";
import { AiOutlineSolution } from "react-icons/ai";
import { FaGlassCheers, FaHandshake, FaLocationArrow, FaStar } from "react-icons/fa";
import { GiBrain, GiIdea } from "react-icons/gi";
import { MdSupportAgent } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";
import Container from "../../../components/Container/Container";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const WhyChooseUs = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get("./whyChooseUs.json")
            .then((res) => {
                if (Array.isArray(res.data)) {
                    setItems(res.data);
                } else {
                    console.error("Expected array data from API");
                }
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    const iconMap = {
        1: <FaHandshake />,
        2: <FaStar />,
        3: <FaGlassCheers />,
        4: <GiBrain />,
        5: <FaLocationArrow />,
        6: <MdSupportAgent />,
        7: <AiOutlineSolution />,
        8: <GiIdea />,
        9: <RiSecurePaymentLine />
        
    };

    return (
        <Container>
            <SectionTitle
                subHeading="Discover the Benefits"
                Heading="Why Choose Us"></SectionTitle>
            <div className="mb-10 p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-center mx-auto w-full">
                    {items.length > 0 ? (
                        items.map((item, index) => (
                            <div
                                key={index}
                                className="relative border border-opacity-10 py-16 shadow hover:scale-110 hover:bg-accent transition duration-300 h-64 md:w-72 lg:w-64 w-full text-center flex flex-col justify-center group"
                            >
                                <div className="text-5xl mx-auto w-full h-full flex justify-center items-center">
                                    <h1 className="text-center text-accent group-hover:text-white">
                                        {iconMap[item.id]}
                                    </h1>
                                </div>
                                <h1 className="text-center text-black font-bold pt-5 group-hover:text-white">
                                    {item.title}
                                </h1>
                                <p className="text-center group-hover:text-white">
                                    {item.description}
                                </p>
                            </div>
                        ))
                    ) : (
                        <p>No items found</p>
                    )}
                </div>
            </div>
        </Container>
    );
};

export default WhyChooseUs;
