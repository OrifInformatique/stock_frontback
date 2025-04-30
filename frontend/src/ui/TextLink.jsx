import React from "react";
import { Link } from "react-router-dom";

import clsx from "clsx";

/**
 * UI component to navigate between pages. Styled as text.
 *
 *  @param {string} to The link to go to. Required.
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
const TextLink = ({
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

    // TODO : Merge this component with ButtonLink

    return (
        <Link
            to={to}
            title={title}
            className={clsx(
                "transition-colors",
                `hover:text-${variant}`,
                className
            )}
        >
            {children}
        </Link>
    )
}

export default TextLink;