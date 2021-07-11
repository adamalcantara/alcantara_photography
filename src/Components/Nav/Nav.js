import React, { Component } from 'react';
import logo from "../../img/alcantaralogo.png"

class Nav extends Component {
    render() {
        return (
            <div>
                <img src={logo} alt="Logo"></img>
                <div>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Portfolio</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Nav;
