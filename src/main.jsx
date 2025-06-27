import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./Layouts/MainLayout";
import Home from "./Pages/home/Home";
import AddRoommate from "./Pages/addroommate/AddRoommate";
import Error from "./Pages/Error";
import BrowseListing from "./Pages/browselisting/BrowseListing";
import AuthProvider from "./Utility/AuthProvider";
import { ToastContainer } from "react-toastify";
import Login from "./Pages/login/Login";
import Signup from "./Pages/login/Signup";
import MyListings from "./Pages/mylistings/MyListings";
import Details from "./Pages/browselisting/Details";
import Private from "./Pages/Private";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        hydrateFallbackElement: (
          <div className="flex items-center justify-center h-screen">
            <span className="loading loading-dots loading-xl"></span>
          </div>
        ),
        loader: () => fetch("https://livmate-server.vercel.app/availablePosts"),
        Component: Home,
      },
      {
        path: "/addroommate",
        element: (
          <Private>
            <AddRoommate></AddRoommate>
          </Private>
        ),
      },
      {
        path: "/browseListings",
        hydrateFallbackElement: (
          <div className="flex items-center justify-center h-screen">
            <span className="loading loading-dots loading-xl"></span>
          </div>
        ),
        loader: () => fetch("https://livmate-server.vercel.app/posts"),
        element: <BrowseListing></BrowseListing>,
      },
      {
        path: "/details/:id",
        hydrateFallbackElement: (
          <div className="flex items-center justify-center h-screen">
            <span className="loading loading-dots loading-xl"></span>
          </div>
        ),
        loader: ({ params }) =>
          fetch(`https://livmate-server.vercel.app/post/${params.id}`),
        element: (
          <Private>
            <Details></Details>
          </Private>
        ),
      },
      {
        path: "/mylistings/:email",
        hydrateFallbackElement: (
          <div className="flex items-center justify-center h-screen">
            <span className="loading loading-dots loading-xl"></span>
          </div>
        ),
        loader: ({ params }) =>
          fetch(`https://livmate-server.vercel.app/posts/${params.email}`),
        element: (
          <Private>
            <MyListings></MyListings>
          </Private>
        ),
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/signup",
        Component: Signup,
      },
    ],
  },
  {
    path: "*",
    Component: Error,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode
    fallback={
      <div className="flex items-center justify-center h-screen">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    }
  >
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer></ToastContainer>
    </AuthProvider>
  </StrictMode>
);
