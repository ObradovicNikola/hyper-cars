import React, { Component } from 'react'
import { tsImportEqualsDeclaration } from '@babel/types'

const initialState = {
    name: "",
    email: "",
    message: "",
    nameError: "",
    emailError: "",
    messageError: ""
}

export default class Form extends Component {
    constructor() {
        super()

        this.state = initialState
    }

    handleChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleChangeEmail = (event) => {
        this.setState({
            email: event.target.value
        })
    }


    handleChangeMessage = (event) => {
        this.setState({
            message: event.target.value
        })
    }


    validate = () => {
        let nameError = ""
        let emailError = ""
        let messageError = ""
        if (!this.state.email.includes('@')) {
            emailError = 'invalid email'
        }

        if (!this.state.name) {
            nameError = "name cannot be blank"
        }

        if (!this.state.message) {
            messageError = "ghosted"
        }

        this.setState({
            nameError,
            emailError,
            messageError
        })

        if (emailError || nameError || messageError)
            return false;
        return true;
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            alert(this.state.name + "\n" + this.state.email + "\n" + this.state.message);
            this.setState(initialState);
        }
    }

    render() {
        return (
            // action="/action_page.php"
            // method="POST"
            <form id="contact_form" method="GET" onSubmit={this.handleSubmit} enctype="multipart/form-data" >
                <div class="row">
                    <label className="required" for="name">Your name:</label><br />
                    <input onChange={this.handleChange} class="name" type="text" name="name" size="30" placeholder="Name" value={this.state.name} /><br />
                    <div className="error-message">{this.state.nameError}</div>
                </div>
                <div class="row">
                    <label className="required" for="email">Your email:</label><br />
                    <input onChange={this.handleChangeEmail} value={this.state.email} name="email" size="30" placeholder="Email" /><br />
                    <div className="error-message">{this.state.emailError}</div>
                </div>
                <div class="row">
                    <label className="required" for="message">Your message:</label><br />
                    <textarea onChange={this.handleChangeMessage} value={this.state.message} id="message" name="message" rows="7" cols="30" placeholder="Message..."></textarea><br />
                    <div className="error-message">{this.state.messageError}</div>
                </div>
                <input className="submit-button" type="submit" value="Send email" />
                {/* If you click the "Submit" button, the form-data will be sent to a page called "/action_page.php". */}
            </form >
        )
    }
}
