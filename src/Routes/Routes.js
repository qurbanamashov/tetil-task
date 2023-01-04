import { createBrowserRouter } from "react-router-dom";
import About from "../CleanBlog/About/About";
import Home from "../CleanBlog/Home/Home";
import Linkone from "../CleanBlog/Home/SectionLink/SectionLinkForm/Linkone/Linkone";
import Linkthree from "../CleanBlog/Home/SectionLink/SectionLinkForm/Linkthree/Linkthree";
import Linktwo from "../CleanBlog/Home/SectionLink/SectionLinkForm/Linktwo/Linktwo";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/about",
        element: <About />,
    },
    {
        path: "/linkone",
        element: <Linkone />,
    },
    {
        path: "/linktwo",
        element: <Linktwo />,
    },
    {
        path: "/linkthree",
        element: <Linkthree/>,
    },

]);
export default router