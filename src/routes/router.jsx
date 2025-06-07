import { createBrowserRouter } from "react-router-dom";
import Home from "./../pages/Home";
import AboutUs from "../pages/AboutUs";
import Culinaries from "../pages/Culinaries";
import ContactUs from "../pages/ContactUs";
import Categories from "../pages/Categories";
import Restaurant from "../pages/Restaurant";

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
    {
        path : "/categories/:slug",
        element : <Categories/>
    },
    {
        path : "/restaurant/:slug",
        element : <Restaurant/>
    }
])

export default router;