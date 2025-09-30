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
      // Redirect to data input page
      navigate("/data-input");
    } else {
      setError("Invalid username or password!");
    }
  };

  return (
    <div className="login-container">
      <h2>ADMIN LOGIN</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>

      {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
    </div>
  );
}
