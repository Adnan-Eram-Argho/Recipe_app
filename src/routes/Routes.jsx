import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import DashboardLayout from "../layouts/DashboardLayout";
import PrivateRoutes from "./PrivateRoutes";
import DashboardHome from "../Pages/Dashboard/DashboardHome";
import ManageAllRecipe from "../Pages/Dashboard/ManageAllRecipe";
import AddRecipies from "../Pages/Dashboard/AddRecipies";
import EditRecipe from "../Pages/Dashboard/EditRecipe";
export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children:[
        {
            index:true,
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
      children:[
      {
        index:true,
        element:<DashboardHome/>
      },
      {
        path:'/dashboard/manage-recipies',
        element:<ManageAllRecipe/>
      },
      {
        path:'/dashboard/add-recipies',
        element:<AddRecipies/>
      },
      {
        path:'edit-recipies/:id',
        element:<EditRecipe />
      },
    ]
    }
   
  ]);

  export default router