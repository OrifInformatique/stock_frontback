import React, { useState } from "react";

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
    const [isChecked, setIsChecked] = useState(checked);

    const handleToggle = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div className="flex items-center gap-2">
            {beforeLabelName &&
                <Label
                    forInput={name}
                    label={beforeLabelName}
                />}

            <button
                type="button"
                role="switch"
                aria-checked={isChecked}
                onClick={handleToggle}
                className={`relative w-12 h-6 rounded-full duration-300 bg-gray-300`}
            >
                <span className={`absolute top-1 left-1 w-4 h-4 bg-black rounded-full shadow-md transition-transform duration-300
                    ${isChecked ? "translate-x-6" : "translate-x-0"}`} />
            </button>

            <input type="hidden" name={name} value={isChecked} />

            {afterLabelName && <Label forInput={name} label={afterLabelName} />}
        </div>
    );
};

export default Toggle;