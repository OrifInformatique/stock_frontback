import React from "react";

/**
 * UI component to show label of a form field.
 *
 * @param {string} forInput Input name to link with this label.
 *
 * @param {string} label Text of the label.
 *
 * @returns {JSX.Element}
 *
 */
const Label = ({ forInput, label }) =>
{
    return (
        <label for={forInput}>
            {label}
        </label>
    )
}

export default Label;