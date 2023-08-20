import React from "react";

import "./Nav.css";
const Nav=()=>
{
    return(
     
        <div className="Nav" >
            
            <div className="nav1">
                <img src="./images/nav1.png" alt="text"/>
            </div>
            <div className="navbarContent">
                <a href="/"><h3>Home</h3></a>
                <a href="#About"><h3>About</h3></a>
                <a href="#Services"><h3>Services</h3></a>
                <a href="#Skillscontent"><h3>Skills</h3></a>
               <a href="#Contactcontent"> <h3>Contact</h3></a>

            </div>
            </div>
    )
}
export default Nav;