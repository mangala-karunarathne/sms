import React from "react";
import AdminNavbar from "./AdminNavbar";

export default function Students() {
  return (
    <div className="flex h-screen">
      <AdminNavbar />
      <div className="flex-1 p-4">
        <div>
          <h1>Students</h1>
        </div>
      </div>
    </div>
  );
}
