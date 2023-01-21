import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../header/header";
import Menu from "../menu/Menu";

export default function WithHeader({ isActive }) {
  return (
    <>
      <Header />
      {isActive && <Menu />}
      <Outlet />
      <Footer />
    </>
  );
}
