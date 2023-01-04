import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiFillGithub} from "react-icons/ai";
import { FaTimes} from "react-icons/fa";
import { HiMenu} from "react-icons/hi";
import "../../reset/reset.scss"
import "./navbar.scss"
function Navbar() {
    const [isMobile, setIsMobile] = useState(false)
  return (
    <nav>
    <div className='navbar'>
        <Link to={"/"}>
            <h3>Start Bootstrap</h3>
        </Link>
        <ul className={isMobile ? "navbar_link-mobil" :"navbar_link"}
        onClick={()=> setIsMobile(false)}>
            <Link to={"/"}>
            <li>Home</li>
            </Link>
            <Link to={"/about"}>
            <li>About</li>
            </Link>
            <Link>
            <li><AiFillGithub/></li>
            </Link>
        </ul>
        <button className='mobil-navbar-icon' onClick={()=> setIsMobile(!isMobile)}>
            {isMobile ? (<p><FaTimes/></p>) : (<p><HiMenu/></p>)}
        </button>
    </div>
    </nav>
  )
}
export default Navbar