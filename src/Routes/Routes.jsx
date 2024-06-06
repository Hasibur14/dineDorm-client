import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import Meals from "../pages/AllMeals/Meals";
import SignIn from "../pages/Authentication/SignIn/SignIn";
import SignUp from "../pages/Authentication/SignUp/SignUp";
import Contact from "../pages/Contact/Contact";
import AddMeals from "../pages/Dashboard/Admin/AddMeals/AddMeals";
import AllMeals from "../pages/Dashboard/Admin/AllMeals/AllMeals";
import AllReviews from "../pages/Dashboard/Admin/AllReviews/AllReviews";
import ManageUser from "../pages/Dashboard/Admin/ManageUser/ManageUser";
import ServeMeals from "../pages/Dashboard/Admin/ServeMeals/ServeMeals";
import UpcomingMeals from "../pages/Dashboard/Admin/UpcomingMeals/UpcomingMeals";
import UpdateMeal from "../pages/Dashboard/Admin/UpdateMeal/UpdateMeal";
import MyProfile from "../pages/Dashboard/User/MyProfile/MyProfile";
import MyReviews from "../pages/Dashboard/User/MyReviews/MyReviews";
import PaymentHistory from "../pages/Dashboard/User/PaymentHistory/PaymentHistory";
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
                path: '/signIn',
                element: <SignIn></SignIn>
            },
            {
                path: '/signUp',
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
                element: <MyProfile />
            },

            // User Routes
            {
                path: 'requested-meals',
                element: <RequestedMeals />
            },
            {
                path: 'my-reviews',
                element: <MyReviews />
            },
            {
                path: 'payment-history',
                element: <PaymentHistory />
            },

            // Admin Routes
            {
                path: 'manage-user',
                element: <ManageUser />
            },
            {
                path: 'add-meals',
                element: <AddMeals />
            },
            {
                path: 'all-meals',
                element: <AllMeals />
            },
            {
                path: 'all-review',
                element: <AllReviews />
            },
            {
                path: 'serve-meals',
                element: <ServeMeals />
            },
            {
                path: 'upcoming-meals',
                element: <UpcomingMeals />
            },
            {
                path: 'meal/:id',
                element: <UpdateMeal></UpdateMeal>,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/meal/${params.id}`)
            }
        ]
    }
])


