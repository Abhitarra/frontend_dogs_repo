import React, { useState } from "react";
import "../css/Login.css";
import { loginUser } from "../services/authService";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const handleLogin = async () => {
    const data = await loginUser(email, password);
    console.log("Login successful, token stored:", data);
    if (!data.token) {
      setLoginError(data.message || "Login failed. Please check your credentials.");
      setTimeout(() => {
        setLoginError("");
      }, 2000);
      return;
    }

    setLoginError("");

    localStorage.setItem("token", data.token);
    localStorage.setItem("role", data.role);
    localStorage.setItem("password", password);
    console.log("Login successful, token stored:", data.token);
    console.log("Login successful, role stored:", data.role);
    window.location.href = "/dashboard";
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>🐶 Dog Manager</h2>
        <p className="subtitle">Login to your account</p>

        <input
          type="email"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
            setLoginError("");
          }}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
            setLoginError("");
          }}
        />

        <button onClick={handleLogin} >Login</button>

        {loginError && <p className="login-error">{loginError}</p>}

        <div className="extra-actions">
          <Link to="/signup">Create Account</Link>
          <Link to="/forgot-password"> Forgot Password?</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
