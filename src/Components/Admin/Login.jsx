import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const ADMIN_PASSWORD = "Mahi123"; // 🔐 Set your password here

    if (password === ADMIN_PASSWORD) {
      localStorage.setItem("isAdmin", "true");
      navigate("/admin");
    } else {
      setError("Incorrect password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4 text-center">Admin Login</h2>
        {error && <p className="text-red-500 text-sm mb-2 text-center">{error}</p>}

        <input
          type="password"
          placeholder="Enter Admin Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 border rounded mb-4 focus:outline-none"
        />
        <button
          type="submit"
          className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
