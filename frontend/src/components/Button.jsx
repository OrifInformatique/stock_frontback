import React from "react";

/**
 * UI component to interact with or between pages.
 *
 * @param {string} label Label of the button.
 *
 * @param {string} [type = "button"] Button type. "button" by default.
 *
 * @param {string} [variant = "primary"] Color variant of the button. "primary" by default.
 *
 * @returns {JSX.Element}
 *
 */
const Button = ({ label, type = "button", variant = "primary" }) =>
{
    return (
        <button
            type={type}
            className={variant}
        >
            {label}
        </button>
    )
}

export default Button;