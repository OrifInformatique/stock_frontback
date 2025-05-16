import React from "react";

import clsx from "clsx";

import ShowFormErrors from "../utils/ShowFormErrors";

/**
 * UI component to display a date input.
 *
 * @param {string} name Name of the input. Required.
 *
 * @param {string} [value=null] Value of the input. In ISO 8601 (YYYY-MM-DD) format. Null by default. \
 * If provided, it means you want to control the input, and have to provide a function to update it (onChangeFunction prop).
 *
 * @param {string} [defaultValue=null] Default value of the input. In ISO 8601 (YYYY-MM-DD) format. Null by default. \
 * Only applies on uncontrolled inputs.
 *
 * @param {string} [min="0000-00-00"] Minimal value of the input. In ISO 8601 (YYYY-MM-DD) format. "0000-00-00" by default.
 *
 * @param {string} [max="9999-99-99"] Maximal value of the input. In ISO 8601 (YYYY-MM-DD) format. "9999-99-99" by default.
 *
 * @param {number} [step="any"] Step (of days) between each valid value. "any" by default. \
 * For example, if step = 7, you could only choose one day in each week.
 *
 * @param {boolean} [readonly=false] Decide whether the input is not editable. False by default.
 *
 * @param {boolean} [disabled=false] Decide whether the input is disabled. False by default.
 *
 * @param {Function} [onChangeFunction=null] Function to call when the input is updated. Null by default.
 *
 * @param {string[]} [errors=[]] Invalid value errors for this input. Empty array by default.
 *
 * @param {string} [className=null] Additional and specific styles for the date input. Null by default.
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
    step = "any",
    readonly = false,
    disabled = false,
    onChangeFunction = null,
    errors = [],
    className = null
}) =>
{
    if(!name)
    {
        console.error("InputDate must have a name.");
        return;
    }

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