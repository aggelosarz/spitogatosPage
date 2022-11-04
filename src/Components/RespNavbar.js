import React from "react";
import { GiHamburgerMenu} from 'react-icons/gi';

function RespNavbar(){
    return(
        <div>
        <nav className="navbar2" >
     <div>
        <img src="images/simage.png" className="simage2" alt=""/> </div>
       
        <ul className="nav-links">
          
          <input type="checkbox" id="checkbox_toggle" className="checkbox_toggle" />
          <label htmlFor="checkbox_toggle" className="hamburger"><GiHamburgerMenu/></label>
         
          <div className="menu2">
            <li ><a href="/">Main Page</a></li>
            <li><a href="/">Page Two</a></li>
            <li><a href="/">Page Three</a></li>
            <li><a href="/">Our Work</a></li>
            <li><a href="/">About Us</a></li>
            <li><a href="/">Contact</a></li>

           
          </div>

        </ul>

         <ul className="lang2">
            <li>EN</li>
            <li>|</li>
            <li className="greek">GR</li>
           </ul>
      </nav>

      </div>
    )
}

export default RespNavbar;