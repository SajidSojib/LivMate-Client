import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from './Layouts/MainLayout';
import Home from './Pages/home/Home';
import AddRoommate from './Pages/addroommate/AddRoommate';
import Error from './Pages/Error';
import BrowseListing from './Pages/browselisting/BrowseListing';
import AuthProvider from './Utility/AuthProvider';
import { ToastContainer } from 'react-toastify';
import Login from './Pages/login/Login';


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
        loader: ()=>fetch('/stats.json'),
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
      {
        path:'/login',
        Component: Login
      }
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
