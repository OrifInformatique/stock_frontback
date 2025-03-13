import React from "react";

/**
 * UI component to display images.
 *
 * @param {string} src Source of the image.
 *
 * @param {string} alt Alternative text of the image.
 *
 * @param {number} size The desired image size, in pixels.
 *
 * @returns {JSX.Elements}
 *
 */
const Image = ({ src, alt, size }) =>
{
    return (
        <img
            src={`/images/${src}`}
            alt={alt}
            className="rounded-md h-auto"
            style={{ width: `${size}px`}}
        />
    )
}

export default Image;