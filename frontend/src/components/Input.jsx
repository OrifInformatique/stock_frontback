import React from "react";

/**
 * UI component to display input fields.
 *
 * @param {string} name Name of the input.
 *
 * @param {string} [placeholder = null] Text to show as the input placeholder. Null by default.
 *
 * @param {any} [defaultValue = null] Default value of the input. Null by default.
 *
 * @param {string} [type = "text"] Type of the input. "text" by default.
 *
 * @param {boolean} [checked = false] Defines whether the input is selected. False by default. \
 * Works for checkbox and radio inputs.
 *
 * @returns {JSX.Element}
 *
 */
const Input = ({ name, placeholder = null, defaultValue = null, type = "text", checked = false }) =>
{
    return (
        <input
            id={name}
            name={name}
            placeholder={placeholder}
            defaultValue={defaultValue}
            type={type}
            checked={checked}
        />
    )
}

export default Input;