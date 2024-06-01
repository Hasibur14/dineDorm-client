import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Meals from "../pages/AllMeals/Meals";
import SignIn from "../pages/Authentication/SignIn/SignIn";
import SignUp from "../pages/Authentication/SignUp/SignUp";
import Contact from "../pages/Contact/Contact";
import Home from "../pages/Home/Home/Home";
import JoinUs from "../pages/JoinUs/JoinUs";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/meals',
                element: <Meals></Meals>
            },
            {
                path: '/joinUs',
                element: <JoinUs></JoinUs>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/SignIn',
                element: <SignIn></SignIn>
            },
            {
                path: '/SignUp',
                element: <SignUp></SignUp>
            },
        ]

    }
])


