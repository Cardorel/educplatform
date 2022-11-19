import React from "react";
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
        <Route path="sigin" element={<SignIn />} />
        <Route path="register" element={<Registration />} />
        <Route path="reset-password" element={<ResetPassword />} />
      </Route>
    </Route>
  )
);

const App = () => <RouterProvider router={router} />;

export default App;
