import React, { useState } from "react";
import "../css/updateDashBoard.css";
import { getDogs,updateDogDetails } from "../services/dogService";

function Update() {
  const [search, setSearch] = useState("");
  const [dog, setDog] = useState(null);
  const [newSub, setNewSub] = useState("");
  const [message, setMessage] = useState("");

  const token = localStorage.getItem("token");

  // 🔍 Search Dog
  const searchDog = async () => {
    try {
      let res;
      if(search !== ""){
        res = await getDogs(1, 1, search);
      }
      const dogData = res.data.data[0];
      if (!dogData) {
        setMessage("⚠️ No dog found with your provided breed");
        setTimeout(() => setMessage(""), 2000);
        return;
      }
      setDog(dogData);
      setNewSub("");
    } catch (err) {
      console.error(err);
    }
  };

  // ✏️ Update Dog
  const updateDog = async () => {
    if (!newSub) return;

    try {
      const updatedSubBreeds = [
        ...(dog.subBreeds || []),
        ...(newSub ? newSub.split(",").map(item => item.trim()) : [])
      ];
      console.log("updatedSubBreeds:", updatedSubBreeds);
      const res = await updateDogDetails(dog.id, { subBreeds: updatedSubBreeds });
      if(res.success) {
        setMessage("✅ Updated successfully!");
        setNewSub("");
      } else {
        setMessage("❌ Update failed: "+ res.errors[0]);
      }

      // refresh
      searchDog();

    } catch (err) {
      setMessage("❌ Update failed");
    }
  };

  return (
    <div className="update-container">
      <div className="update-card">
        <h2>✏️ Update Dog</h2>

        {/* Search */}
        <div className="search-box">
          <input
            placeholder="Search breed..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={searchDog}>Search</button>
        </div>

        {/* Dog Info */}
        {dog && (
          <>
            <p><strong>Breed:</strong> {dog.breed}</p>

            <p><strong>SubBreeds:</strong></p>
            <div className="tags">
              {dog.subBreeds?.map((sub, i) => (
                <span key={i} className="tag">{sub}</span>
              ))}
            </div>

            {/* Add new subBreed */}
            <input
              placeholder="Add multiple new subBreeds (comma-separated)"
              value={newSub}
              onChange={(e) => setNewSub(e.target.value)}
            />

            {/* Update button */}
            <button
              className="update-btn"
              disabled={!newSub}
              onClick={updateDog}
            >
              Update
            </button>
          </>
        )}

        {/* Message */}
        {message && <div className="message">{message}</div>}
        <h4>Check Dogs Dashboard to particular breed name</h4>
      </div>
    </div>
  );
}

export default Update;