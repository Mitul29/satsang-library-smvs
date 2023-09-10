import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";

import { selectIsAuthenticated } from "../../../redux/slice/authSlice";

const RequiresAuth = () => {
  const location = useLocation();

  const isAuthenticated = useSelector(selectIsAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to="login" state={location.state} replace />;
  }

  return <Outlet />;
};

export default RequiresAuth;
