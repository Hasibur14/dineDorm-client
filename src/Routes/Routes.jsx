import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Meals from "../pages/AllMeals/Meals";
import Home from "../pages/Home/Home/Home";


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
            }
        ]

    }
])


