// import React, { useEffect, useState } from "react";
// import { getDogs } from "../services/dogService";
// import "../css/dashboard.css";
// import NavigationBar from "../components/Navigate";

// function Dashboard() {
//   const [dogs, setDogs] = useState([]);
//   const [page, setPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const [search, setSearch] = useState("");

//   const fetchDogs = async () => {
//     const res = await getDogs(page, 5, search);

//     if (res.success) {
//       setDogs(res.data.data);
//       setTotalPages(res.data.totalPages);
//     }
//   };

//   useEffect(() => {
//     fetchDogs();
//   }, [page, search]);

//   // 🗑 delete (placeholder)
//   const handleDelete = (id) => {
//     console.log("Delete dog:", id);
//   };

//   // ✏️ update (placeholder)
//   const handleUpdate = (dog) => {
//     console.log("Update dog:", dog);
//   };

//   return (
//     <div className="dashboard-container">
//       <NavigationBar />
//       <h2 style={{ padding: "20px" }}>🐶 Dogs Dashboard</h2>
//       {/* 🔍 Filter */}
//       <input
//         type="text"
//         placeholder="Search by breed..."
//         value={search}
//         onChange={(e) => {
//           setSearch(e.target.value);
//           setPage(1);
//         }}
//         className="search-box"
//       />

//       {/* 📊 Table */}
//       <table className="dog-table">
//         <thead>
//           <tr>
//             <th>🐶</th>
//             <th>Breed</th>
//             <th>SubBreeds</th>
//             <th>Actions</th>
//           </tr>
//         </thead>

//         <tbody>
//           {dogs.length === 0 ? (
//             <tr>
//               <td colSpan="4">No data found</td>
//             </tr>
//           ) : (
//             dogs.map((dog) => (
//               <tr key={dog._id}>
//                 <td>🐕</td>
//                 <td>{dog.breed}</td>
//                 <td>{dog.subBreeds.join(", ") || "-"}</td>
//                 <td>
//                   <button onClick={() => handleUpdate(dog)}>Edit</button>
//                   <button onClick={() => handleDelete(dog._id)}>Delete</button>
//                 </td>
//               </tr>
//             ))
//           )}
//         </tbody>
//       </table>

//       {/* 📄 Pagination */}
//       <div className="pagination">
//         <button onClick={() => setPage(page - 1)} disabled={page === 1}>
//           Prev
//         </button>

//         <span className="page-info">
//           Page {page} of {totalPages}
//         </span>

//         <button
//           onClick={() => setPage(page + 1)}
//           disabled={page === totalPages}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;


// import React, { useState } from "react";
// import "../css/dashboard.css";

// function Dashboard() {
//   const [search, setSearch] = useState("");
//   const [dogs, setDogs] = useState([
//     { id: 1, breed: "Labrador", sub: "English" },
//     { id: 2, breed: "Bulldog", sub: "French" },
//     { id: 3, breed: "Pug", sub: "Small" },
//     { id: 4, breed: "Beagle", sub: "Hunting" },
//     { id: 5, breed: "Husky", sub: "Siberian" }
//   ]);

//   const [breed, setBreed] = useState("");
//   const [subBreed, setSubBreed] = useState("");

//   const [updateSearch, setUpdateSearch] = useState("");
//   const [selectedDog, setSelectedDog] = useState(null);
//   const [newSub, setNewSub] = useState("");

//   // 🔍 filter table
//   const filteredDogs = dogs.filter((d) =>
//     d.breed.toLowerCase().includes(search.toLowerCase())
//   );

//   // ❌ delete
//   const deleteDog = (id) => {
//     setDogs(dogs.filter((d) => d.id !== id));
//   };

//   // ➕ add
//   const addDog = () => {
//     const newDog = {
//       id: Date.now(),
//       breed,
//       sub: subBreed
//     };
//     setDogs([...dogs, newDog]);
//     setBreed("");
//     setSubBreed("");
//   };

//   // ✏️ search for update
//   const handleSearchUpdate = () => {
//     const found = dogs.find((d) =>
//       d.breed.toLowerCase().includes(updateSearch.toLowerCase())
//     );
//     setSelectedDog(found);
//   };

//   // ✏️ update
//   const updateDog = () => {
//     const updated = dogs.map((d) =>
//       d.id === selectedDog.id ? { ...d, sub: newSub } : d
//     );
//     setDogs(updated);
//     setSelectedDog(null);
//     setNewSub("");
//   };

//   return (
//     <div className="dashboard">
      
//       {/* 🔝 Navbar */}
//       <div className="navbar">
//         <h2>🐶 Dog Manager</h2>
//         <div>
//           Welcome, Abhishek
//           <button>Logout</button>
//         </div>
//       </div>

//       {/* 🔍 Search + Table */}
//       <div className="section">
//         <input
//           placeholder="Search breed..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />

//         <table>
//           <thead>
//             <tr>
//               <th>Breed</th>
//               <th>SubBreed</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredDogs.slice(0, 5).map((dog) => (
//               <tr key={dog.id}>
//                 <td>{dog.breed}</td>
//                 <td>{dog.sub}</td>
//                 <td>
//                   <button onClick={() => deleteDog(dog.id)}>
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* ➕ Create + ✏️ Update */}
//       <div className="grid">
        
//         {/* Create */}
//         <div className="card">
//           <h3>Create Dog</h3>
//           <input
//             placeholder="Breed"
//             value={breed}
//             onChange={(e) => setBreed(e.target.value)}
//           />
//           <input
//             placeholder="SubBreed"
//             value={subBreed}
//             onChange={(e) => setSubBreed(e.target.value)}
//           />
//           <button onClick={addDog}>Add Dog</button>
//         </div>

//         {/* Update */}
//         <div className="card">
//           <h3>Update Dog</h3>

//           <input
//             placeholder="Search breed..."
//             value={updateSearch}
//             onChange={(e) => setUpdateSearch(e.target.value)}
//           />
//           <button onClick={handleSearchUpdate}>Find</button>

//           {selectedDog && (
//             <>
//               <p>Selected: {selectedDog.breed}</p>
//               <input
//                 placeholder="New SubBreed"
//                 value={newSub}
//                 onChange={(e) => setNewSub(e.target.value)}
//               />
//               <button onClick={updateDog}>Update</button>
//             </>
//           )}
//         </div>

//       </div>

//       {/* 🐶 Info */}
//       <div className="section">
//         <h3>About Dogs</h3>
//         <p>
//           Dogs are loyal animals and great companions. They come in many breeds
//           and are used for security, rescue, and as pets.
//         </p>
//       </div>

//     </div>
//   );
// }

// export default Dashboard;

import React, { useState } from "react";
import "../css/dashboard.css";
import Navbar from "../components/Navigate";
import Sidebar from "../components/Sidebar";

import Dogs from "./DogsPage";
import Create from "./CreatePage";
import Update from "./UpdatePage";
import About from "./AboutPage";
import Delete from "./DeletePage";

function Dashboard() {
  const [active, setActive] = useState("dogs");

  const renderContent = () => {
    switch (active) {
      case "dogs":
        return <Dogs />;
      case "create":
        return <Create />;
      case "update":
        return <Update />;
      case "delete":
        return <Delete />;
      case "about":
        return <About />;
      default:
        return <Dogs />;
    }
  };

  return (
    <div className="layout">
      <Sidebar setActive={setActive} />
      
      <div className="main">
        <Navbar />
        <div className="content">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;