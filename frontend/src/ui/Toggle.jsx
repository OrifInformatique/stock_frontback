import React, { useState } from "react";

import clsx from "clsx";

import ShowFormErrors from "../utils/ShowFormErrors";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

import { Label } from "@orif-informatique/react-components-library";

/**
 * UI component to display checkbox input, designed as a toggle.
 *
 *  @param {string} name Name of the file input. Required.
 *
 * @param {string} [label=null] Label that goes with the toggle. Null by default.
 *
 * @param {boolean} [checked=null] Value of the date field. Null by default. \
 * If provided, it means you want to control the input, and have to provide a function to update it (onClickFunction prop).
 *
 * @param {boolean} [defaultChecked=null] Default value of the input. Null by default. \
 * Only applies on uncontrolled inputs.
 *
 * @param {FontAwesomeIcon} [offIcon=faXMark] Icon (FontAwesome) displayed when the toggle is unchecked. faXMark by default.
 *
 * @param {FontAwesomeIcon} [onIcon=faCheck] Icon (FontAwesome) displayed when the toggle is unchecked. faCheck by default.
 *
 * @param {Function} [onClickFunction=null] Function to call when the toggle is clicked. Null by default.
 *
 * @param {string[]} [errors=[]] Invalid value errors for this field. Empty array by default.
 *
 * @param {string} [className=null] Additional and specific styles for the button. Null by default.
 *
 * @returns {JSX.Element}
 *
 */
const Toggle = ({
    name,
    label = null,
    checked = null,
    defaultChecked = null,
    offIcon = faXmark,
    onIcon = faCheck,
    onClickFunction = null,
    errors = [],
    className = null
}) =>
{
    if(!name)
    {
        console.error("Toggle must have a name");
        return;
    }

    const [isChecked, setIsChecked] = useState(checked ?? defaultChecked ?? false);

    /**
     * Updates the internal toggle and calls the onChangeFunction if exists.
     *
     * @param {string} option The selected option.
     *
     * @returns {void}
     *
     */
    const handleToggle = () =>
    {
        setIsChecked(prev => !prev);

        if(onClickFunction)
            onClickFunction(prev => !prev);
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