import React from 'react';

export default function CoursesTable({ data }) {
  const handleEdit = (item) => {
    // Handle edit action for the item
    console.log('Editing:', item);
  };

  const handleDelete = (item) => {
    // Handle delete action for the item
    console.log('Deleting:', item);
  };

  return (
    <table className="table-fixed">
      <thead>
        <tr>
          <th className="w-1/2 px-4 py-2">Course Name</th>
          <th className="w-1/4 px-4 py-2">Code</th>
          <th className="w-1/4 px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td className="border px-4 py-2">{item.name}</td>
            <td className="border px-4 py-2">{item.code}</td>
            <td className="border px-4 py-2">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                onClick={() => handleEdit(item)}
              >
                Edit
              </button>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => handleDelete(item)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}