import React from "react";
import AdminNavbar from "./AdminNavbar";
import Table from "./Table";

export default function Students() {
  const students = [
    { name: "John Doe", regNumber: "Student001" },
    { name: "Jane Smith", regNumber: "Student002" },
  ];
  return (
    <div className="flex h-screen">
      <AdminNavbar />
      <div className="flex-1 p-4">
        <div>
          <h1>Students</h1>
          <div>
            <Table data={students} />
          </div>
        </div>
      </div>
    </div>
  );
}
