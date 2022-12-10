import React from "react";
import { useIdToken } from "react-firebase-hooks/auth";
import { Outlet, useLocation, Navigate } from "react-router-dom";
import { authentification } from "../../firebase/config";

export default function NoAuthLayout() {
  const location = useLocation();
  const [user] = useIdToken(authentification);

  return user === null ? (
    <Outlet />
  ) : (
    <Navigate to="/student" state={{ from: location }} replace />
  );
}
