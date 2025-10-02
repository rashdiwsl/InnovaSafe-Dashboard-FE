import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Dummy credentials
  const adminUser = {
    username: "admin",
    password: "12345",
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === adminUser.username && password === adminUser.password) {
      setError("");
      navigate("/data-input");
    } else {
      setError("Invalid username or password!");
    }
  };

  return (
    <div className="login-wrapper">
      {/* Car animation */}
      <div className="car-animation">
        <img src="/car.png" alt="Car" className="car" />
      </div>

      {/* Login form */}
      <div className="login-container">
        <h2>ADMIN LOGIN</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Login</button>
        </form>

        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
}
