import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import About from "../pages/About/About";
import Meals from "../pages/AllMeals/Meals";
import SignIn from "../pages/Authentication/SignIn/SignIn";
import SignUp from "../pages/Authentication/SignUp/SignUp";
import Contact from "../pages/Contact/Contact";
import AddMeals from "../pages/Dashboard/Admin/AddMeals/AddMeals";
import AdminProfile from "../pages/Dashboard/Admin/AdminProfile/AdminProfile";
import AllMeals from "../pages/Dashboard/Admin/AllMeals/AllMeals";
import AllReviews from "../pages/Dashboard/Admin/AllReviews/AllReviews";
import ManageUser from "../pages/Dashboard/Admin/ManageUser/ManageUser";
import ServeMeals from "../pages/Dashboard/Admin/ServeMeals/ServeMeals";
import UpcomingMeals from "../pages/Dashboard/Admin/UpcomingMeals/UpcomingMeals";
import UpdateMeal from "../pages/Dashboard/Admin/UpdateMeal/UpdateMeal";
import MyProfile from "../pages/Dashboard/User/MyProfile/MyProfile";
import MyReviews from "../pages/Dashboard/User/MyReviews/MyReviews";
import ReviewEdit from "../pages/Dashboard/User/MyReviews/ReviewEdit";
import PaymentHistory from "../pages/Dashboard/User/PaymentHistory/PaymentHistory";
import RequestedMeals from "../pages/Dashboard/User/RequestedMeals/RequestedMeals";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Checkout from "../pages/Home/Checkout/Checkout";
import Home from "../pages/Home/Home/Home";
import JoinUs from "../pages/JoinUs/JoinUs";
import MealDetails from "../pages/MealDetails/MealDetails";
import UpcomingMeal from "../pages/UpcomingMeal/UpcomingMeal";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivetRoute";




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
                path: '/upcoming-meal',
                element: <UpcomingMeal></UpcomingMeal>
            },
            {
                path: '/about',
                element: <About></About>
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
                element: <PrivateRoute><MealDetails></MealDetails></PrivateRoute>
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>
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
        element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
        children: [

            // Admin Routes
            {
                path: 'admin-profile',
                element: <AdminRoute> <AdminProfile /></AdminRoute>
            },
            {
                path: 'manage-user',
                element: <AdminRoute><ManageUser /></AdminRoute>
            },
            {
                path: 'add-meals',
                element: <AdminRoute><AddMeals /></AdminRoute>
            },
            {
                path: 'all-meals',
                element: <AdminRoute> <AllMeals /></AdminRoute>
            },
            {
                path: 'all-review',
                element: <AdminRoute><AllReviews /></AdminRoute>
            },
            {
                path: 'serve-meals',
                element: <AdminRoute><ServeMeals /></AdminRoute>
            },
            {
                path: 'upcoming-meals',
                element: <AdminRoute> <UpcomingMeals /></AdminRoute>
            },
            {
                path: 'meal/:id',
                element: <AdminRoute><UpdateMeal /></AdminRoute>,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/meal/${params.id}`)
            },

            // User Routes
            {
                path: 'profile',
                element: <PrivateRoute> <MyProfile /></PrivateRoute>
            },
            {
                path: 'requested-meals',
                element: <PrivateRoute> <RequestedMeals /></PrivateRoute>
            },
            {
                path: 'my-reviews',
                element: <PrivateRoute><MyReviews /></PrivateRoute>
            },
            {
                path: 'reviews/:id',
                element: <PrivateRoute><ReviewEdit /></PrivateRoute>,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/reviews/${params.id}`)
            },
            {
                path: 'payment-history',
                element: <PrivateRoute><PaymentHistory /></PrivateRoute>
            },
        ]
    }
])


