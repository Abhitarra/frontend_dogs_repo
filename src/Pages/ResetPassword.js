import React, { useState } from "react";
import "../css/resetPassword.css";
import { resetPasswordUser } from "../services/authService";
import { useParams } from "react-router-dom";

function ResetPassword() {
  const { token } = useParams();
  const [form, setForm] = useState({
    password: "",
    confirmPassword: ""
  });

  const [errors, setErrors] = useState({});

  // 🔍 Validation function
  const validate = () => {
    const err = {};
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
      const res = await resetPasswordUser(token, form.password);
      if (res.success === false) {
        alert("❌ " + res.message);
      } else {  
      alert("✅ password reset successfully!");
      setForm({ password: "", confirmPassword: "" });
      window.location.href = "/"
      }
    }
  };

  return (
    <div className="resetPassword-container">
      <div className="resetPassword-card">

        <h2>📝 Reset Your Password</h2>

        <form onSubmit={handleSubmit}>

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

          <button type="submit">Reset Password</button>

        </form>
      </div>
    </div>
  );
}

export default ResetPassword;