import { Outlet, Navigate } from "react-router-dom";

import { useAuth } from "../context/auth";

const Protected = () => {
  const { auth } = useAuth();

  if (!auth) {
    return <Navigate to="/login" />
  }

  return (
    <Outlet />
  );
};

export default Protected;
