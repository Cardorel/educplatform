import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../header/header";

export default function WithHeader() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
