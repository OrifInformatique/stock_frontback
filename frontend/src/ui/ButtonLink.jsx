import React from "react";
import { Link } from "react-router-dom";

import clsx from "clsx";

/**
 * UI component to add links to navigate between pages. Styled as a button.
 *
 * @returns {JSX.Element}
 *
 */
const ButtonLink = ({
    to,
    title,
    variant = "blue",
    className,
    children
}) =>
{
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