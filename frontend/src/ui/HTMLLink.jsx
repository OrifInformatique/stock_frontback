import React from "react";
import { Link } from "react-router-dom";

import clsx from "clsx";

/**
 * UI component to navigate between pages.
 *
 * @param {string} to The link to go to. Required.
 *
 * @param {string} title Title of the link, showing when hovering the link. Null by default.
 *
 * @param {string} [variant="blue"] The color of the link. "blue" by default.
 *
 * @param {boolean} [colorOnHover=true] Decide whether to color the text with the color defined in variant when hovered. True by default.
 *
 * @param {boolean} [underlineOnHover=false] Decide whether to underline the text when hovered. False by default.
 *
 * @param {boolean} [styleAsButton=false] Decide whether to display the link as a button. False by default.
 *
 * @param {string} [className=null] Additional and specific styles for the link. Null by default.
 *
 * @returns {JSX.Element}
 *
 */
const HTMLLink = ({
    to,
    title = null,
    variant = "blue",
    colorOnHover = true,
    underlineOnHover = false,
    styleAsButton = false,
    children,
    className = null
}) =>
{
    if(!to)
    {
        console.error("HTMLLink must have a link to go to.");
        return;
    }

    if(!children)
    {
        console.error("HTMLLink must have children.");
        return;
    }

    return (
        <Link
            to={to}
            title={title}
            className={clsx(
                "transition-all",
                colorOnHover && `hover:text-${variant}`,
                underlineOnHover && "hover:underline",
                styleAsButton && `px-4 py-2 rounded-full sm:rounded-md bg-${variant} hover:bg-white border-2 border-${variant} text-white text-center duration-300`,
                className
            )}
        >
            {children}
        </Link>
    )
}

export default HTMLLink;