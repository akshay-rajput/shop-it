import React from "react";
import Home from "./screens/Home.jsx";
import Cart from "./screens/Cart.jsx";
import Saved from "./screens/Saved.jsx";

import {useRoutes} from 'react-router-dom';

const ROUTES = () => [
    {
        path: "/saved",
        key: "Saved",
        end: true,
        element: <Saved/>
    },
    {
        path: "/cart",
        key: "Cart",
        end: true,
        element: <Cart/>
    },
    
    {
        path: "/",
        key: "Home",
        end: true,
        element: <Home/>
    }
];

export function RenderRoutes() {
    // useRoutes to render routes object - alternative to Routes & Route of react-router-dom
    let selectedRoute = useRoutes(ROUTES());
    // console.log('select: ', selectedRoute);
    return selectedRoute;
}


export default ROUTES;