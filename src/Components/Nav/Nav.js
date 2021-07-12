import React, { Component } from 'react';
import { Link } from "react-router-dom";
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
                        <li><Link to="/" className="menuitem">Home</Link></li>
                        <li><Link to="/about" className="menuitem">About</Link></li>
                        <div id="dropdown">
                            <li id="dropbtn" className="menuitem">Portfolio</li>
                            <div id="dropdown-content">
                                <Link to="/portraits" className="menuitem">Portraits</Link>
                                <Link to="/headshots" className="menuitem">Headshots</Link>
                                <Link to="/weddings" className="menuitem">Weddings</Link>
                            </div>
                        </div>
                        <div id="mobiledrop">
                            <li><Link to="/portraits" className="menuitem">Portraits</Link></li>
                            <li><Link to="/headshots" className="menuitem">Headshots</Link></li>
                            <li><Link to="/weddings" className="menuitem">Weddings</Link></li>
                        </div>
                        <li><Link to="/contact" className="menuitem">Contact</Link></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Nav;
