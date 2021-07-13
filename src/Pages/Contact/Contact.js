import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Form from "../../Components/ContactForm/ContactForm"

class Contact extends Component {
    render() {
        return (
            <div>
                <Form />
            </div>
        );
    }
}

export default Contact;
