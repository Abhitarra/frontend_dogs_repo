function Sidebar({ setActive }) {
  return (
    <div className="sidebar">
      <h2>🐶 Dog Manager</h2>

      <div onClick={() => setActive("dogs")}>Dogs</div>
      <div onClick={() => setActive("create")}>Create</div>
      <div onClick={() => setActive("update")}>Update</div>
      <div onClick={() => setActive("delete")}>Delete</div>
      <div onClick={() => setActive("about")}>About</div>
    </div>
  );
}

export default Sidebar;