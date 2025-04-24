import React from "react";

import clsx from "clsx";

import ShowFormErrors from "../utils/ShowFormErrors";

/**
 * UI component to display a number field.
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