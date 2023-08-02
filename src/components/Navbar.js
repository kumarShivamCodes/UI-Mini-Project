import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div class="navbar">
      <Link className=" navbar-header" to="/">
        NotesApp
      </Link>
      <Link className="navbar-elements" to="/">
        Add Notes
      </Link>
      <Link className="navbar-elements" to="/notes">
        My Notes
      </Link>
    </div>
  );
};

export default Navbar;
