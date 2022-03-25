import React from "react";

import {
    CustomButtonContainer,
    GoogleSignInButton,
    InvertedButton,
} from "./CustomButtonStyles";

export const BUTTON_TYPE_CLASSES = {
    base: "base",
    google: "google-sign-in",
    inverted: "inverted",
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
    ({
        [BUTTON_TYPE_CLASSES.base]: CustomButtonContainer,
        [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
        [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
    }[buttonType]);

const CustomButton = ({ children, buttonType, ...props }) => {
    const CustomButtonType = getButton(buttonType);
    return <CustomButtonType {...props}>{children}</CustomButtonType>;
};

export default CustomButton;
