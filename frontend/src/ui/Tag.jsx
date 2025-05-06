import React from "react";

/**
 * UI component to display a tag for an element.
 *
 * @param {string} text Text to display.
 *
 * @param {string} color Color of the tag.
 *
 * @returns {JSX.Element}
 *
 */
const Tag = ({ text, color }) =>
{
    return (
        <div
            className={`text-white w-fit px-1 rounded-md bg-${color}`}
        >
            {text}
        </div>
    )
}

export default Tag;