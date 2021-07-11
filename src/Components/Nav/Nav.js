import React, { Component } from 'react';
import logo from "../../img/alcantaralogo.png"
import "./Nav.css"

class Nav extends Component {
    render() {
        return (
            <div>
                <img src={logo} alt="Logo" id="logo"></img>
                <div id="nav">
                    <ul>
                        <li><a href="" className="menuitem">Home</a></li>
                        <li><a href="" className="menuitem">About</a></li>
                        <div id="dropdown">
                            <li id="dropbtn" className="menuitem">Portfolio</li>
                            <div id="dropdown-content">
                                <a href="">Portraits</a>
                                <a href="">Headshots</a>
                                <a href="">Weddings</a>
                            </div>
                        </div>
                        <li><a href="" className="menuitem">Contact</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Nav;
