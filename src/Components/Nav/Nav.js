import React, { Component } from 'react';
import logo from "../../img/alcantaralogo.png"

class Nav extends Component {
    render() {
        return (
            <div>
                <img src={logo} alt="Logo"></img>
            </div>
        );
    }
}

export default Nav;
