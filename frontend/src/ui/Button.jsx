import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/**
 * UI component to interact with or between pages.
 *
 * @param {string} label Label of the button.
 *
 * @param {string} [type = "button"] Button type. "button" by default.
 *
 * @param {string} [variant = "blue"] Color variant of the button. "blue" by default.
 *
 * @returns {JSX.Element}
 *
 */
const Button = ({ icon = null, label, keepLabel = false, type = "button", variant = "blue", onClickFunction, className }) =>
{
    if(!label) keepLabel = false;

    return (
        <button
            type={type}
            onClick={onClickFunction}
            className={`${keepLabel ? "size-full" : "size-10 sm:size-full"} px-4 py-2 rounded-full sm:rounded-md text-white bg-${variant} ${className}`}
        >
            {icon && <FontAwesomeIcon icon={icon} className={label ? keepLabel ? "ml-0 mr-2" : "-ml-[50%] sm:ml-0 sm:mr-2" : ""}/>}

            {label && <span className={keepLabel ? "inline" : "hidden sm:inline"}>{label}</span>}
        </button>
    )
}

export default Button;