import React, { Component } from 'react';
import logo from "../../img/alcantaralogo.png"
import logosmall from "../../img/alcantaralogosmall.png"
import "./Nav.css"

class Nav extends Component {
    state = {clicked: false}

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return (
            <div>
                <img src={logo} alt="Logo" id="logo"></img>
                <img src={logosmall} alt="Small logo" id="logosmall"></img>
                <div>
                    <i></i>
                </div>
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
