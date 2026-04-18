import React, { useState } from "react";
import { createDog } from "../services/dogService";
import "../css/createDashBoard.css";

function Create() {
  const [breed, setBreed] = useState("");
  const [subBreed, setSubBreed] = useState("");
  const [message, setMessage] = useState("");

  const handleCreate = async () => {
    try {
      if (!breed && !subBreed) {
        setMessage("⚠️ Please enter breed details");
        setTimeout(() => setMessage(""), 2000);
        return; // ❌ stop API call
      }
      const payload = {
        breed,
        subBreeds: subBreed ? subBreed.split(",").map(item => item.trim()): []
      };
      let res = await createDog(payload);
      if (res.success) {
        setMessage("✅ Dog created successfully!");
        setBreed("");
        setSubBreed("");

        // auto-hide message after 3 sec
        setTimeout(() => setMessage(""), 3000);
      } else {
        setMessage("❌ Failed to create dog - " + (res.errors[0] || "Unknown error"));
        setTimeout(() => setMessage(""), 3000);
    } 
    } catch (err) {
      setMessage("❌ Error creating dog");
    }
  };

  return (
    <div className="create-container">
      <div className="create-card">
        <h2>➕ Create Dog</h2>

        {/* Success / Error Message */}
        {message && <div className="message">{message}</div>}

        <input
          type="text"
          placeholder="Enter Breed"
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter Multiple SubBreeds (comma-separated)"
          value={subBreed}
          onChange={(e) => setSubBreed(e.target.value)}
        />

        <button onClick={handleCreate}>Add Dog</button>
      </div>
    </div>
  );
}

export default Create;
