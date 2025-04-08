import React from "react";

import clsx from "clsx";

/**
 * UI component to display a date field.
 *
 * @returns {JSX.Element}
 *
 */
const InputDate = ({
    name,
    placeholder = null,
    value,
    defaultValue = "",
    min = "0000-00-00",
    max = "9999-99-99",
    step = 1,
    readonly = false,
    disabled = false,
    onChangeFunction,
    className
}) =>
{
    return (
        <input
            type="date"
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

export default InputDate;