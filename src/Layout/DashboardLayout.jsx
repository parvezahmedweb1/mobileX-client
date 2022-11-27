import React from "react";
import { Outlet } from "react-router-dom";
import DashboardHeader from "../Pages/Dashboard/DashboardHeader/DashboardHeader";

const DashboardLayout = () => {
  return (
    <>
      <DashboardHeader />
      <Outlet />
    </>
  );
};

export default DashboardLayout;
