import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm">
        <Link className="navbar-brand" to="/">
          Metromile
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
