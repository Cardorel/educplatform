import React from "react";
import { Outlet, useLocation, Navigate } from "react-router-dom";

export default function AuthLayout() {
  const location = useLocation();
  const myUser = localStorage.getItem("persist:root");
  const { user } = JSON.parse(myUser);

  return JSON.parse(user) ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
}
