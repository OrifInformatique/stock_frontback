import React, { useState } from "react";

/**
 * UI component to display text input fields.
 *
 * @param {string} name Name of the input.
 *
 * @param {string} [placeholder = null] Text to show as the input placeholder. Null by default.
 *
 * @param {any} value Value of the input.
 *
 * @param {boolean} [disabled = false] Defines whether the input is disabled. False by default.
 *
 * @param {Function} onChangeFunction Function to call when typing in the text field.
 *
 * @returns {JSX.Element}
 *
 */
const InputText = ({ name, placeholder = null, value, disabled = false, onChangeFunction, className }) =>
{
    return (
        <input
            className={`${disabled ? "bg-stone-300 cursor-not-allowed" : "bg-background"} rounded-md w-full ${className}`}
            id={name}
            name={name}
            placeholder={placeholder}
            value={value}
            disabled={disabled}
            type="text"
            onChange={onChangeFunction}
        />
    )
}

export default InputText;