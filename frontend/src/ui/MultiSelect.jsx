import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import clsx from "clsx";

import ShowFormErrors from "../utils/ShowFormErrors";

import Label from "./Label";

/**
 * UI component to select one or more options, in a dropdown.
 *
 * @returns {JSX.Element}
 *
 */
const MultiSelect = ({
    name,
    options = [],
    defaultValues = [],
    selectedValues = [],
    onChangeFunction = null,
    disabled = false,
    errors = [],
    className = null
}) =>
{
    const { t } = useTranslation("misc");

    const [selectedCount, setSelectedCount] = useState(0);
    const [selectedOptions, setSelectedOptions] = useState(defaultValues)
    const [isOpen, setIsOpen] = useState(false);

    const isDisabled = disabled || options.length < 1;

    const handleSelectedOptions = (value) =>
    {
        if(onChangeFunction)
            onChangeFunction((prev) =>
                prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
            );

        setSelectedOptions((prev) =>
            prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
        );
    };

    useEffect(() => setSelectedCount(selectedOptions.length), [selectedOptions]);

    return (
        <>
            <div className="relative">
                <div
                    onClick={() => { if(!isDisabled) setIsOpen((prev) => !prev) }}
                    className={clsx(
                        "rounded-md w-full h-fit px-4 py-2 border border-gray-500 text-center select-none hover:cursor-pointer",
                        isDisabled ? "bg-stone-300 cursor-not-allowed" : "bg-background",
                        errors.length > 0 && "border-2 border-solid border-red-500",
                        className
                    )}
                >
                    {selectedCount > 0 ? (
                        <p className={clsx(
                            isDisabled
                                ? "hover:cursor-not-allowed"
                                : "hover:cursor-pointer")
                        }>
                            {`${selectedCount} ${selectedCount > 1
                                ? t("selected_plural")
                                : t("selected")
                            }`}
                        </p>
                    ) : (
                        <p className={clsx(
                            isDisabled
                                ? "hover:cursor-not-allowed"
                                : "hover:cursor-pointer")
                        }>
                            {t("none_selected")}
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
                                {...(onChangeFunction !== null
                                    ? { checked: selectedValues.includes(option) }
                                    : { defaultChecked: defaultValues.includes(option) })
                                }
                                onChange={() => handleSelectedOptions(option)}
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

            <ShowFormErrors errors={errors} />
        </>
    )
}

export default MultiSelect;