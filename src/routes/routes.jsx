import { createBrowserRouter } from "react-router";
import HomeLayouts from "../layouts/HomeLayouts";
import Home from "../Pages/Home/Home";
import CategoryNews from "../Pages/CategoryNews";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AuthLayout from "../layouts/AuthLayout";
import NewsDetails from "../Pages/NewsDetails";
import PrivateRoute from "../Provider/PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayouts></HomeLayouts>,
        children: [
            {
                path: "",
                element: <Home></Home>
            },
            {
                path: "/category/:id",
                element: <CategoryNews></CategoryNews>,
                loader: () => fetch("/news.json"),
            },
        ]
    },
    {
        path: "/auth",
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: "/auth/login",
                element:<Login></Login>
            },
            {
                path: "/auth/register",
                element:<Register></Register>
            }
        ]
    },

    {
        path: "/news-details/:id",
        element: 
            <PrivateRoute>
            <NewsDetails></NewsDetails>
            </PrivateRoute>,
        loader: () => fetch("/news.json")
    },
    {
        path: '/*',
        element: <h2>Error 404</h2>
    }
]);


export default router;