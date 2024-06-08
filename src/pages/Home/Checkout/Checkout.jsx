import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useQuery } from "@tanstack/react-query";
import PropTypes from 'prop-types';
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import checkoutBgImg from '../../../assets/checkout1.png';
import BannerTitle from "../../../components/BannerTitle/BannerTitle";
import Container from "../../../components/Container/Container";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const Checkout = () => {
    const { id } = useParams();
    const axiosPublic = useAxiosPublic();
    const { user } = useAuth();

    const { data: packages = {}, isLoading, refetch } = useQuery({
        queryKey: ['packages', id],
        queryFn: async () => {
            const { data } = await axiosPublic.get(`/checkout/${id}`);
            return data;
        },
    });

    return (
        <div>
            <Helmet>
                <title>Checkout || DineDorm</title>
            </Helmet>
            <BannerTitle
                bannerImg={checkoutBgImg}
                subTitle="Upgrade your plan"
                title="Checkout Now"
            />
            <Container>
                <div className="lg:flex justify-evenly mt-16 text-lg">
                    <div className="bg-zinc-50 lg:w-[45%] px-16 py-6">
                        <h2 className="text-2xl font-bold">Package: {packages.title}</h2>
                        <div className="space-y-1">
                            <div className="flex justify-between">
                                <p>Package price:</p>
                                <p>$ {packages.price}</p>
                            </div>
                            <hr />
                            <div className="flex justify-between">
                                <p>Subtotal</p>
                                <p>${packages.price}</p>
                            </div>
                            <div className="flex justify-between">
                                <p>Tax</p>
                                <p>$ 0.00</p>
                            </div>
                            <hr />
                            <div className="flex justify-between">
                                <p>Total:</p>
                                <p className="font-bold">${packages.price}</p>
                            </div>
                        </div>
                    </div>
                    <div className="shadow-xl border lg:w-[45%] px-16 py-6">
                        <div className="space-y-3 mb-10">
                            <h1 className="text-xl font-bold">Contact Information</h1>
                            <div className="flex justify-evenly border p-1 rounded-md bg-stone-100 text-center">
                                <p>Name:</p>
                                <p>{user?.displayName}</p>
                            </div>
                            <div className="flex justify-evenly border p-1 rounded-md bg-stone-100 text-center">
                                <p>Email:</p>
                                <p>{user?.email}</p>
                            </div>
                        </div>
                        <Elements stripe={stripePromise}>
                            <CheckoutForm
                                packages={packages}
                                refetch={refetch}
                                loading={isLoading}
                            />
                        </Elements>
                    </div>
                </div>
            </Container>
        </div>
    );
};

Checkout.propTypes = {
    packages: PropTypes.shape({
        title: PropTypes.string,
        price: PropTypes.number,
        cartIds: PropTypes.arrayOf(PropTypes.string),
    }),
    refetch: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
};

export default Checkout;
