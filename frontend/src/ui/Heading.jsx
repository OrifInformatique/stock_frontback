import React from "react";

/**
 * UI component to display different headings.
 *
 * @param {number} headingLevel Level of the heading, from 1 to 6.
 *
 * @param {string} title Text of the heading.
 *
 * @returns {JSX.Element}
 *
 */
const Heading = ({
    headingLevel,
    title
}) =>
{
    const Tag = `h${headingLevel}`;
    const size = headingLevel * -3.5 + 35;

    return (
        <Tag
            className="text-center my-4"
            style={{ fontSize: `${size}px`}}>
            {title}
        </Tag>
    )
}

export default Heading;