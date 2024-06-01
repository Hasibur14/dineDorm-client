import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";
import { TbFidgetSpinner } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import Container from "../../../components/Container/Container";
import useAuth from "../../../hooks/useAuth";
import './SignIn.css';



const SignIn = () => {

    const navigate = useNavigate();
    const { loading, signIn, signInGoogle } = useAuth();


    // Handle submit function
    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const termsAndConditionCheck = form.termsAndCondition.checked;

        if (!termsAndConditionCheck) {
            return toast.error('Please agree to the terms and conditions.');
        }

        try {
            await signIn(email, password)
            toast.success('Successfully Sign In')
            navigate('/');
        }
        catch (err) {
            toast.error("Something went Wrong try again ☹")
        }

    };

    // Google sign in 
    const handleSignInWithGoogle = async () => {
        try {
            await signInGoogle()
            navigate("/")
            toast.success('Sign In Successfully')
        }
        catch (err) {
            toast.error("SigIn Faild Please Try Again ☹")
        }
    }


    return (
        <div className="signIn-bg">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-5 ld:gap-20 gap-12 min-h-screen place-items-center">
                    {/* Left Section */}
                    <div className="mb-8 text-center md:text-start md:col-span-3 col-span-1">
                        <h1 className="my-3 text-4xl md:text-3xl lg:text-5xl font-bold text-white">
                            WELLCOME
                            BACK </h1>
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
                            <button className="button px-3 py-2 flex" onClick={handleSignInWithGoogle}>
                                <FaGoogle className="text-xl mr-2" />
                                SIGNUP WITH GOOGLE
                            </button>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="border-4 rounded border-opacity-50 border-[#eeeeee] p-5 md:p-8 lg:p-10 col-span-1 md:col-span-2 md:w-full glass shadow-md shadow-slate-600">
                        <div className="pb-6 text-white font-medium text-2xl uppercase text-center">
                            Log In Now
                        </div>
                        <form
                            onSubmit={handleSubmit}
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
                                        required
                                        placeholder="Enter Your Email Here"
                                        className="w-full px-3 py-2 input-style transition-all duration-300"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="password"
                                        name="password"
                                        autoComplete="new-password"
                                        id="password"
                                        required
                                        placeholder="*******"
                                        className="w-full px-3 py-2 input-style  transition-all duration-300"
                                    />
                                </div>
                                <div className="flex items-start gap-2">
                                    <input
                                        type="checkbox"
                                        name="termsAndCondition"
                                        className="text-xl hover:cursor-pointer"
                                    />
                                    <span className=" text-white -mt-[5px]">
                                        I have read and agree to the website
                                        <Link to="/termCondition"
                                            className="font-semibold text-primary ml-2 hover:underline"
                                        >
                                            terms and conditions
                                        </Link>
                                    </span>
                                </div>
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