import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import toast from "react-hot-toast";
import { ImSpinner9 } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import LoadingSpinner from "../../../components/LoadingSpinner";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import './checkoutForm.css';

const CheckoutForm = ({ packages, refetch, loading }) => {
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [transactionId, setTransactionId] = useState();
    const [processing, setProcessing] = useState(false);
    const navigate = useNavigate();
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();

    console.log(transactionId)

    useEffect(() => {
        const createPaymentIntent = async () => {
            try {
                const { data } = await axiosSecure.post('/create-payment-intent', { price: packages.price });
                setClientSecret(data.clientSecret);
            } catch (error) {
                console.error('Error creating payment intent:', error);
            }
        };
        if (packages.price) {
            createPaymentIntent();
        }
    }, [packages.price, axiosSecure]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            console.log('Stripe or Elements not loaded');
            return;
        }

        const card = elements.getElement(CardElement);
        if (!card) {
            console.log('Card Element not found');
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (error) {
            console.log('Payment error!', error);
            setError(error.message);
            return;
        } else {
            console.log('Payment method', paymentMethod);
            setError('');
        }

        // Confirm payment
        setProcessing(true);
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        });

        setProcessing(false);

        if (confirmError) {
            console.log('confirm error', confirmError);
            setError(confirmError.message);
        } else {
            console.log('payment intent', paymentIntent);
            if (paymentIntent.status === 'succeeded') {
                console.log('transaction id', paymentIntent.id);
                setTransactionId(paymentIntent.id);

                // Save the payment in the database
                const payment = {
                    email: user?.email,
                    name: user?.displayName,
                    price: packages.price,
                    transactionId: paymentIntent.id,
                    date: new Date(),
                    status: 'paid',
                    badge: packages.title, // Assuming packages contain cartIds
                };

                try {
                    const res = await axiosSecure.post('/payments', payment);
                    console.log('payment', res.data);
                    refetch();
                    if (res.data?.paymentResult?.insertedId) {
                        toast.success('Thank you for the payment');

                        // Show SweetAlert2 confirmation modal
                        Swal.fire({
                            title: 'Payment Successful!',
                            text: 'Thank you for your payment.',
                            icon: 'success',
                            confirmButtonText: 'OK'
                        }).then((result) => {
                            if (result.isConfirmed) {
                                navigate('/dashboard/payment-history');
                            }
                        });
                    }
                } catch (dbError) {
                    console.error('Error saving payment to database:', dbError);
                }
            }
        }
    };

    if (loading) return <LoadingSpinner />;

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <div className='flex mt-2 justify-around'>
                    <button
                        type='submit'
                        className='inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2'
                        disabled={!stripe || !clientSecret || processing}
                    >
                        {processing ? (
                            <ImSpinner9 className='animate-spin m-auto' size={24} />
                        ) : (
                            `Pay ${packages?.price}`
                        )}
                    </button>
                    <button
                        type='button'
                        className='inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2'
                        onClick={() => navigate('/')}
                    >
                        Cancel
                    </button>
                </div>
                {error && <div className="text-red-500 mt-2">{error}</div>}
            </form>
        </div>
    );
};

CheckoutForm.propTypes = {
    packages: PropTypes.shape({
        price: PropTypes.number.isRequired,
        title: PropTypes.string,
        cartIds: PropTypes.arrayOf(PropTypes.string),
    }).isRequired,
    refetch: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
};

export default CheckoutForm;
