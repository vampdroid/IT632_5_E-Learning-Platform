import React from "react";
import logo from '../../Assets/logo.png';
import icon from '../../Assets/icon-profile.png';
import "./Nav.css";
const Nav=()=>{
    return(
        <div className="Ncontain">
            <div className="left">
                <img className="logo" src={logo} alt="logo" />
                <p className="flash-text">E Learn</p>
                </div>
            <div className="right">
                <a href="https://www.linkedin.com/in/navneet-singh-367546170/" 
                target="_blank"
                className="navlink">Profile</a>
                 <img className="logo1" src={icon} alt="logo" />
                </div>
            </div>
    );
}
export default Nav;