import React, { Component } from 'react';
import logo from "../../img/alcantaralogo.png"
import "./Nav.css"

class Nav extends Component {
    render() {
        return (
            <div>
                <img src={logo} alt="Logo" id="logo"></img>
                <div>
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">About</a></li>
                        <div id="dropdown">
                            <button id="dropbtn">Portfolio</button>
                            <div id="dropdown-content">
                                <a href="">Portraits</a>
                                <a href="">Headshots</a>
                                <a href="">Weddings</a>
                            </div>
                        </div>
                        <li><a href="">Contact</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Nav;
