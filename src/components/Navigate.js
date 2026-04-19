function Navbar() {
  const email = localStorage.getItem("email");

  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <div className="navbar">
      <span>Dashboard</span>
      <div>
        Welcome, {email?.split("@")[0] || "User"}
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
}

export default Navbar;