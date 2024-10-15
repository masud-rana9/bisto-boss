import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/home/Home";
import Menu from "../pages/menu/Menu";
import Order from "../pages/order/Order";
import Login from "../pages/login/Login";
import SignUp from "../pages/signUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Secret from "../pages/shared/Secret";
import Dashboard from "../layout/Dashboard";
import Cart from "../pages/dashboard/cart/Cart";
import Allusers from "../pages/allusers/Allusers";
import AddItems from "../pages/addItem/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItems from "../pages/manageItems/ManageItems";
import UpdateItem from "../pages/updateItem/UpdateItem";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/order/:category",
        element: <Order />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/secret",
        element: (
          <PrivateRoute>
            <Secret />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "cart",
        element: <Cart />,
      },

      //admin routes

      {
        path: "additems",
        element: (
          <AdminRoute>
            <AddItems />
          </AdminRoute>
        ),
      },

      {
        path: "updateitem/:id",
        element: (
          <AdminRoute>
            <UpdateItem />
          </AdminRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/menu/${params.id}`),
      },
      {
        path: "manageitems",
        element: (
          <AdminRoute>
            <ManageItems />
          </AdminRoute>
        ),
      },

      {
        path: "allusers",
        element: (
          <AdminRoute>
            <Allusers />
          </AdminRoute>
        ),
      },
    ],
  },
]);
