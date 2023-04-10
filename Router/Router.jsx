import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../src/Pages/Home/Home";
import About from "../src/Pages/About/About";
import Products from "../src/Pages/Products/Products";
import Contract from "../src/Pages/Contract/Contract";
import Booking from "../src/Pages/Booking/Booking";

const router = createBrowserRouter([
        {
            path:"/",
            element:<Main></Main>,
            children:[
                {
                   path:"/",
                   element:<Home></Home> 
                },
                {
                    path:"/about",
                    element:<About></About>
                },
                {
                    path:"/products",
                    element:<Products></Products>
                },
                {
                    path:"/contract",
                    element:<Contract></Contract>
                    
                },
                {
                    path:"/booking",
                    element:<Booking></Booking>
                }
            ]
        }
]);

export default router;