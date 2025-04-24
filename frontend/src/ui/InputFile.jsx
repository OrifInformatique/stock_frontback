import React from "react";

import clsx from "clsx";

import ShowFormErrors from "../utils/ShowFormErrors";

/**
 * UI component to display a image upload input.
 *
 * @returns {JSX.Element}
 *
 */
const InputFile = ({
    name,
    accept = [],
    errors = []
}) =>
{
    return (
        <>
            <input
                type="file"
                id={name}
                name={name}
                accept={accept.length > 0 ? accept.join(",") : "any"}
                className={clsx(errors.length > 0 && "border-2 border-solid border-red-500")}
            />

            <ShowFormErrors errors={errors} />
        </>
    )
}

export default InputFile;