import React from "react";
import { useSelector } from "react-redux";
import { Outlet, useLocation, Navigate } from "react-router-dom";

export default function NoAuthLayout() {
  const location = useLocation();
  const user = useSelector((state) => state?.user);

  return user === null ? (
    <Outlet />
  ) : (
    <Navigate to="/student" state={{ from: location }} replace />
  );
}
