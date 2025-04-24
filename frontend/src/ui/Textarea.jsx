import React from "react";

import clsx from "clsx";

import ShowFormErrors from "../utils/ShowFormErrors";

/**
 * UI component to display a textarea field.
 *
 * @returns {JSX.Element}
 *
 */
const Textarea = ({
    name,
    placeholder = null,
    defaultValue = null,
    value = null,
    maxLength = Infinity,
    rows = null,
    cols = null,
    resizeX = true,
    resizeY = true,
    required = false,
    readonly = false,
    disabled = false,
    onChangeFunction = null,
    errors = [],
    className
}) =>
{
    let resizeClass = "";

    switch(true)
    {
        case resizeX && resizeY:
            resizeClass = "resize"

        case !resizeX && resizeY:
            resizeClass = "resize-y"

        case resizeX && !resizeY:
            resizeClass = "resize-x"

        case !resizeX && !resizeY:
            resizeClass = "resize-none"
    }

    return (
        <>
            <textarea
                id={name}
                name={name}
                placeholder={placeholder}
                {...value !== null
                    ? { value: value }
                    : { defaultValue: defaultValue }
                }
                maxLength={maxLength}
                rows={rows}
                cols={cols}
                required={required}
                readOnly={readonly}
                disabled={disabled}
                onChange={onChangeFunction}
                className={clsx(
                    "rounded-md w-full",
                    resizeClass,
                    disabled ? "bg-stone-300 cursor-not-allowed" : "bg-background",
                    errors.length > 0 && "border-2 border-solid border-red-500",
                    className
                )}
            />

            <ShowFormErrors errors={errors} />
        </>
    )
}

export default Textarea;