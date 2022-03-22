import React from "react";
import {NavLink} from "react-router-dom"


const Navbar = () => {
    return (
       
<nav className="nav nav-pills justify-content-end p-2 shadow">

            <NavLink to="/" className={({isActive})=> `nav-link ${isActive&&'active'}`}>
                Go Home
            </NavLink>

            <NavLink to="/viewfilms"className={({isActive})=> `nav-link ${isActive&&'active'}`}>
                 View Films
            </NavLink>
            <NavLink to="/viewpeople" className={({isActive})=> `nav-link ${isActive&&'active'}`}>
               View People
            </NavLink>
            <NavLink to="/locations" className={({isActive})=> `nav-link ${isActive&&'active'}`}>
               Locations
            </NavLink>
</nav>
      


    );
}

export default Navbar