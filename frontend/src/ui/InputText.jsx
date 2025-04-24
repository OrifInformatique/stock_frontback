import React from "react";

import clsx from "clsx";

import ShowFormErrors from "../utils/ShowFormErrors";

/**
 * UI component to display text input fields.
 *
 * @returns {JSX.Element}
 *
 */
const InputText = ({
    name,
    placeholder = null,
    value = null,
    defaultValue = null,
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
                type="text"
                id={name}
                name={name}
                placeholder={placeholder}
                {...value !== null
                    ? { value: value }
                    : { defaultValue: defaultValue }
                }
                readOnly = {readonly}
                disabled = {disabled}
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

export default InputText;