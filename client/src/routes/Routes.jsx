import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home/Home";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import BookService from "../pages/BookService/BookService";
import Bookings from "../pages/Bookings/Bookings";
import PrivateRoutes from "./PrivateRoutes";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: "/book/:id",
                element: <PrivateRoutes><BookService></BookService></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://server-ivory-kappa.vercel.app/services/${params.id}`)
            },
            {
                path: "/bookings",
                element: <PrivateRoutes><Bookings></Bookings></PrivateRoutes>,
                // loader: () => fetch(`https://server-ivory-kappa.vercel.app/bookings/`)
            }
        ]
    },
]);

export default router;