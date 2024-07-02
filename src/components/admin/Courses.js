import React, { useEffect, useState } from "react";
import AdminNavbar from "./AdminNavbar";
import Table from "./Table";

export default function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/courses`); 
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, []);

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
