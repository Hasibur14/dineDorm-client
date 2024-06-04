import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import Meals from "../pages/AllMeals/Meals";
import SignIn from "../pages/Authentication/SignIn/SignIn";
import SignUp from "../pages/Authentication/SignUp/SignUp";
import Contact from "../pages/Contact/Contact";
import MyProfile from "../pages/Dashboard/User/MyProfile/MyProfile";
import RequestedMeals from "../pages/Dashboard/User/RequestedMeals/RequestedMeals";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home/Home";
import JoinUs from "../pages/JoinUs/JoinUs";
import MealDetails from "../pages/MealDetails/MealDetails";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
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
                path: '/meal/:id',
                element: <MealDetails></MealDetails>
            },
            {
                path: '/SignIn',
                element: <SignIn></SignIn>
            },
            {
                path: '/SignUp',
                element: <SignUp></SignUp>
            },
        ],
    },
    {
        path: '/dashboard',
        element: <DashboardLayout />,
        children: [
            {
                path: 'profile',
                element: <MyProfile></MyProfile>
            },
            {
                path: 'requested-meals',
                element: <RequestedMeals></RequestedMeals>
            },
        ]
    }
])


