import React, { useEffect, useState } from "react";
import { getDogs } from "../services/dogService";
import "../css/dogsDashBoard.css";

function Dogs() {
  const [dogs, setDogs] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchDogs = async () => {
      const res = await getDogs(page, 10, search);

      if (res.success) {
        setDogs(res.data.data);
        setTotalPages(res.data.totalPages);
      }
   };

  return (
    <div className="dogs-container">
      <h2>🐶 Dogs Dashboard</h2>
      {/* 🔍 Filter */}
      <input
        type="text"
        placeholder="Search by breed..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setPage(1);
        }}
        className="search-box"
      />

      {/* 📊 Table */}
      <table className="dog-table">
        <thead>
          <tr>
            <th>🐶</th>
            <th>Breed</th>
            <th>SubBreeds</th>
          </tr>
        </thead>

        <tbody>
          {dogs.length === 0 ? (
            <tr>
              <td colSpan="4">No data found</td>
            </tr>
          ) : (
            dogs.map((dog) => (
              <tr key={dog._id}>
                <td>🐕</td>
                <td>{dog.breed}</td>
                <td>{dog.subBreeds.join(", ") || "-"}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* 📄 Pagination */}
      <div className="pagination">
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          Prev
        </button>

        <span className="page-info">
          Page {page} of {totalPages}
        </span>

        <button
          onClick={() => setPage(page + 1)}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Dogs;
