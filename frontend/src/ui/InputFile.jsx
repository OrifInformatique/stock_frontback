import React from "react";

import clsx from "clsx";

import ShowFormErrors from "../utils/ShowFormErrors";

/**
 * UI component to display a file input.
 *
 * @param {string} name Name of the file input. Required.
 *
 * @param {string[]} [accept=[]] File types or extensions accepted in the input. Empty array by default. \
 * (This is not a solid validation. It just helps the user choosing the right files.)
 *
 * @param {string[]} [errors=[]] Invalid value errors for this field. Empty array by default.
 *
 * @param {string} [className=null] Additional and specific styles for the button. Null by default.
 *
 * @returns {JSX.Element}
 *
 */
const InputFile = ({
    name,
    accept = [],
    errors = [],
    className = null
}) =>
{
    if(!name)
    {
        console.error("InputFile must have a name.");
        return;
    }

    return (
        <>
            <input
                type="file"
                id={name}
                name={name}
                accept={accept.length > 0 ? accept.join(",") : "any"}
                className={clsx(
                    errors.length > 0 && "border-2 border-solid border-red-500",
                    className
                )}
            />

            <ShowFormErrors errors={errors} />
        </>
    )
}

export default InputFile;