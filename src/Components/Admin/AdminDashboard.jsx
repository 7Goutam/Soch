// src/Components/Admin/AdminDashboard.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-4 rounded shadow max-w-3xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
        <p>Welcome, Admin! 🎉</p>
        <button
          onClick={handleLogout}
          className="mt-4 px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default AdminDashboard;
