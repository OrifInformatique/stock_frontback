import React, { useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Label from "./Label";

/**
 * UI component to display checkbox input, designed as a toggle.
 *
 * @returns {JSX.Element}
 *
 */
const Toggle = ({
    name,
    label = null,
    checked,
    offIcon,
    onIcon,
    onClickFunction
}) =>
{
    return (
        <div className="flex content-center gap-2">
            <button
                id={name}
                name={name}
                type="button"
                role="switch"
                aria-checked={checked}
                onClick={() => onClickFunction(prev => !prev)}
                className={`size-8 bg-gray-500 rounded-md`}
            >
                <FontAwesomeIcon icon={checked ? onIcon : offIcon} size="lg"/>
            </button>

            <Label
                forInput={name}
                label={label}
                inline={true}
            />
        </div>
    );
};

export default Toggle;