import React, { useState } from "react";
import Label from "./Label";

/**
 * UI component to select one or more options, in a dropdown.
 *
 * @returns {JSX.Element}
 *
 */
const SingleSelect = ({ name, options = [], selectedValue, disabled = false, onChangeFunction }) =>
{
    const handleSingleSelect = (event) =>
    {
        onChangeFunction(event.target.value);
    }

    return (
        <select
            id={name}
            name={name}
            value={selectedValue}
            disabled={disabled || options.length === 0}
            onChange={handleSingleSelect}
            className={`${disabled ? "bg-stone-300 cursor-not-allowed" : "bg-background"} rounded-md w-full`}
        >
            {options.map(option => (
                <option
                    key={option.value}
                    value={option.value}
                >
                    {option.label}
                </option>
            ))}
        </select>
    )
}

export default SingleSelect;