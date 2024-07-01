import React from "react";
import { useSelector } from "react-redux";
import AdminHome from "../components/admin/AdminHome";
import UserHome from "../components/user/UserHome";

export default function Home() {
  const user = useSelector((state) => state.user.currentUser.userLoggedIn);
  const isAdmin = user?.isAdmin;
  return (
    <div>
      {isAdmin ? (
        <>
        <AdminHome/>
        </>
      ) : (
        <UserHome/>
      )}
    </div>
  );
}
