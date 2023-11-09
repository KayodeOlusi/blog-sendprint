import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";

type Props = {};

const AppLayout = (props: Props) => {
  return (
    <div>
      <Navbar />
      <div className="max-w-screen-lg mx-auto mt-3">
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
