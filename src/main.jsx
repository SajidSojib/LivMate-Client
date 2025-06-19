import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from './Layouts/MainLayout';
import Home from './Pages/home/Home';
import AddRoommate from './Pages/addroommate/AddRoommate';
import Error from './Pages/Error';
import BrowseListing from './Pages/browselisting/BrowseListing';

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/addroommate",
        Component: AddRoommate,
      },
      {
        path: "browseListings",
        Component: BrowseListing
      },
    ],
  },
  {
    path: "*",
    Component: Error,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
