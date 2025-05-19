import React from "react";

import clsx from "clsx";

import ShowFormErrors from "../utils/ShowFormErrors";

/**
 * UI component to display a number input.
 *
 * @param {string} name Name of the input. Required.
 *
 * @param {string} [placeholder=null] Indicative text displayed in the input when empty. Null by default.
 *
 * @param {number} [value=null] Value of the input. Null by default. \
 * If provided, it means you want to control the input, and have to provide a function to update it (onChangeFunction prop).
 *
 * @param {number} [defaultValue=null] Default value of the input. Null by default. \
 * Only applies on uncontrolled inputs.
 *
 * @param {number} [min=-Infinity] Minimal value of the input. -Infinity by default.
 *
 * @param {number} [max=Infinity] Maximal value of the input. Infinity by default.
 *
 * @param {number} [step="any"] Step between each valid value. "any" by default.
 *
 * @param {boolean} [readonly=false] Decide whether the input is not editable. False by default.
 *
 * @param {boolean} [disabled=false] Decide whether the input is disabled. False by default.
 *
 * @param {Function} [onChangeFunction=null] Function to call when the input is updated. Null by default.
 *
 * @param {string[]} [errors=[]] Invalid value errors for this input. Empty array by default.
 *
 * @param {string} [unit=null] Unit of the number. Null by default.
 *
 * @param {string} [className=null] Additional and specific styles for the number input. Null by default.
 *
 * @returns {JSX.Element}
 *
 */
const InputNumber = ({
    name,
    placeholder = null,
    value = null,
    defaultValue = null,
    min = -Infinity,
    max = Infinity,
    step = "any",
    readonly = false,
    disabled = false,
    onChangeFunction = null,
    errors = [],
    unit = null,
    className = null
}) =>
{
    if(!name)
    {
        console.error("InputNumber must have a name.");
        return;
    }

    return (
        <>
            <div className="flex gap-2">
                <input
                    type="number"
                    id={name}
                    name={name}
                    placeholder={placeholder}
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

                {unit &&
                    <p className="self-center">
                        {unit}
                    </p>
                }
            </div>

            <ShowFormErrors errors={errors} />
        </>
    )
}

export default InputNumber;