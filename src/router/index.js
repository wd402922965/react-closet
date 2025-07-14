import {createBrowserRouter} from "react-router-dom";
import Layout from "@/pages/Layout";
import Login from "@/pages/Login";
import {AuthRoute} from "@/components/AuthRoute";
import Closet from "@/pages/Layout/Closet/closet";

import Deposit from "@/pages/Layout/Deposit";
import New from "@/pages/Layout/New";
import Me from "src/pages/Layout/Me";

const router = createBrowserRouter([
    {
        path: '/',
        element: <AuthRoute><Layout/></AuthRoute>,
        children: [
            {
                path: 'closet',
                element: <Closet/>
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
                path: 'new',
                element: <New/>
            }
        ]
    },
    {
        path: '/login',
        element: <Login/>
    }
]);

export default router;