/* eslint-disable no-unused-vars */
import "./index.css";
import React from "react";
import Layout from "./layout/Layout";
import Home from "./components/Home";
import Login from "./components/Login";
import ReactDOM from "react-dom/client";
import Register from "./components/Register";
import AuthProvider from "./provider/AuthProvider";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Orders from "./components/Orders";
import PrivetRoute from "./routes/PrivetRoute";
import Profile from "./components/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      {
        path: "/orders",
        element: (
          <PrivetRoute>
            <Orders />
          </PrivetRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivetRoute>
            <Profile></Profile>
          </PrivetRoute>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </>
);
