import React from "react";

import clsx from "clsx";

import ShowFormErrors from "../utils/ShowFormErrors";

/**
 * UI component to display text input fields.
 *
 * @param {string} name Name of the input. Required.
 *
 * @param {string} [placeholder=null] Indicative text displayed in the input when empty. Null by default.
 *
 * @param {string} [value=null] Value of the date field. Null by default. \
 * If provided, it means you want to control the input, and have to provide a function to update it (onChangeFunction prop).
 *
 * @param {string} [defaultValue=null] Default value of the date input. Null by default. \
 * Only applies on uncontrolled inputs.
 *
 * @param {boolean} [readonly=false] Decide whether the date is not editable. False by default.
 *
 * @param {boolean} [disabled=false] Decide whether the field is disabled. False by default.
 *
 * @param {Function} [onChangeFunction=null] Function to call when the field is updated. Null by default.
 *
 * @param {string[]} [errors=[]] Invalid value errors for this field. Empty array by default.
 *
 * @param {string} [className=null] Additional and specific styles for the date input. Null by default.
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
    if(!name)
    {
        console.error("InputText must have a name.");
        return;
    }

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