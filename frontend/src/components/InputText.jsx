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
 * @param {boolean} [checked = false] Defines whether the input is selected. False by default. \
 * Works for checkbox and radio inputs.
 *
 * @returns {JSX.Element}
 *
 */
const InputText = ({ name, placeholder = null, defaultValue = null, checked = false }) =>
{
    return (
        <input
            id={name}
            name={name}
            placeholder={placeholder}
            value={defaultValue}
            checked={checked}
            type="text"
        />
    )
}

export default InputText;