import React from "react";

import clsx from "clsx";

/**
 * UI component to display a textarea field.
 *
 * @returns {JSX.Element}
 *
 */
const Textarea = ({
    name,
    placeholder = null,
    value,
    maxLength = Infinity,
    rows = null,
    cols = null,
    resizeX = true,
    resizeY = true,
    required = false,
    readonly = false,
    disabled = false,
    onChangeFunction,
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
        <textarea
            id={name}
            name={name}
            placeholder={placeholder}
            maxLength={maxLength}
            rows={rows}
            cols={cols}
            required={required}
            readOnly={readonly}
            disabled={disabled}
            onChange={onChangeFunction}
            className={clsx(
                "rounded-md w-full",
                disabled ? "bg-stone-300 cursor-not-allowed" : "bg-background",
                resizeClass,
                className
            )}
        >
            {value}
        </textarea>
    )
}

export default Textarea;