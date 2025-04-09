import React from "react";
import { Link } from "react-router-dom";

import clsx from "clsx";

/**
 * UI component to add links to navigate between pages. Styled as text.
 *
 * @returns {JSX.Element}
 *
 */
const TextLink = ({
    to,
    className,
    children
}) =>
{
    return (
        <Link
            to={to}
            className={clsx(
                "hover:text-blue transition-colors",
                className
            )}
        >
            {children}
        </Link>
    )
}

export default TextLink;