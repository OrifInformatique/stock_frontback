import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";

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
    const [insertImagePlaceholder, setInsertImagePlaceholder] = useState(false)

    return (
        <>
            {insertImagePlaceholder ? (
                <div
                    className={`flex flex-wrap place-content-center bg-gray-400 rounded-md`}
                    style={{ width: `${size}px`, height: `${size}px`}}>
                    <FontAwesomeIcon icon={faEyeSlash} size={"5x"}/>
                </div>
            ) : (
                <img
                    src={`/images/${src}`}
                    alt={alt}
                    className={`h-auto rounded-md`}
                    style={{ width: `${size}px`}}
                    onError={setInsertImagePlaceholder(true)}
                />
            )}
        </>
    )
}

export default Image;