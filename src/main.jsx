import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Register from "./components/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserProvider } from "./context/userContext";
import Layout from "./components/Layout";
import AllProducts from "./components/AllProducts";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        index: "/",
        element: <Layout />,
        children: [
          {
            path: "/home",
            element: <Home/>
          },
          {
            path: "/products",
            element: <AllProducts />,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <UserProvider>
    <RouterProvider router={router} />
  </UserProvider>,
);
