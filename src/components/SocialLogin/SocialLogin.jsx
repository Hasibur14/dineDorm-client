import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";


const SocialLogin = () => {

    const { googleSignIn, } = useAuth();
    const navigate = useNavigate()

    const axiosPublic = useAxiosPublic();

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user)
                const userinfo = {
                    email: result.user?.email,
                    name: result.user?.displayName,
                    badge: 'bronze',
                    role: 'user',
                }
                axiosPublic.post('/users', userinfo)
                    .then(res => {
                        console.log(res.data)
                        toast.success('User Login Successfully!')
                        navigate('/')
                    })
            })
    };

    return (
        <div>
            <button onClick={handleGoogleSignIn} className="button flex px-3 py-2">
                <FaGoogle className="text-xl mr-2" />
                SIGN IN WITH GOOGLE
            </button>

        </div>
    );
};

export default SocialLogin;