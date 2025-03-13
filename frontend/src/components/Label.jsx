import React from "react";

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
const Label = ({ forInput, label, inline = false }) =>
{
    return (
        <label
            htmlFor={forInput}
            className={`${!inline && "block"} p-2 hover:cursor-pointer`}
        >
            {label}
        </label>
    )
}

export default Label;