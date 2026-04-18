import React, { useState } from "react";
import "../css/deleteDashBoard.css";
import { getDogs, deleteDog } from "../services/dogService";

function Delete() {
  const [search, setSearch] = useState("");
  const [dog, setDog] = useState(null);
  const [message, setMessage] = useState("");

  // 🔍 Search Dog
  const searchDog = async () => {
    if (!search.trim()) {
      setMessage("⚠️ Please enter breed to search");
      return;
    }

    try {
      const res = await getDogs(1, 1, search);
      const dogData = res.data.data[0];

      if (!dogData) {
        setDog(null);
        setMessage("⚠️ No dog found with given breed:");
        return;
      }

      setDog(dogData);
      setMessage("");
    } catch (err) {
      setMessage("❌ Error fetching dog");
    }
  };

  // 🗑️ Delete Dog
  const deleteDogDetails = async () => {

    try {
      const res = await deleteDog(dog.id);

      if (res.success) {
        setMessage("✅ Deleted successfully!");
        setDog(null); // 🔥 clear UI
        setSearch("");
      } else {
        setMessage("❌ Delete failed: " + res.message);
      }
    } catch (err) {
      setMessage("❌ Delete failed");
    }

    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <div className="delete-container">
      <div className="delete-card">
        <h2>🗑️ Delete Dog</h2>

        {/* 🔍 Search */}
        <div className="search-box">
          <input
            placeholder="Search breed to delete..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={searchDog}>Search</button>
        </div>

        {/* 🐶 Dog Info */}
        {dog && (
          <>
            <p><strong>Breed:</strong> {dog.breed}</p>

            <p><strong>SubBreeds:</strong></p>
            <div className="tags">
              {dog.subBreeds?.map((sub, i) => (
                <span key={i} className="tag">{sub}</span>
              ))}
            </div>

            {/* 🗑️ Delete button */}
            <button
              className="delete-btn"
              onClick={deleteDogDetails}
            >
              Delete
            </button>
          </>
        )}

        {/* 📢 Message */}
        {message && <div className="message">{message}</div>}

        {/* 🔁 Scroll text */}
        <h4>
          Check Dogs Dashboard to particular breed name to delete
        </h4>
      </div>
    </div>
  );
}

export default Delete;