import React from "react";

import clsx from "clsx";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/**
 * UI component to interact in the page.
 *
 * @returns {JSX.Element}
 *
 */
const Button = ({
    icon = null,
    label = null,
    title,
    keepLabel = false,
    type = "button",
    variant = "blue",
    onClickFunction,
    className
}) =>
{
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