import Dashboard from './pages/dashboard/page';
import Products from './pages/products/page';
import Charts from './pages/charts/page';
import ErrorPage from './pages/error/page';
import Login from './pages/login/page';
import Regiser from './pages/register/page';
import {
  createBrowserRouter,
} from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Regiser />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard/products",
        element: <Products />,
      },
      {
        path: "/dashboard/charts",
        element: <Charts />,
      },
    ],
  }
]);