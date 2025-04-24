import React, { useState } from "react";

import clsx from "clsx";

import ShowFormErrors from "../utils/ShowFormErrors";

import Label from "./Label";

/**
 * UI component to show a segmented control to choose between options.
 *
 * @param {string} name Name of the segmented control field.
 *
 * @param {string[]} options Options to choose from.
 *
 * @param {string} selectedValue Selected value.
 *
 * @param {Function} onChangeFunction Function to call on onChange (and onClick) event.
 *
 * @returns {JSX.Element}
 *
 */
const SegmentedControl = ({
    name,
    options = [],
    defaultValue = null,
    selectedValue = null,
    onChangeFunction = null,
    errors = [],
    className = null
}) =>
{
    // TODO : Add the possibility to disable this component.

    const [selectedElement, setSelectedElement] = useState(selectedValue ?? defaultValue ?? options[0])

    const handleSelection = (option) =>
    {
        setSelectedElement(option);

        return onChangeFunction(option)
    }

    return (
        <>
            <div className={clsx(
                "flex h-full justify-stretch items-stretch rounded-full divide-x-2 border-black",
                errors.length > 0 && "border-2 border-solid border-red-500"
                )}
            >
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