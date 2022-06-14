import React from "react";
import Aside from "./components/Aside";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

export default function dashboard() {
  return (
    <div>
      <Header />
      <Aside />
      <div
        className="content-wrapper"
        style={{
          paddingLeft: "10rem",
          paddingRight: "10rem",
          height: "70rem",
        }}
      >
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
