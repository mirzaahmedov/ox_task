import { createBrowserRouter } from "react-router-dom";

import Protected from "../layout/Protected";
import Main from "../layout/Main";

import Login from "../pages/Login";
import Products from "../pages/Products";

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
