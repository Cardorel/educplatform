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
import Payment from "./components/payment/Payment";
import Politic from "./components/politic/Politic";
import Help from "./components/help/Help";
import Contract from "./components/contract/Contract";
import Community from "./components/community/Community";
import AboutUs from "./components/aboutUs/AboutUs";
import Cookie from "./components/cookies/Cookie";
import Courses from "./components/courses/Courses";
import Categories from "./components/Categories/Categories";
import SubCategory from "./components/subCategory/SubCategory";
import Qualification from "./components/qualification/Qualification";
import JoinUs from "./components/joinUs/joinUs";
import ChooseStatus from "./components/joinUs/ChooseStatus";
import RegisterContainer from "./components/registration/RegisterContainer";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<AuthLayout />}>
        <Route element={<WithHeader isActive={true} />}>
          <Route path="/student" element={<StudentPage />} />
          <Route element={<Detail />} path="/student/:id" />
          <Route
            path="/all-courses/categories/:category"
            element={<SubCategory />}
          />
          <Route
            path="/all-courses/qualification/:category"
            element={<Qualification />}
          />
          <Route path="/all-courses" element={<Courses />} />
          <Route path="/all-courses/categories" element={<Categories />} />
        </Route>
        <Route path="/payment" element={<Payment />} />
      </Route>
      <Route element={<NoAuthLayout />}>
        <Route element={<WithHeader isActive={false} />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/register-choose" element={<RegisterContainer />} />
      </Route>

      <Route element={<WithHeader isActive={false} />}>
        <Route path="/privacy-policy" element={<Politic />} />
        <Route path="/help" element={<Help />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contract" element={<Contract />} />
        <Route path="/community" element={<Community />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/cookie" element={<Cookie />} />
        <Route path="/join-us" element={<JoinUs />} />
        <Route path="/status" element={<ChooseStatus />} />
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
