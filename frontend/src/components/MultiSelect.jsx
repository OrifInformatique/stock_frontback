import React, { useEffect, useState } from "react";
import Label from "./Label";

/**
 * UI component to select one or more options, in a dropdown.
 *
 * @param {string} name Name of the input.
 *
 * @param {any} [defaultValue = []] Default value of the input. Null by default.
 *
 * @param {boolean} [disabled = false] Defines whether the input is disabled. False by default.
 *
 * @param {array} [options = []] Dropdown options.
 *
 * @returns {JSX.Element}
 *
 */
const MultiSelect = ({ name, defaultValues = [], disabled = false, options = [] }) =>
{
    const [selectedCount, setSelectedCount] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    const toggleMultiSelect = () =>
    {
        setIsOpen((prev) => !prev);
    }

    const handleSelectedCount = () =>
    {
        setSelectedCount(document.querySelectorAll(`#${name}-multiselect input[type=checkbox]:checked`).length);
    }

    useEffect(() => handleSelectedCount)

    return (
        <div className="relative">
            <div
                className={`${disabled ? "bg-stone-300 cursor-not-allowed pointer-events-none" : "bg-background"} rounded-md w-fit min-w-40 px-4 py-2 text-center select-none`}
                onClick={toggleMultiSelect}
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
                className={`${!isOpen && "!hidden"} block absolute border border-primary w-fit min-w-40 py-2 space-y-2 rounded-md z-1 bg-white`}
                onClick={(e) => e.stopPropagation()}
                onChange={handleSelectedCount}
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
                            defaultChecked={defaultValues.includes(option)}
                            className="rounded-sm hover:cursor-pointer"
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