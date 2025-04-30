import React from "react";

import clsx from "clsx";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/**
 * UI component to interact in the page.
 *
 * @param {FontAwesomeIcon} [icon=null] Icon (provided by FontAwesome) of the button. Null by default,
 *
 * @param {string} [label=null] Label of the button. Null by default.
 *
 * @param {string} [title=null] Title of the button, showing when hovering the button. Null by default.
 *
 * @param {boolean} [keepLabel=false] Decide whether to keep the label on small screens. \
 * If a button doesn't have an icon, it will automatically keep the label. \
 * If a button have the keepLabel at true but no label, keepLabel will become false.
 *
 * @param {string} [type="button"] The type (attribute) of the button. "button" by default.
 *
 * @param {string} [variant="blue"] The color of the button. "blue" by default.
 *
 * @param {Function} [onClickFunction=null] The function to execute when the button is clicked. Null by default.
 *
 * @param {string} [className=null] Additional and specific styles for the button. Null by default.
 *
 * @returns {JSX.Element}
 *
 */
const Button = ({
    icon = null,
    label = null,
    title = null,
    keepLabel = false,
    type = "button",
    variant = "blue",
    onClickFunction = null,
    className = null
}) =>
{
    if(!icon && !label)
    {
        console.error("Button must have an icon or a label or both.");
        return;
    }

    // Keep the label even on small screens
    const doKeepLabel = (keepLabel === true && label !== null) || icon === null;

    return (
        <button
            type={type}
            title={title}
            onClick={onClickFunction}
            className={clsx(
                "rounded-full sm:rounded-md hover:bg-white border-2 text-white transition-colors duration-300",
                doKeepLabel
                    ? "size-full px-4 py-2 "
                    : label
                        ? "size-10 sm:size-full sm:px-4 sm:py-2"
                        : "size-10 p-0",
                `bg-${variant} border-${variant}`,
                `hover:text-${variant}`,
                className
            )}
        >
            {icon &&
                <FontAwesomeIcon
                    icon={icon}
                    className={clsx(doKeepLabel ? "mr-2" : label && "sm:mr-2")}
                />
            }

            {label &&
                <span className={clsx(doKeepLabel ? "inline" : "hidden sm:inline")}>
                    {label}
                </span>
            }
        </button>
    )
}

export default Button;