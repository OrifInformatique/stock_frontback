import React, { useState } from "react";

/**
 * UI component to display text input fields.
 *
 * @param {string} name Name of the input.
 *
 * @param {string} [placeholder = null] Text to show as the input placeholder. Null by default.
 *
 * @param {any} [defaultValue = null] Default value of the input. Null by default.
 *
 * @param {boolean} [disabled = false] Defines whether the input is disabled. False by default.
 *
 * @returns {JSX.Element}
 *
 */
const InputText = ({ name, placeholder = null, defaultValue = null, disabled = false }) =>
{
    const [value, setValue] = useState(defaultValue);

    const handleInput = (event) =>
    {
        setValue(event.target.value);
    }

    return (
        <input
            className={`${disabled ? "bg-stone-300 cursor-not-allowed" : "bg-background"} rounded-md`}
            id={name}
            name={name}
            placeholder={placeholder}
            value={value}
            disabled={disabled}
            type="text"
            onChange={handleInput}
        />
    )
}

export default InputText;