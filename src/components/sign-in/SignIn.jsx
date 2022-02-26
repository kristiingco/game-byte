import React, { Component } from "react";
import PropTypes from "prop-types";
import FormInput from "../form-input/FormInput";

import "./SignIn.scss";
import CustomButton from "../custom-button/CustomButton";

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState = {
            email: "",
            password: "",
        };
    };

    handleChange = (event) => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    };

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password.</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="email"
                        type="email"
                        value={this.state.email}
                        handleChange={this.handleChange}
                        label="Email Address"
                        required
                    />

                    <FormInput
                        name="password"
                        type="password"
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label="Password"
                        required
                    />

                    <CustomButton type="submit">Sign In</CustomButton>
                </form>
            </div>
        );
    }
}

SignIn.propTypes = {};

export default SignIn;
