import { Helmet } from "react-helmet-async";
import SignIn from "../Authentication/SignIn/SignIn";


const JoinUs = () => {
    return (
        <div>
            <Helmet>
                <title>JoinUs || DineDorm</title>
            </Helmet>
            <SignIn></SignIn>
        </div>
    );
};

export default JoinUs;