import React from "react";
import { useNavigate } from "react-router-dom";
import { FaDatabase, FaHistory, FaExclamationTriangle, FaSignOutAlt } from "react-icons/fa"; // Icons
import "./Sidebar.css";

export default function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Optional: Clear any auth tokens or localStorage here
    // localStorage.removeItem("authToken");
    navigate("/"); // redirect to LoginForm page
  };

  return (
    <div className="sidebar">
      <h2 className="logo">
        <span className="highlight">Innova</span>Safe
      </h2>
      <p className="tagline">Drive Smart. Stay Safe</p>

      <button onClick={() => navigate("/data-input")}>
        <FaDatabase className="icon" /> Data Inputs
      </button>
      <button onClick={() => navigate("/historical-data")}>
        <FaHistory className="icon" /> Historical Data
      </button>
      <button onClick={() => navigate("/incident-logs")}>
        <FaExclamationTriangle className="icon" /> Incident Logs
      </button>
      <button className="logout-btn" onClick={handleLogout}>
        <FaSignOutAlt className="icon" /> Logout
      </button>
    </div>
  );
}
