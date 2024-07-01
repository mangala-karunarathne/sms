import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";
import Students from "./Students";
import Courses from "./Courses";

export default function AdminHome() {
  return (
    <div className="flex h-screen">
      <AdminNavbar />
      <div className="flex-1 p-4">
        <Routes>
          <Route path="/admin/students" element={<Students />} />
          <Route path="/admin/courses" element={<Courses />} />
          <Route path="*" element={<h1>Welcome to the Admin Dashboard</h1>} />
        </Routes>
      </div>
    </div>
  );
}
