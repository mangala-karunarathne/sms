import React from "react";
import { useSelector } from "react-redux";
import AdminHome from "../components/admin/AdminHome";
import UserHome from "../components/user/UserHome";

export default function Home() {
  const currentUser = useSelector((state) => state.user.currentUser);

  if (!currentUser) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="max-w-4xl w-full bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Welcome to Student Management System
          </h2>
        </div>
      </div>
    );
  }

  const isAdmin = currentUser.userLoggedIn.isAdmin;
  return (
    <div>
      {isAdmin ? (
        <>
          <AdminHome />
        </>
      ) : (
        <UserHome />
      )}
    </div>
  );
}
