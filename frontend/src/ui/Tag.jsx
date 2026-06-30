import React from "react";

import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 * UI component to display a tag for an element.
 *
 * @param {string} text The text to display. Required.
 *
 * @param {string} [color="bg-blue"] The background color of the tag. As a Tailwind class. "bg-blue" by default.
 *
 * @param {string} [className=null] Additional and specific styles for the button. Null by default.
 *
 * @returns {JSX.Element}
 *
 */
const Tag = ({
    text,
    color = "bg-blue",
    className = null,
    icon = null
}) => {
    if (!text) {
        console.error("Tag must contain text.");
        return;
    }

    return (
        <span className={clsx(
            "text-white px-1 rounded-md",
            color,
            className
        )}>
            <FontAwesomeIcon
                icon={icon}
                size="1xl"
            />

            {!icon && text}
        </span>
    )
}

export default Tag;