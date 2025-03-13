import React, { useState } from "react";
import Label from "./Label";

/**
 * UI component to select one or more options, in a dropdown.
 *
 * @param {string} name Name of the input.
 *
 * @param {string} [placeholder = null] Text to show as the input placeholder. Null by default.
 *
 * @param {any} [defaultValue = null] Default value of the input. Null by default.
 *
 * @param {boolean} [disabled = false] Defines whether the input is disabled. False by default.
 *
 * @param {array} options Dropdown options.
 *
 * @returns {JSX.Element}
 *
 */
const SingleSelect = ({ name, placeholder = null, defaultValue = null, disabled = false, options = [] }) =>
{
    return (
        <select
            className={`${disabled ? "bg-stone-300 cursor-not-allowed" : "bg-background"} rounded-md w-fit min-w-40`}
            id={name}
            name={name}
            placeholder={placeholder}
            defaultValue={defaultValue}
            disabled={disabled}
            type="text"
        >
            {options.map(option => (
                <option
                    key={option}
                    value={option}
                >
                    {option}
                </option>
            ))}
        </select>
    )
}

export default SingleSelect;