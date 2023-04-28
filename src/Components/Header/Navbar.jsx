import React from 'react';
import { useState } from 'react';

export default function Navbar(){
    const [click, setClick] = useState(false);
    function showMenu() {
        setClick(!click);
        console.log(click);
    }
    return(
        <nav className="nav">
           <div className="container    ">
           <label ><a  className="site__logo">Logo</a></label>
            <ul className={click ? 'active__nav-list':'nav__list'}>
                <li className="nav__item"><a  className="nav__link">Home</a></li>
                <li className="nav__item"><a  className="nav__link">Services</a></li>
                <li className="nav__item"><a  className="nav__link">About Us </a></li>
                <li className="nav__item"><a  className="nav__link">Contact Us</a></li>
            </ul>
            <div className="burger__menu" onClick={showMenu} >
                <span className="burger__line"></span>
                <span className="burger__line"></span>
                <span className="burger__line"></span>
            </div>
           </div>
        </nav>
    )
}