import React from "react";

import clsx from "clsx";

import ShowFormErrors from "../utils/ShowFormErrors";

/**
 * UI component to select one or more options, in a dropdown.
 *
 * @returns {JSX.Element}
 *
 */
const SingleSelect = ({
    name,
    options = [],
    defaultValue = null,
    selectedValue = null,
    disabled = false,
    onChangeFunction = null,
    errors = [],
    className = null
}) =>
{
    const handleSingleSelect = (event) =>
    {
        onChangeFunction(event.target.value);
    }

    return (
        <>
            <select
                id={name}
                name={name}
                {...selectedValue !== null
                    ? { value: selectedValue }
                    : { defaultValue: defaultValue }
                }
                disabled={disabled || options.length === 0}
                onChange={onChangeFunction && handleSingleSelect}
                className={clsx(
                    "rounded-md w-full",
                    disabled ? "bg-stone-300 cursor-not-allowed" : "bg-background",
                    errors.length > 0 && "border-2 border-solid border-red-500",
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

            <ShowFormErrors errors={errors} />
        </>
    )
}

export default SingleSelect;