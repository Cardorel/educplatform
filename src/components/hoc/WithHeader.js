import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../header/header";
import Menu from "../student/menu/Menu";

export default function WithHeader() {
  return (
    <>
      <Header />
      <Menu />
      <Outlet />
      <Footer />
    </>
  );
}
