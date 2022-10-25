import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer";
import Header from "../pages/Shared/Header";
import LeftSideNav from "../pages/Shared/LeftSideNav";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 bg-slate-800 text-white px-8">
        <div>
          <LeftSideNav></LeftSideNav>
        </div>
        <div className="col-span-2">
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
