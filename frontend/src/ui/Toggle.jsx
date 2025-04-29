import React, { useState } from "react";

import clsx from "clsx";

import ShowFormErrors from "../utils/ShowFormErrors";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

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
    defaultChecked = null,
    checked = null,
    offIcon = faXmark,
    onIcon = faCheck,
    onClickFunction = null,
    errors = [],
    className = null
}) =>
{
    const [isChecked, setIsChecked] = useState(checked ?? defaultChecked ?? false);

    const handleToggle = () =>
    {
        setIsChecked(prev => !prev);
        return onClickFunction(prev => !prev)
    }

    return (
        <>
            <div className="flex content-center gap-2">
                <button
                    id={name}
                    name={name}
                    type="button"
                    role="switch"
                    aria-checked={isChecked}
                    onClick={handleToggle}
                    className={clsx(
                        "size-8 bg-gray-500 rounded-md",
                        errors.length > 0 && "border-2 border-solid border-red-500",
                        className
                    )}
                >
                    <FontAwesomeIcon icon={checked ? onIcon : offIcon} size="lg"/>
                </button>

                <Label
                    forInput={name}
                    label={label}
                    inline={true}
                />
            </div>

            <ShowFormErrors errors={errors} />
        </>
    );
};

export default Toggle;