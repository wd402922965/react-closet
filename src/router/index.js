import {createBrowserRouter, Navigate} from "react-router-dom";
import Layout from "@/pages/Layout";
import Login from "@/pages/Login";
import {AuthRoute} from "@/components/AuthRoute";
import Index from "@/pages/Layout/Closet";

import Deposit from "@/pages/Layout/Deposit";
import NewArrival from "src/pages/Layout/NewArrival";
import Me from "src/pages/Layout/Me";

const router = createBrowserRouter([
    {
        path: '/',
        element: <AuthRoute><Layout/></AuthRoute>,
        children: [
            {
                path: '',
                element: <Navigate to="newArrival" />
            },
            {
                path: 'closet',
                element: <Index/>
            },
            {
                path: 'Me',
                element: <Me/>
            },
            {
                path: 'deposit',
                element: <Deposit/>
            },
            {
                path: 'newArrival',
                element: <NewArrival/>
            }
        ]
    },
    {
        path: '/login',
        element: <Login/>
    }
]);

export default router;