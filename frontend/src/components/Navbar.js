function Navbar({ dark, setDark }) {
  return (
    <div className="navbar">
      <h2>📇 Contact Manager</h2>
      <button onClick={() => setDark(!dark)}>
        {dark ? "☀️" : "🌙"}
      </button>
    </div>
  );
}

export default Navbar;