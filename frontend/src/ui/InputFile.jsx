import React, { useState, useEffect } from "react";

/**
 * UI component to display a image upload input.
 *
 * @returns {JSX.Element}
 *
 */
const InputFile = ({
    name,
    accept = []
}) =>
{
    return (
        <input
            type="file"
            id={name}
            name={name}
            accept={accept.length > 0 ? accept.join(",") : "any"}
        />
    )
}

export default InputFile;