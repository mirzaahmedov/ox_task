import { RouterProvider } from "react-router-dom"

import AuthProvider from "./context/auth"
import router from "./lib/router"

import "./App.css"

const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}

export default App
