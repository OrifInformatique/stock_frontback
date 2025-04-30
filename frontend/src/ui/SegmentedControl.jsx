import React, { useState } from "react";

import clsx from "clsx";

import ShowFormErrors from "../utils/ShowFormErrors";

import Label from "./Label";

/**
 * UI component to show a segmented control to choose between options.
 *
 * @param {string} name Name of the file input. Required.
 *
 * @param {string[]} [options=[]] Options of the input. Empty array by default.
 *
 * @param {string} [selectedValues=null] Value of the field. Null by default. \
 * If provided, it means you want to control the input, and have to provide a function to update it (onChangeFunction prop).
 *
 * @param {string} [defaultValue=null] Default value of the input. Null by default. \
 * Only applies on uncontrolled inputs.
 *
 * @param {Function} [onChangeFunction=null] Function to call when the field is updated. Null by default.
 *
 * @param {string[]} [errors=[]] Invalid value errors for this field. Empty array by default.
 *
 * @param {string} [className=null] Additional and specific styles for the button. Null by default.
 *
 * @returns {JSX.Element}
 *
 */
const SegmentedControl = ({
    name,
    options = [],
    selectedValue = null,
    defaultValue = null,
    onChangeFunction = null,
    errors = [],
    className = null
}) =>
{
    if(!name)
    {
        console.error("SegmentedControl must have a name.");
        return;
    }

    // TODO : Add the possibility to disable this component.

    const [selectedElement, setSelectedElement] = useState(selectedValue ?? defaultValue ?? options[0])

    /**
     * Updates the internal selected element and calls the onChangeFunction if exists.
     *
     * @param {string} option The selected option.
     *
     * @returns {void}
     *
     */
    const handleSelection = (option) =>
    {
        setSelectedElement(option);

        if(onChangeFunction)
            onChangeFunction(option)
    }

    return (
        <>
            <div className={clsx(
                "flex h-full justify-stretch items-stretch rounded-full divide-x-2 border-black",
                errors.length > 0 && "border-2 border-solid border-red-500"
            )}>
                {options.map(option => {

                    const isSelected = selectedElement === option;

                    return (
                        <div
                            key={option}
                            onClick={() => handleSelection(option)}
                            className={clsx(
                                "flex flex-1 justify-center align-center bg-background first:rounded-l-full last:rounded-r-full px-2 py-1 transition-colors hover:cursor-pointer text-center",
                                isSelected && "bg-blue text-white",
                                className
                            )}
                        >
                            <input
                                id={option}
                                name={name}
                                type="radio"
                                {...selectedValue !== null
                                    ? { value: selectedValue }
                                    : { defaultValue: defaultValue }
                                }
                                checked={isSelected}
                                onChange={() => handleSelection(option)}
                                className="hidden"
                            />

                            <Label
                                forInput={option}
                                label={option}
                                inline={true}
                            />
                        </div>
                    )}
                )}
            </div>

            <ShowFormErrors errors={errors} />
        </>
    )
}

export default SegmentedControl;