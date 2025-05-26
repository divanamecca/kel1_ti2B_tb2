import { createBrowserRouter } from "react-router-dom";
import Home from "./../pages/Home";
import AboutUs from "../pages/AboutUs";
import Culinaries from "../pages/Culinaries";
import ContactUs from "../pages/ContactUs";

const router = createBrowserRouter([
    {
        path : "/",
        element : <Home/>
    },
    {
        path : "/about-us",
        element : <AboutUs/>
    },
    {
        path : "/culinaries",
        element : <Culinaries/>
    },
    {
        path : "/contact-us",
        element : <ContactUs/>
    },
])

export default router;