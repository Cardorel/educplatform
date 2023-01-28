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
import CompleteInfo from "./components/registration/CompleteInfo";
import SuccessRegister from "./components/registration/SuccessRegister";
import StartInterface from "./components/registration/StartInterface";
import Interface from "./components/registration/Interface";
import LogOut from "./components/logout/LogOut";
import Profil from "./components/Profil/Profil";
import Account from "./components/account/Account";
import ErrorPage from "./components/error/ErrorPage";
import Wallet from "./components/wallet/Wallet";
import MyCourse from "./components/myCourse/MyCourse";
import File from "./components/file/File";
import Video from "./components/video/Video";
import Certificat from "./components/certificat/Certificat";
import Bookmark from "./components/bookmark/Bookmark";
import DetailCourse from "./components/detailCourse/DetailCourse";
import NewCourse from "./components/newCourse/NewCourse";
import EditCourse from "./components/editCourse/EditCourse";
import Tutor from "./components/tutor/Tutor";

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
          <Route path="/start-message" element={<StartInterface />} />
          <Route path="/interface" element={<Interface />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/account" element={<Account />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/my-course" element={<MyCourse />} />
          <Route path="/file" element={<File />} />
          <Route path="/video" element={<Video />} />
          <Route path="/certificat" element={<Certificat />} />
          <Route path="/bookmark" element={<Bookmark />} />
          <Route path="/new-course" element={<NewCourse />} />
          <Route path="/tutor" element={<Tutor />} />
          <Route path="/edit-course/:id" element={<EditCourse />} />
          <Route
            path="/course/detail-course/:course"
            element={<DetailCourse />}
          />
        </Route>
        <Route path="/payment" element={<Payment />} />
        <Route path="/complete-info" element={<CompleteInfo />} />
        <Route path="/success-message" element={<SuccessRegister />} />
        <Route path="/log-out" element={<LogOut />} />
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
        <Route path="*" element={<ErrorPage />} />
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
          Please, we are not allow user to use small screen less than 1920px and
          we are working on it! please use Control + Shift + C to open Inspector
        </p>
      </div>
      <div className="app-container">
        <div className="app-content">
          <RouterProvider router={router} />
        </div>
      </div>
    </>
  );
};

export default App;
