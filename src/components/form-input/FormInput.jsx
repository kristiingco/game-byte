import React from "react";

import { FormInputLabel, Input, Group } from "./FormInputStyles.jsx";

const FormInput = ({ handleChange, label, ...otherProps }) => {
    return (
        <Group>
            <Input
                className="form-input"
                onChange={handleChange}
                {...otherProps}
            />
            {label && (
                <FormInputLabel shrink={otherProps.value.length}>
                    {label}
                </FormInputLabel>
            )}
        </Group>
    );
};

export default FormInput;
