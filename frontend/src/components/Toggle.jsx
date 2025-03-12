import React from "react";

import Label from "./Label";

/**
 * UI component to display checkbox input, designed as a toggle.
 *
 * @param {string} name Name of the toggle.
 *
 * @param {string} [beforeLabelName = null] Name of the label placed before the toggle. Null by default.
 *
 * @param {string} [afterLabelName = null] Name of the label placed after the toggle. Null by default.
 *
 * @param {boolean} [checked = false] Defines whether the toggle is checked. False by default.
 *
 * @returns {JSX.Element}
 *
 */
const Toggle = ({ name, beforeLabelName = null, afterLabelName = null, checked = false }) =>
{
    return (
        <>
            {beforeLabelName !== null &&
                <Label
                    forInput={name}
                    label={beforeLabelName}
                />
            }

            <input
                name={name}
                type="checkbox"
                checked={checked}
                className="toggle"
            />

            {afterLabelName !== null &&
                <Label
                    forInput={name}
                    label={afterLabelName}
                />
            }
        </>
    )
}

export default Toggle;