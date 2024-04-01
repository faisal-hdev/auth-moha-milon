/* eslint-disable no-unused-vars */
import "./index.css";
import React from "react";
import Layout from "./layout/Layout";
import Home from "./components/Home";
import Login from "./components/Login";
import ReactDOM from "react-dom/client";
import Register from "./components/Register";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router}></RouterProvider>
  </>
);
