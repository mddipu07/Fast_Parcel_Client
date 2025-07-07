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
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";
import TrackParcel from "../Pages/Dashboard/TrackParcel/TrackParcel";
import Rider from "../Pages/Dashboard/Rider/Rider";
import ForBidden from "../Pages/ForBidden/ForBidden";
import AdminRoute from "../Routes/AdminRoute";
import MakeAdmin from "../Pages/Dashboard/MakeAdmin/MakeAdmin";
import ActiveRiders from "../Pages/Dashboard/ActiveRiders/ActiveRiders";

import AssignRider from "../Pages/Dashboard/AssignRider/AssignRider";
import PendingRiders from "../Pages/Dashboard/PendingRiders/PendingRiders";
import RiderRoute from "../Routes/RiderRoute";
import PendingDeliveries from "../Pages/Dashboard/PendingDeliveries/PendingDeliveries";
import CompletedDeliveries from "../Pages/Dashboard/CompletedDeliveries/CompletedDeliveries";
import MyEarnings from "../Pages/Dashboard/MyEarnings/MyEarnings";
import DashBoardHome from "../Pages/Dashboard/DashBoardHome/DashBoardHome";

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
            path:'forbidden',
            Component:ForBidden
          },
          {
            path:'rider',
            element:<PrivateRoute><Rider></Rider></PrivateRoute>,
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
          index:true,
          Component:DashBoardHome
        },
        {
          path:'myParcels',
          Component:MyParcels
        },
        {
          path:'payment/:parcelId',
          Component:Payment
        },
        {
          path:'paymentHistory',
          Component:PaymentHistory
        },
        {
          path:'track',
          Component:TrackParcel
        },
        // rider only routes
        {
            path:'pending-deliveries',
            element:<RiderRoute><PendingDeliveries></PendingDeliveries></RiderRoute>
        },
        {
            path:'my-earnings',
            element:<RiderRoute><MyEarnings></MyEarnings></RiderRoute>
        },
        {
            path:'completed-deliveries',
            element:<RiderRoute><CompletedDeliveries></CompletedDeliveries></RiderRoute>
        },
        // admin only routes
        {
          path:'assign-rider',
          element:<AdminRoute><AssignRider></AssignRider></AdminRoute>
        },
        {
          path:'pending',
          element:<AdminRoute><PendingRiders></PendingRiders></AdminRoute>
        },
        {
          path:'active',
          element:<AdminRoute><ActiveRiders></ActiveRiders></AdminRoute>
          
        },
        {
          path:'makeadmin',
          element:<AdminRoute><MakeAdmin></MakeAdmin></AdminRoute>
        }
      ]
    }
]);