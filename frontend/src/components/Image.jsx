import React from "react";

/**
 * UI component to display images.
 *
 * @param {string} src Source of the image.
 *
 * @param {string} alt Alternative text of the image.
 *
 * @returns {JSX.Elements}
 *
 */
const Image = ({ src, alt }) =>
{
    return (
        <img
            src={src}
            alt={alt}
        />
    )
}

export default Image;