import React from "react";
import { useIdToken } from "react-firebase-hooks/auth";
import { Outlet, useLocation, Navigate } from "react-router-dom";
import { authentification } from "../../firebase/config";
import WithHeader from "../hoc/WithHeader";

export default function AuthLayout() {
  const location = useLocation();
  const [user] = useIdToken(authentification);
  console.log(user);

  return user ? (
    <WithHeader>
      <Outlet />
    </WithHeader>
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
}
