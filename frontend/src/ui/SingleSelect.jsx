import React, { useState } from "react";

import clsx from "clsx";

/**
 * UI component to select one or more options, in a dropdown.
 *
 * @returns {JSX.Element}
 *
 */
const SingleSelect = ({
    name,
    options = [],
    selectedValue,
    disabled = false,
    onChangeFunction,
    className
}) =>
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
            className={clsx(
                "rounded-md w-full",
                disabled ? "bg-stone-300 cursor-not-allowed" : "bg-background",
                className
            )}
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