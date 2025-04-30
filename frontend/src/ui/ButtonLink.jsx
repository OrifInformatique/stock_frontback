import React from "react";
import { Link } from "react-router-dom";

import clsx from "clsx";

/**
 * UI component to navigate between pages. Styled as a button.
 *
 * @param {string} to The link to go to. Required.
 *
 * @param {string} title Title of the link, showing when hovering the link. Null by default.
 *
 * @param {string} [variant="blue"] The color of the link. "blue" by default.
 *
 * @param {string} [className=null] Additional and specific styles for the link. Null by default.
 *
 * @returns {JSX.Element}
 *
 */
const ButtonLink = ({
    to,
    title = null,
    variant = "blue",
    children,
    className = null
}) =>
{
    if(!to)
    {
        console.error("ButtonLink must have a link to go to.");
        return;
    }

    // TODO : Merge this component with TextLink

    return (
        <Link
            to={to}
            title={title}
            className={clsx(
                "px-4 py-2 rounded-full sm:rounded-md hover:bg-white border-2 text-white text-center transition-all duration-300",
                `bg-${variant} border-${variant}`,
                `hover:text-${variant}`,
                className
            )}
        >
            {children}
        </Link>
    )
}

export default ButtonLink;