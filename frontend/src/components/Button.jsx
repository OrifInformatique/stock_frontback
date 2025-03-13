import React from "react";
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../tailwind.config.cjs';



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
    const fullConfig = resolveConfig(tailwindConfig);

    return (
        <button
            type={type}
            className={`px-4 py-2 text-white rounded-md`}
            style={{ backgroundColor: fullConfig.theme.colors[variant]}}
        >
            {label}
        </button>
    )
}

export default Button;