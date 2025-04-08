import React, { useEffect, useState } from "react";
import Label from "./Label";

import clsx from "clsx";

/**
 * UI component to select one or more options, in a dropdown.
 *
 * @returns {JSX.Element}
 *
 */
const MultiSelect = ({
    name,
    options = [],
    selectedValues = [],
    onChangeFunction,
    disabled = false,
    className
}) =>
{
    const [selectedCount, setSelectedCount] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    const handleSelectedOptions = (value) =>
    {
        onChangeFunction((prev) =>
            prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
        );
    };

    useEffect(() => setSelectedCount(selectedValues.length), [selectedValues]);

    if(options.length < 1) disabled = true;

    return (
        <div className="relative">
            <div
                onClick={() => setIsOpen((prev) => !prev)}
                className={clsx(
                    "rounded-md w-full h-fit px-4 py-2 text-center select-none",
                    disabled ? "bg-stone-300 cursor-not-allowed" : "bg-background",
                    className
                )}
            >
                {selectedCount > 0 ? (
                    <p className="hover:cursor-pointer">
                        {selectedCount} sélectionné{selectedCount > 1 && "s"}
                    </p>
                ) : (
                    <p className="hover:cursor-pointer">
                        Aucun sélectionné
                    </p>
                )}
            </div>

            <div
                id={`${name}-multiselect`}
                className={`${!isOpen && "!hidden"} block absolute border border-blue min-w-max w-full py-2 space-y-2 rounded-md z-50 bg-white`}
                onClick={(e) => e.stopPropagation()}
            >
                {options.map((option, index) => (
                    <div
                        key={`${name}-${index}`}
                        className="space-x-2 w-full px-2 select-none"
                    >
                        <input
                            id={`${name}-${index}`}
                            name={`${name}-${index}`}
                            type="checkbox"
                            value={option}
                            checked={selectedValues.includes(option)}
                            className="rounded-sm hover:cursor-pointer"
                            onChange={() => handleSelectedOptions(option)}
                        />

                        <Label
                            forInput={`${name}-${index}`}
                            label={option}
                            inline={true}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MultiSelect;