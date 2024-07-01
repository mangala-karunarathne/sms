import React from "react";
import { NavLink } from "react-router-dom";

export default function AdminNavbar() {
  return (
    <div className="w-64 bg-black shadow-xl h-full">
    <div className="relative flex flex-col h-full p-4 text-gray-700">
      <nav className="flex flex-col gap-1 p-2 font-sans text-base font-normal text-blue-gray-700">
        <NavLink
          to="/admin/students"
          className={({ isActive }) =>
            `flex items-center p-3 transition-all rounded-lg hover:bg-slate-200 hover:text-black ${
              isActive ? "bg-slate-200 text-black" : ""
            }`
          }
        >
          <div className="grid mr-4 place-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M12 2a7 7 0 110 14 7 7 0 010-14zm0 1.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zm-.75 3a.75.75 0 011.5 0v2.25H15a.75.75 0 110 1.5h-3.75v3.75a.75.75 0 11-1.5 0V9H9a.75.75 0 010-1.5h2.25V6z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          Students
        </NavLink>
        <NavLink
          to="/admin/courses"
          className={({ isActive }) =>
            `flex items-center p-3 transition-all rounded-lg hover:bg-slate-200 hover:text-black ${
              isActive ? "bg-slate-200 text-black" : ""
            }`
          }
        >
          <div className="grid mr-4 place-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M8 2.75A1.75 1.75 0 009.75 1h4.5A1.75 1.75 0 0116 2.75v.5h1.75A2.75 2.75 0 0120.5 6v12a2.75 2.75 0 01-2.75 2.75H6.25A2.75 2.75 0 013.5 18V6A2.75 2.75 0 016.25 3.25H8v-.5zm1.75.25h4.5a.25.25 0 01.25.25v.5h-5v-.5a.25.25 0 01.25-.25zm.75 5a.75.75 0 01.75.75v5.5a.75.75 0 01-1.5 0v-5.5a.75.75 0 01.75-.75z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          Courses
        </NavLink>
      </nav>
    </div>
  </div>
  
  );
}
