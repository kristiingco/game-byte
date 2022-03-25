import React from "react";

import SignIn from "../../components/sign-in/SignIn";
import SignUp from "../../components/sign-up/SignUp";

import { AuthenticationContainer } from "./AuthenticationStyles.jsx";
const Authentication = () => {
    return (
        <AuthenticationContainer>
            <SignIn />
            <SignUp />
        </AuthenticationContainer>
    );
};

export default Authentication;
