import React from "react";

import clsx from "clsx";

import ShowFormErrors from "../utils/ShowFormErrors";

/**
 * UI component to display a date field.
 *
 * @returns {JSX.Element}
 *
 */
const InputDate = ({
    name,
    value = null,
    defaultValue = null,
    min = "0000-00-00",
    max = "9999-99-99",
    step = 1,
    readonly = false,
    disabled = false,
    onChangeFunction = null,
    errors = [],
    className = null
}) =>
{
    return (
        <>
            <input
                type="date"
                id={name}
                name={name}
                {...value !== null
                    ? { value: value }
                    : { defaultValue: defaultValue }
                }
                min={min}
                max={max}
                step={step}
                readOnly={readonly}
                disabled={disabled}
                onChange={onChangeFunction}
                className={clsx(
                    "rounded-md w-full",
                    disabled ? "bg-stone-300 cursor-not-allowed" : "bg-background",
                    errors.length > 0 && "border-2 border-solid border-red-500",
                    className
                )}
            />

            <ShowFormErrors errors={errors} />
        </>
    )
}

export default InputDate;