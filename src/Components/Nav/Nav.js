import React, { Component } from 'react';
import logo from "../../img/alcantaralogo.png"
import logosmall from "../../img/alcantaralogosmall.png"
import "./Nav.css"

class Nav extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return (
            <div>
                <div id='header'>
                <img src={logo} alt="Logo" id="logo"></img>
                </div>
                <div id="mobileNav">
                    <img src={logosmall} alt="Small logo" id="logosmall"></img>
                    <div className="burger" onClick={this.handleClick}>
                        <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                </div>

                <div className={this.state.clicked ? 'nav active' : 'nav'}>
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
                        <div id="mobiledrop">
                            <li><a href="" className="menuitem">Portraits</a></li>
                            <li><a href="" className="menuitem">Headshots</a></li>
                            <li><a href="" className="menuitem">Weddings</a></li>
                        </div>
                        <li><a href="" className="menuitem">Contact</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Nav;
