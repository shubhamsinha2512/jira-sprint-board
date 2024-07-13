import React from "react";
import Search from "./Search";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="z-10 flex items-center justify-between bg-white p-2 shadow-md">
      <div className="flex max-w-screen-xl flex-wrap items-center justify-between px-2 py-4">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
            Jira Board
          </span>
        </Link>
      </div>
      <Search />
    </nav>
  );
}

export default Navigation;
