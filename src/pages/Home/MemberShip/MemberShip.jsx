import { useQuery } from "@tanstack/react-query";
import Container from "../../../components/Container/Container";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import MemberShipCard from "./MemberShipCard";

const MemberShip = () => {

    const axiosPublic = useAxiosPublic();

    const { data: packages = [], isPending } = useQuery({
        queryKey: ['packages'],
        queryFn: async () => {
            const res = await axiosPublic.get('/packages');
            return res.data;
        }
    });

    return (
        <div className="bg-stone-100 py-16">
            <div className="">
                <SectionTitle
                    subHeading="MemberShip Now"
                    Heading="Upgrade your plan"
                ></SectionTitle>
            </div>
            <div>
                <Container>
                    <MemberShipCard
                        packages={packages}
                        loading={isPending}
                    ></MemberShipCard>
                </Container>
            </div>
        </div>
    );
};

export default MemberShip;