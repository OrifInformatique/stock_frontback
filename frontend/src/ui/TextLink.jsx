import React from "react";
import { Link } from "react-router-dom";

/**
 * UI component to add links to navigate between pages. Styled as text.
 *
 * @returns {JSX.Element}
 *
 */
const TextLink = ({
    to,
    children
}) =>
{
    return (
        <Link
            to={to}
            className="hover:text-blue transition-colors"
        >
            {children}
        </Link>
    )
}

export default TextLink;