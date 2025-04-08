import React from "react";

/**
 * UI component to show a loading animation, when waiting for promises to resolve.
 *
 * @param {string} [text = "Chargement..."] Text to display. "Chargement..." by default.
 *
 * @returns {JSX.Element}
 *
 */
const Loading = ({
    text = "Chargement..."
}) =>
{
    return (
        <div className="m-auto p-12 text-center">
            {text}
        </div>
    )
}

export default Loading;