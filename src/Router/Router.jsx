import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home/Home";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Authentication/Login/Login";
import Register from "../Pages/Authentication/Register/Register";
import Coverage from "../Pages/Coverage/Coverage";
import PrivateRoute from "../Routes/PrivateRoute";
import SendParcel from "../Pages/SendParcel/SendParcel";
import DashedBoardLayout from "../Layouts/DashedBoardLayout";
import MyParcels from "../Pages/Dashboard/MyParcels/MyParcels";
import Payment from "../Pages/Dashboard/Payment/Payment";

export const router = createBrowserRouter([
    {
        path:"/",
        Component:RootLayout,
        children:[
          {
            index:true,
            Component:Home
          },
          {
            path:'coverage',
            Component:Coverage,
            loader: () => fetch('./warehouses.json')
          },
          {
            path: 'sendParcel',
            element:<PrivateRoute><SendParcel></SendParcel></PrivateRoute>,
            loader: () => fetch('./warehouses.json')
          }
        ]
    },
    {
      path:'/',
      Component:AuthLayout,
      children:[
        {
          path:'login',
          Component:Login
        },
        {
          path:'register',
          Component:Register
        }
      ]
    },
    {
      path:'/dashboard',
      element:<PrivateRoute><DashedBoardLayout></DashedBoardLayout></PrivateRoute>,
      children:[
        {
          path:'myParcels',
          Component:MyParcels
        },
        {
          path:'payment/:parcelId',
          Component:Payment
        }
      ]
    }
]);