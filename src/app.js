import React from "react"
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body"
import Home from "./components/Home";
import Footer from "./components/Footer";
import Error from "./components/Error";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import RestaurantDetails from "./components/RestaurantDetails";
import { createBrowserRouter, RouterProvider, useRouteError, Outlet  } from "react-router-dom";

const AppLayout = function(){
  return (
    <>
      <Header />
      <Outlet/>                     
      <Footer/>
    </>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/",
        element: <Body/>
      },
      {
        path: "restaurant/:id/",
        element: <RestaurantDetails/>
      },
    ],
  },

]);




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);