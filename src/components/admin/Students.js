import React, { useEffect, useState } from "react";
import AdminNavbar from "./AdminNavbar";
import StudentTable from "./StudentTable";
import { useSelector } from "react-redux";

export default function Students() {
  const [students, setStudents] = useState([]);

  const { currentUser } = useSelector((state) => state.user);
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/api/users`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: currentUser.access_token,
            },
          }
        );
        const data = await response.json();
        console.log("C:", data);
        setStudents(data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);
  return (
    <div className="flex h-screen">
      <AdminNavbar />
      <div className="flex-1 p-4">
        <div>
          <h1>Students</h1>
          <div>
            <StudentTable data={students} />
          </div>
        </div>
      </div>
    </div>
  );
}
