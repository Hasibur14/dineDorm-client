import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { TbFidgetSpinner } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import Container from "../../../components/Container/Container";
import SocialLogin from "../../../components/SocialLogin/SocialLogin";
import useAuth from "../../../hooks/useAuth";
import './SignIn.css';

const SignIn = () => {
    const navigate = useNavigate();
    const { loading, signIn, } = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();

    // Handle submit function
    const onSubmit = async (data) => {
        const { email, password, termsAndCondition } = data;

        if (!termsAndCondition) {
            return toast.error('Please agree to the terms and conditions.');
        }

        try {
            await signIn(email, password);
            toast.success('Successfully Signed In');
            navigate('/');
        } catch (err) {
            toast.error("Something went wrong. Please try again ☹");
            console.error(err);
        }
    };


    return (
        <div className="signIn-bg">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-5 ld:gap-20 gap-12 min-h-screen place-items-center">
                    {/* Left Section */}
                    <div className="mb-8 text-center md:text-start md:col-span-3 col-span-1">
                        <h1 className="my-3 text-4xl md:text-3xl lg:text-5xl font-bold text-white">
                            WELCOME BACK
                        </h1>
                        <h1 className="my-4 text-4xl md:text-3xl lg:text-5xl font-bold text-white">
                            TO OUR DINE DORM
                        </h1>
                        <p className="text-sm text-gray-400">
                            Welcome back to Our DINE DORM! Sign in now to explore upcoming events and manage your account. Your seamless event experience awaits.
                        </p>
                        <div className="flex flex-col md:flex-row gap-6 pt-5">
                            <Link to='/signUp'>
                                <button className="button w-full px-3 py-2 ">
                                    SIGN UP
                                </button>
                            </Link>
                           <SocialLogin></SocialLogin>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="border-4 rounded border-opacity-50 border-[#eeeeee] p-5 md:p-8 lg:p-10 col-span-1 md:col-span-2 md:w-full glass shadow-md shadow-slate-600">
                        <div className="pb-6 text-white font-medium text-2xl uppercase text-center">
                            Log In Now
                        </div>
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            noValidate=""
                            action=""
                            className="space-y-4"
                        >
                            {/* Form Inputs */}
                            <div className="space-y-5">
                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        {...register("email", { required: "Email is required" })}
                                        placeholder="Enter Your Email Here"
                                        className="w-full px-3 py-2 input-style transition-all duration-300"
                                    />
                                    {errors.email && <span className="text-red-500">{errors.email.message}</span>}
                                </div>
                                <div>
                                    <input
                                        type="password"
                                        name="password"
                                        autoComplete="new-password"
                                        id="password"
                                        {...register("password", { required: "Password is required" })}
                                        placeholder="*******"
                                        className="w-full px-3 py-2 input-style  transition-all duration-300"
                                    />
                                    {errors.password && <span className="text-red-500">{errors.password.message}</span>}
                                </div>
                                <div className="flex items-start gap-2">
                                    <input
                                        type="checkbox"
                                        name="termsAndCondition"
                                        {...register("termsAndCondition", { required: true })}
                                        className="text-xl hover:cursor-pointer"
                                    />
                                    <span className="text-white -mt-[5px]">
                                        I have read and agree to the website
                                        <Link to="/termCondition" className="font-semibold text-primary ml-2 hover:underline">
                                            terms and conditions
                                        </Link>
                                    </span>
                                </div>
                                {errors.termsAndCondition && <span className="text-red-500">You must agree to the terms and conditions</span>}
                            </div>

                            {/* Submit Button */}
                            <div>
                                <button
                                    type="submit"
                                    className="button py-2 w-full"
                                >
                                    {loading ? (
                                        <TbFidgetSpinner size={20} className="animate-spin m-auto" />
                                    ) : (
                                        "SIGN IN"
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default SignIn;
