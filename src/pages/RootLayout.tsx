import React from "react";
import { Outlet } from "react-router";
import Navigation from "../components/Navigation";
import Menu from "../components/Menu";

function RootLayout() {
  return (
    <div className="h-lvh">
      <Navigation />
      <div className="grid h-screen grid-cols-5">
        <div className="col-span-1">
          <Menu />
        </div>
        <main className="col-span-4 m-4 h-screen text-stone-600">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default RootLayout;
