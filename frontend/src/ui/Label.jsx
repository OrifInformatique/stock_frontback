import React from "react";

import clsx from "clsx";

/**
 * UI component to show label of a form field.
 *
 * @param {string} forInput Input name to link with this label.
 *
 * @param {string} label Text of the label.
 *
 * @param {boolean} inline Defines whether the label is displayed as inline or block. false by default.
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