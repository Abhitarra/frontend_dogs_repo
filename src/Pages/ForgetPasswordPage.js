import React, { useState } from "react";
import "../css/forgot.css";
import { forgotPassword } from "../services/authService";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    if (!email) {
      setMessage("⚠️ Enter your email");
      return;
    }

    try {
      const res = await forgotPassword(email);

      if (res.success) {
        window.location.href = `/reset-password/${email}`;
      } else {
        setMessage("❌ User not found");
      }
    } catch (err) {
      setMessage("❌ Error occurred");
    }
  };

  return (
    <div className="forgot-container">
      <div className="forgot-card">
        <h2>🔐 Forgot Password</h2>

        <input
          type="email"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <button onClick={handleSubmit}>submit</button>

        {message && <p>{message}</p>}
      </div>
    </div>
  );
}

export default ForgotPassword;
