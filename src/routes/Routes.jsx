import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import DashboardLayout from "../layouts/DashboardLayout";
import PrivateRoutes from "./PrivateRoutes";
export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children:[
        {
            path:'/',
            element:<Home/>
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
          path:"login",
          element:<Login/>
        },
        {
          path:"register",
          element:<Register/>
        }
      ]
    },
    {
      path:'/dashboard',
      element:<PrivateRoutes>
        <DashboardLayout/>
      </PrivateRoutes>,
     
    }
   
  ]);

  export default router