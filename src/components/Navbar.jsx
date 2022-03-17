import React from "react";
import logo from "../logo.svg";
import "./Navbar.css";

const Navbar = ({ setQuery, handleFilter }) => {
  const handleSearch = (e) => {
    handleFilter(e.target.value);
  };

  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="navbar__logo" />
      <input
        onChange={handleSearch}
        className="navbar__input"
        type="text"
        placeholder="search user..."
      />
    </nav>
  );
};

export default Navbar;
