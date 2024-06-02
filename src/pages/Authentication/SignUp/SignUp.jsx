import { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FiLogIn } from "react-icons/fi";
import { TbFidgetSpinner } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import Container from "../../../components/Container/Container";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import "./SignUp.css";

const SignUp = () => {
    const { createUser, updateUserProfile, googleSignIn, signInWithFacebook, loading, setLoading } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        if (!data.termsAndConditions) {
            toast.error("You must agree to the terms and conditions");
            return;
        }

        try {
            setLoading(true);
            const result = await createUser(data.email, data.password);
            const loggedUser = result.user;
            await updateUserProfile(data.name, data.photoURL);

            const userInfo = {
                name: data.name,
                email: data.email,
                photo: data.photoURL,
            };

            const res = await axiosPublic.post(`/users`, userInfo);
            if (res.data.insertedId) {
                toast.success('User created successfully');
                navigate('/');
            }
        } catch (error) {
            console.error(error);
            toast.error("Failed to create user. Please try again ☹");
        } finally {
            setLoading(false);
        }
    };

    const handleSignInWithGoogle = async () => {
        try {
            setLoading(true);
            await googleSignIn();
            navigate("/");
            toast.success('Sign In Successfully');
        } catch (err) {
            toast.error("Sign In Failed. Please try again ☹");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleSignInWithFacebook = async () => {
        try {
            setLoading(true);
            await signInWithFacebook();
            navigate('/');
            toast.success("Login Successfully");
        } catch (error) {
            toast.error("Sign In Failed. Please try again ☹");
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="signUp-bg py-[80px] md:pt-[50px] lg:pt-[68px]">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-5 ld:gap-20 gap-12 min-h-screen place-items-center">
                    {/* Left Section */}
                    <div className="mb-8 text-center md:text-start md:col-span-3 col-span-1">
                        <h1 className="my-3 text-4xl md:text-3xl lg:text-5xl font-bold text-white">
                            WELCOME TO OUR
                        </h1>
                        <h1 className="my-4 text-4xl md:text-3xl lg:text-5xl font-bold text-white">
                            Dine DORM
                        </h1>
                        <p className="text-sm text-gray-400">
                            Join Our Dine Dorm today! Sign up to create your account and unlock a world of event planning possibilities. From booking tickets to managing events, we have got you covered. Let's make your events extraordinary together!
                        </p>
                        <div className="flex flex-col md:flex-row gap-6 pt-5">
                            <Link to='/signIn'>
                                <button className="button flex w-full px-3 py-2">
                                    SIGN IN
                                    <FiLogIn className="text-xl ml-2" />
                                </button>
                            </Link>
                            <button onClick={handleSignInWithGoogle} className="button flex px-3 py-2">
                                <FaGoogle className="text-xl mr-2" />
                                SIGNUP WITH GOOGLE
                            </button>
                            <button className="button px-3 py-2 flex" onClick={handleSignInWithFacebook}>
                                <FaSquareFacebook className="text-xl mr-2" />
                                SIGN IN WITH FACEBOOK
                            </button>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="border-4 rounded border-opacity-50 border-[#eeeeee] p-5 md:p-8 lg:p-10 col-span-1 md:col-span-2 md:w-full glass">
                        <div className="pb-6 ">
                            <h2 className="text-center text-white font-medium text-2xl uppercase">Sign Up For Free</h2>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text"
                                    {...register("name", { required: true })}
                                    placeholder="Enter your name here"
                                    className="w-full px-3 py-2 input-style transition-all duration-300"
                                />
                                {errors.name && <span className="text-red-500">Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    {...register("email", { required: true })}
                                    placeholder="Enter your email here"
                                    className="w-full px-3 py-2 input-style transition-all duration-300"
                                />
                                {errors.email && <span className="text-red-500">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 20,
                                        pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/,
                                    })}
                                    placeholder="******"
                                    className="w-full px-3 py-2 input-style transition-all duration-300"
                                />
                                {errors.password?.type === 'required' && <span className="text-red-500">Password is required</span>}
                                {errors.password?.type === 'minLength' && <span className="text-red-500">Password must be at least 6 characters</span>}
                                {errors.password?.type === 'maxLength' && <span className="text-red-500">Password must be less than 20 characters</span>}
                                {errors.password?.type === 'pattern' && <span className="text-red-500">Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character</span>}
                            </div>
                            <div className="flex items-start gap-2">
                                <input
                                    name="termsAndConditions"
                                    type="checkbox"
                                    className="text-xl hover:cursor-pointer"
                                    {...register("termsAndConditions", { required: true })}
                                />
                                <span className="text-white -mt-[5px]">
                                    I have read and agree to the website
                                    <Link to="/termCondition" className="font-semibold text-primary ml-2 hover:underline">
                                        terms and conditions
                                    </Link>
                                </span>
                            </div>
                            {errors.termsAndConditions && <span className="text-red-500">You must agree to the terms and conditions</span>}
                            <div className="form-control mt-6">
                                <button
                                    type="submit"
                                    className="button w-full py-2"
                                >
                                    {loading ? (
                                        <TbFidgetSpinner className="animate-spin m-auto" />
                                    ) : (
                                        "SIGN UP"
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

export default SignUp;
