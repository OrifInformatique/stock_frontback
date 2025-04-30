import React from "react";

import clsx from "clsx";

/**
 * UI component to show label of a form field.
 *
 * @param {string} forInput Input name to link with this label.
 *
 * @param {string} label Text of the label.
 *
 * @param {boolean} [inline=false] Defines whether the label is displayed as inline or block. False (block) by default.
 *
 * @param {string} [className=null] Additional and specific styles for the button. Null by default.
 *
 * @returns {JSX.Element}
 *
 */
const Label = ({
    forInput,
    label,
    inline = false,
    className = null
}) =>
{
    if(!forInput)
    {
        console.error("Label must be linked to an input (by its name).");
        return;
    }

    if(!label)
    {
        console.error("Label must contain text (label prop).");
        return;
    }

    return (
        <label
            htmlFor={forInput}
            className={clsx(
                "py-1 hover:cursor-pointer",
                !inline && "block",
                className
            )}
        >
            {label}
        </label>
    )
}

export default Label;