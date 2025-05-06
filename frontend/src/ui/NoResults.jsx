import React from "react";

/**
 * UI component to display that there are no results or nothing to see.
 *
 * @param {string} [text = "Aucun résultat !"] Text to display. "Aucun résultat !" by default.
 *
 * @returns {JSX.Element}
 *
 */
const NoResults = ({ text = "Aucun résultat !" }) =>
{
    return (
        <div className="m-auto p-12 text-center">
            {text}
        </div>
    )
}

export default NoResults;