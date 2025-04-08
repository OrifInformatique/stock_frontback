import React from "react";

import clsx from "clsx";

/**
 * UI component to display a number field.
 *
 * @returns {JSX.Element}
 *
 */
const InputNumber = ({
    name,
    placeholder = null,
    value,
    defaultValue = "",
    min = -Infinity,
    max = Infinity,
    step = "any",
    readonly = false,
    disabled = false,
    onChangeFunction,
    className
}) =>
{
    return (
        <input
            type="number"
            id={name}
            name={name}
            placeholder={placeholder}
            value={value}
            defaultValue={defaultValue}
            min={min}
            max={max}
            step={step}
            readOnly={readonly}
            disabled={disabled}
            onChange={onChangeFunction}
            className={clsx(
                "rounded-md w-full",
                disabled ? "bg-stone-300 cursor-not-allowed" : "bg-background",
                className
            )}
        />
    )
}

export default InputNumber;