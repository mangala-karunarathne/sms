import React from "react";
import AdminNavbar from "./AdminNavbar";
import Table from "./Table";

export default function Courses() {
  const courses = [
    { name: 'Intro to JavaScript', regNumber: 'Course001' },
    { name: 'Advanced React', regNumber: 'Course002' },
  ];
  return (
    <div className="flex h-screen">
      <AdminNavbar />
      <div className="flex-1 p-4">
        <div>
          <h1>Courses</h1>
          <div>
            <Table data={courses}/>
          </div>
        </div>
      </div>
    </div>
  );
}
