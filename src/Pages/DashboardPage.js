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