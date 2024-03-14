import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection

const LoginView = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Access the navigate function

  const clickHandler = async (e) => {
    e.preventDefault();

    try {
      const credentials = { username, password }; // Create a more secure object

      const response = await fetch("http://127.0.0.1:8000/api/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        // Handle non-200 status codes with an error message
        const errorData = await response.json();
        setError(errorData.message || "Login failed");
        console.error("Error:", errorData);
        return; // Exit the function if there's an error
      }

      const data = await response.json();
      setToken(data.token); // Set token only if login is successful
      setError(null); // Clear error state on successful login
      console.log("Login successful! Token:", data.token);

      // Store token in localStorage for persistence (optional)
      localStorage.setItem("token", data.token);

      // Redirect to products page after successful login
      try {
        await navigate("/products"); // Redirect to products page
      } catch (error) {
        console.error("Navigation error:", error);
      }
    } catch (error) {
      setError("An error occurred during login. Please try again.");
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <form onSubmit={clickHandler}>
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

        {token && <p>Token: {token}</p>}
        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
};

export default LoginView;
