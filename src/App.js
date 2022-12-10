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
import Detail from "./components/detail/Index";
import Contact from "./components/contact/Contact";
import WithHeader from "./components/hoc/WithHeader";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { authentification } from "./firebase/config";
import { useIdToken } from "react-firebase-hooks/auth";
import Loading from "./components/loading/Loading";
import { getCurrentUser } from "./toolkit/reducers/getCurrentUserSlice";
import NoAuthLayout from "./components/auth/NoAuthLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<AuthLayout />}>
        <Route path="/student" element={<StudentPage />}>
          <Route element={<Detail />} path=":id" />
        </Route>
        <Route path="/contact" element={<Contact />} />
      </Route>
      <Route element={<NoAuthLayout />}>
        <Route element={<WithHeader />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="signin" element={<SignIn />} />
        <Route path="register" element={<Registration />} />
        <Route path="reset-password" element={<ResetPassword />} />
      </Route>
    </Route>
  )
);

const App = () => {
  const dispatch = useDispatch();
  const [user, loading] = useIdToken(authentification);
  useEffect(() => {
    dispatch(getCurrentUser(user));
  }, [dispatch, user]);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <div className="small-screen">
        <p>
          Please, we are not allow user to use small screen less than 1920 and
          we are working on it!
        </p>
      </div>
      <div className="app-container">
        <RouterProvider router={router} />
      </div>
    </>
  );
};

export default App;
