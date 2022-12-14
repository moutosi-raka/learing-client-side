import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer";
import Header from "../pages/Shared/Header";
import LeftSideNav from "../pages/Shared/LeftSideNav";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <div className="grid lg:grid-cols-4 grid-cols-1 gap-4 pl-8">
        <div className="left-nav-border">
          <LeftSideNav></LeftSideNav>
        </div>
        <div className="col-span-3 px-8">
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
