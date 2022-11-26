import React, { useEffect, useState } from "react";
import "swiper/css";
import Home from "./components/home/Home";
import Registration from "./components/registration/Registration";
import ResetPassword from "./components/resetPassword/ResetPassword";
import SignIn from "./components/signIn/SignIn";
import StudentPage from "./pages/Student";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import AuthLayout from "./components/auth/AuthLayout";
import WithHeader from "./components/hoc/WithHeader";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<WithHeader />}>
        <Route index element={<Home />} />
        <Route path="student" element={<StudentPage />} />
      </Route>
      <Route element={<AuthLayout />}>
        <Route path="signin" element={<SignIn />} />
        <Route path="register" element={<Registration />} />
        <Route path="reset-password" element={<ResetPassword />} />
      </Route>
    </Route>
  )
);

const App = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  useEffect(() => {
    if (window.matchMedia("(max-width: 1919px)")) {
      setIsSmallScreen(true);
    }
    setIsSmallScreen(false);
  }, []);

  if (isSmallScreen)
    return (
      <div className="small-screen">
        <p>
          Please, we are not allow user to use small screen less than 1920 and
          we are working on it!
        </p>
      </div>
    );

  return (
    <div className="app-container">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
