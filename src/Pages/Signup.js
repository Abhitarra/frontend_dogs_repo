import React, { useState } from "react";
import "../css/Signup.css";
import { signupUser } from "../services/authService";

function Signup() {
  const [form, setForm] = useState({
    username: "",
    password: "",
    confirmPassword: ""
  });

  const [errors, setErrors] = useState({});

  // 🔍 Validation function
  const validate = () => {
    const err = {};

    // Username
    if (!form.username.trim()) {
    err.username = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.username)) {
    err.username = "Enter valid email (e.g. abc@gmail.com)";
  }


    // Password rules
    const password = form.password;

    if (!password) {
      err.password = "Password is required";
    } else {
      if (password.length < 8)
        err.password = "Minimum 8 characters required";
      else if (!/[A-Z]/.test(password))
        err.password = "Must include one uppercase letter";
      else if (!/[0-9]/.test(password))
        err.password = "Must include one number";
      else if (!/[!@#$%^&*]/.test(password))
        err.password = "Must include one special character";
    }

    // Confirm password
    if (form.confirmPassword !== form.password) {
      err.confirmPassword = "Passwords do not match";
    }

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  // Handle submit
  const handleSubmit = async(e) => {
    e.preventDefault();

    if (validate()) {
      const res = await signupUser(form.username, form.password);
      if (res.success === false) {
        alert("❌ " + res.message);
      } else {  
      alert("✅ Account created successfully!");
      setForm({ username: "", password: "", confirmPassword: "" });
      window.location.href = "/"
      }
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">

        <h2>📝 Create Account</h2>

        <form onSubmit={handleSubmit}>

          {/* Username */}
          <input
            type="text"
            placeholder="Username"
            value={form.username}
            onChange={(e) =>
              setForm({ ...form, username: e.target.value })
            }
          />
          {errors.username && <p className="error">{errors.username}</p>}

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
          />
          {errors.password && <p className="error">{errors.password}</p>}

          {/* Confirm Password */}
          <input
            type="password"
            placeholder="Confirm Password"
            value={form.confirmPassword}
            onChange={(e) =>
              setForm({ ...form, confirmPassword: e.target.value })
            }
          />
          {errors.confirmPassword && (
            <p className="error">{errors.confirmPassword}</p>
          )}

          <button type="submit">Sign Up</button>

        </form>
      </div>
    </div>
  );
}

export default Signup;