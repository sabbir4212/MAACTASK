import React from "react";
import DashboardHeader from "../DashboardHeader/DashboardHeader";
import "./Dashboard.css";
import { GrLocation } from "react-icons/gr";
import DashboardFooter from "../DashboardFooter/DashboardFooter";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <DashboardHeader></DashboardHeader>
      <div className="flex mt-5">
        <div className="w-[15%]">
          <p className="text-sm ml-3">MENU</p>
          <p className="flex items-center text-sm ml-3 mt-5">
            <GrLocation className="text-lg font-light"></GrLocation>
            <span className="ml-3">Geo Information</span>
          </p>
          <div className=" grid ml-7">
            <NavLink to="/dashboard"
              className="text-sm mt-5"
            >
              Region
            </NavLink>
            <NavLink to={"/dashboard/regioncreate"} className="text-sm mt-5">Area</NavLink>
          </div>
        </div>
        <div className="w-[85%] bg-slate-100">
          <div className="">
            <Outlet></Outlet>
          </div>
          <div>
            <DashboardFooter></DashboardFooter>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
