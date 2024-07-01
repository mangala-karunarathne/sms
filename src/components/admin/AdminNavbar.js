import React from "react";

export default function AdminNavbar() {
  return (
    <div>
      <div className="relative flex h-[calc(100vh-20rem)] w-full max-w-[20rem] flex-col rounded-xl bg-white bg-clip-border p-4 text-gray-700 shadow-xl shadow-blue-gray-900/5">
        <div className="p-4 mb-2"></div>
        <nav className="flex min-w-[240px] flex-col gap-1 p-2 font-sans text-base font-normal text-blue-gray-700">
          <div
            role="button"
            className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
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
                  fill-rule="evenodd"
                  d="M12 2a7 7 0 110 14 7 7 0 010-14zm0 1.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zm-.75 3a.75.75 0 011.5 0v2.25H15a.75.75 0 110 1.5h-3.75v3.75a.75.75 0 11-1.5 0V9H9a.75.75 0 010-1.5h2.25V6z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            Students
          </div>
          <div
            role="button"
            className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
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
                  fill-rule="evenodd"
                  d="M8 2.75A1.75 1.75 0 009.75 1h4.5A1.75 1.75 0 0116 2.75v.5h1.75A2.75 2.75 0 0120.5 6v12a2.75 2.75 0 01-2.75 2.75H6.25A2.75 2.75 0 013.5 18V6A2.75 2.75 0 016.25 3.25H8v-.5zm1.75.25h4.5a.25.25 0 01.25.25v.5h-5v-.5a.25.25 0 01.25-.25zm.75 5a.75.75 0 01.75.75v5.5a.75.75 0 01-1.5 0v-5.5A.75.75 0 0110.5 8zm3.25 0a.75.75 0 01.75.75v5.5a.75.75 0 01-1.5 0v-5.5a.75.75 0 01.75-.75z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            Courses
          </div>
        </nav>
      </div>
    </div>
  );
}
