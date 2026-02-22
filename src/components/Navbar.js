import React from "react";

function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="navbar">
      <h1>Interactive Task Dashboard</h1>
      <button
        className="theme-btn"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </nav>
  );
}

export default Navbar;