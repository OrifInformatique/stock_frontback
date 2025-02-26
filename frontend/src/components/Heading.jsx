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
const Heading = ({ headingLevel, title }) =>
{
    const Tag = `h${headingLevel}`;

    return (
        <Tag>
            {title}
        </Tag>
    )
}

export default Heading;