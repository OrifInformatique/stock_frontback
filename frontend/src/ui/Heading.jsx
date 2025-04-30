import React from "react";

/**
 * UI component to display different headings.
 *
 * @param {number} [headingLevel=1] Level of the heading, from 1 to 6.
 *
 * @param {string} title Text of the heading. Required.
 *
 * @returns {JSX.Element}
 *
 */
const Heading = ({
    headingLevel,
    title
}) =>
{
    if(!headingLevel)
    {
        console.error("Heading must have a headingLevel.");
        return;
    }

    else if(headingLevel < 1 || headingLevel > 6)
    {
        console.error("Heading headingLevel is not between 1 and 6 (both included).", headingLevel);
        return;
    }

    if(!title)
    {
        console.error("Heading must have a title.", title);
        return;
    }

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