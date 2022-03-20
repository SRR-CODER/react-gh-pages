import React from 'react';
import pic from "../images/Menu.png";

export default function Navbar(){
    return(
        <nav className="nav1">
            <label for="toggle"><img src={pic} /></label>
            <input type="checkbox" id="toggle"/>
            <ul className="nav-list">
                <li className="l1"><a href="www.google.in">Home</a></li>
                <li className="l2"><a href="">Gallery</a></li>
                <li className="l3"><a href="">Art</a></li>
                <li className="l4"><a href="">Music</a></li>
                <li className="l5"><a href="">Drama</a></li>
                <li className="l5"><a href="">Dance</a></li>
                <li className="l5"><a href="">Contact</a></li>
            </ul>
        </nav>
    )
}