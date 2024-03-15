import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginView = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const credentials = { username, password };

      const response = await fetch("http://127.0.0.1:8000/api/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Login error:", errorData);
        throw new Error(errorData.message || "Login failed");
      }

      const data = await response.json();
      localStorage.setItem("token", data.token); // Store token

      try {
        await navigate("/products"); // Redirect to products page
      } catch (error) {
        console.error("Navigation error:", error);
      }

      if (onLoginSuccess) {
        onLoginSuccess(); // Inform Products.js of successful login (optional)
      }
    } catch (error) {
      // Handle error here if needed
    }
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            value={username}
            required={true}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
            name="username"
            id="username"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            required={true}
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
            name="password2"
            id="password"
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginView;
