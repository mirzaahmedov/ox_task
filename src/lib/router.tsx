import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const Protected = lazy(() => import("@/layout/Protected"));
const Main = lazy(() => import("@/layout/Main"));

const Login = lazy(() => import("@/pages/Login"));
const Products = lazy(() => import("@/pages/Products"));

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Protected />,
      children: [
        {
          path: "/",
          element: <Main />,
          children: [
            {
              path: "/",
              element: <Products />,
            }
          ]
        }
      ]
    },
    {
      path: "/login",
      element: <Login />
    }
  ]
)

export default router
