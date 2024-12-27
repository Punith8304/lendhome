import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css"
function NavBar() {
    return <nav className="navbar">
      <NavLink className="logo" to="/"><h2>LendHome</h2></NavLink>
      <ul>
          <li><NavLink className="link" to="/">Home</NavLink></li>
          <li><NavLink className="link" to="/wish-list">WishList</NavLink></li>
          <li><NavLink className="link" to="/owner">ForOwners</NavLink></li>
      </ul>
      <NavLink className="contact" to="/contact-us"> ContactUs </NavLink>
      <NavLink className="login" to="/login">Login</NavLink>
    
    </nav>
}

export default NavBar;