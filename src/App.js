import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Login from './components/Login';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import ProductDetails from "./components/ProductDetails";


 const App=()=>{
    return (
        <>
        <Header />
         <Outlet/>
         <Footer />
        </>
    )
}

const router =createBrowserRouter([
    {
        path:'/',
        element:<App />,
        children:[
            {
                path:'/',
                element:<Home />
            },
            {
                path:'about',
                element:<About/>
            },
            {
                path:'contact',
                element:<Contact/>
            },
            {
               path:'/productDetails/:prodId',
               element:<ProductDetails />

            }
        ]

    },
    
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />)