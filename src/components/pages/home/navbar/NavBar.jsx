import React, { useEffect, useState, useContext } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css"


/* icons */
import { BiSolidUserCircle, BiLogOut } from "react-icons/bi";
import { RiLockPasswordLine } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";
import { FaMobileRetro } from "react-icons/fa6";
import { IoLogOut } from "react-icons/io5";
import { GiHouse } from "react-icons/gi";

import axios from "axios"
import { loginStatusContext } from "../../../../App.jsx"
function NavBar() {
  const location = useLocation()
  const navigate = useNavigate()
  const { userAuthentication, setUserAuthentication } = useContext(loginStatusContext)
  var path = location.pathname
  if (path === "/") {
    path = "home"
  } else if (path === "/wish-list") {
    path = "wishList"
  } else if ((path === "/login" || path === "/signup") && !userAuthentication.login) {
    path = "login"
  } else {
    path = location.pathname.slice(1)
  }
  const [toggleMenu, setToggleMenu] = useState({
    home: false,
    wishList: false,
    owner: false,
    login: false,
    [path]: true
  })
  const [profileToggle, setProfileToggle] = useState(false)
  function handleToggle(event) {
    const { name } = event.target;
    setToggleMenu(prev => {
      for (let key in prev) {
        if (!(key === name)) {
          prev[key] = false
        }
      }

      return { ...prev, [name]: true }
    })
  }
  function handleProfileToggle() {
    setProfileToggle(!profileToggle)
  }
  async function handleLogout() {
    const response = await axios.get(`${userAuthentication.apiEndPoint}/user/logout`, { withCredentials: true })
    setUserAuthentication({ login: !response.data.logoutStatus })
    setProfileToggle(false)
    navigate("/")
  }
  return <div className="nav-home-header">
    <div>
      <NavLink className="logo-navbar" to="/">LendHome</NavLink>
    </div>
    <div>
      <nav className="navbar-home-manual">
        <NavLink className={`link${toggleMenu.home ? " selected-link" : ""}`} name="home" onClick={handleToggle} to="/">Home</NavLink>
        <NavLink className={`link${toggleMenu.wishList ? " selected-link" : ""}`} name="wishList" onClick={handleToggle} to="/wish-list">Wish-list</NavLink>
        <NavLink className={`link${toggleMenu.owner ? " selected-link" : ""}`} name="owner" onClick={handleToggle} to="/owner">For-owners</NavLink>
        {userAuthentication.login ? <span style={{ cursor: "pointer", width: "20px", position: "relative", left: "20px" }} className={"link"} onClick={handleProfileToggle}>
          <BiSolidUserCircle className="user-icon" /><span style={{ position: "relative", bottom: "5px" }}>{userAuthentication.user.username}</span></span> :
          <NavLink className={`link${toggleMenu.login ? " selected-link" : ""}`} name="login" onClick={handleToggle} to="/login">Login</NavLink>}
      </nav>
      {/* <div style={{ display: (profileToggle && userAuthentication.login ? "" : "none"), position: "absolute" }} className="navbar-user-menu-manual">
        <div className="user-sub-menu">
          <div className="user-profile-sub-menu">
            <BiSolidUserCircle className="user-profile-icon" />
            <div style={{ fontSize: "25px" }}>{userAuthentication.login && userAuthentication.user.username}</div>
            <div style={{ lineHeight: "1.5" }}>
              <div className="user-profile-menu"><HiOutlineMail className="user-profile-menu-icons" /><div>{userAuthentication.login && userAuthentication.user.useremail}</div></div>
              <div className="user-profile-menu"><FaMobileRetro className="user-profile-menu-icons" /><div>{userAuthentication.login && userAuthentication.user.usermobile}</div></div>
            </div>
          </div>
          // <ul className="user-sub-menu-list" type="none"> 
             <li>
              <RiLockPasswordLine className="user-profile-sub-menu-icons" />update password
            </li>
            <li>
              <HiOutlineMail className="user-profile-sub-menu-icons" />change email
            </li>
            <li>
              <FaMobileRetro className="user-profile-sub-menu-icons" />change mobile number
            </li> 
            <li style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly"}}>
              
            </li>
            </ul> //
          <hr style={{ margin: "10px auto" }} />
          <div className="user-properties" style={{marginBottom: "10px", marginTop: "15px"}}><GiHouse style={{marginRight: "6px"}}/><NavLink style={{textDecoration: "none", color: "black"}} to="/my-properties">My Properties</NavLink></div>
          <div className="user-profile-menu-logout" onClick={handleLogout}><IoLogOut style={{ fontSize: "25px" }} /><div> logout</div></div>
        </div>
      </div> */}
      <div className={`user-menu-box ${profileToggle && userAuthentication.login ? "visible" : ""}`}>
        <div className="user-menu-content">
          {/* Profile Header */}
          <div className="user-profile-header">
            <BiSolidUserCircle className="user-profile-icon" />
            <div className="user-name">{userAuthentication.login && userAuthentication.user.username}</div>
          </div>

          {/* User Details */}
          <div className="user-info">
            <div className="user-detail">
              <HiOutlineMail className="user-icon" />
              <span>{userAuthentication.login && userAuthentication.user.useremail}</span>
            </div>
            <div className="user-detail">
              <FaMobileRetro className="user-icon" />
              <span>{userAuthentication.login && userAuthentication.user.usermobile}</span>
            </div>
          </div>

          <hr className="menu-divider" />

          {/* Navigation Links */}
          <div className="menu-option">
            <GiHouse className="user-icon" />
            <NavLink to="/my-properties" className="menu-link">My Properties</NavLink>
          </div>

          {/* Logout Button */}
          <div className="menu-option logout" onClick={handleLogout}>
            <IoLogOut className="user-icon" />
            <span>Logout</span>
          </div>
        </div>
      </div>
    </div>
  </div>
}

export default NavBar;