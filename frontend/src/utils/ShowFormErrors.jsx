import React from "react";

/**
 * Outputs the errors messages below the fields.
 *
 * @param {string[]} errors Errors of the field.
 *
 * @returns {JSX.Element|null}
 *
 */
const ShowFormErrors = ({ errors }) =>
{
    if(!errors || errors.length === 0) return null;

    return (
        <>
            {errors.map((error, index) => (
                <p
                    key={index}
                    className="w-max-full text-red-500 break-all"
                >
                    {error}
                </p>
            ))}
        </>
    )
}

export default ShowFormErrors;