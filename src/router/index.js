import Home from "../pages/Home";
import {Navigate} from "react-router-dom";
import Weather from "../pages/Weather";


export const routes = [
    {path: '/', element: <Home/>},
    {path: '/home', element: <Navigate to='/'/>},
    {path: '/weather', element: <Navigate to='/'/>},
    {path: '/weather/:city', element: <Weather/>},
    {path: '/hourly', element: <Weather/>},
    {path: '*', element: <Navigate to='/'/>}
]