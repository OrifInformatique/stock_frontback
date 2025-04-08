import React from "react";

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
    options,
    selectedValue,
    onChangeFunction
}) =>
{
    return (
        <div className="flex h-full justify-stretch items-stretch rounded-full divide-x-2 border-black">
            {options.map(option => {

                const isSelected = selectedValue === option;

                return (
                    <div
                        key={option}
                        className={`flex flex-1 justify-center align-center bg-background ${isSelected && "bg-blue text-white"} first:rounded-l-full last:rounded-r-full px-2 py-1 transition-colors hover:cursor-pointer text-center`}
                        onClick={() => onChangeFunction(option)}
                    >
                        <input
                            id={option}
                            name={name}
                            type="radio"
                            value={option}
                            checked={isSelected}
                            onChange={() => onChangeFunction(option)}
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
    )
}

export default SegmentedControl;