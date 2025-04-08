import React from "react";
import { useTranslation } from "react-i18next";

import Button from "../ui/Button";
import Heading from "../ui/Heading";
import InputDate from "../ui/InputDate";
import InputNumber from "../ui/InputNumber";
import InputText from "../ui/InputText";
import Label from "../ui/Label";
import SingleSelect from "../ui/SingleSelect";
import Textarea from "../ui/Textarea";

/**
 * Displays the form to add or edit a item.
 *
 * @returns {JSX.Element}
 *
 */
const ItemForm = ({
    item = "",
    startCancelButton = false,
    endCancelButton = false,
    submitButton = false,
    cancelButtonOnClickFunction = null
}) =>
{
    const { t } = useTranslation(["buttons", "item", "titles"]);

    /**
     * Generates a inventory number for the item being created.
     *
     */
    const generateInventoryNumber = () =>
    {

    }

    return (
        <div className="w-full my-4 space-y-2 p-4">
            {startCancelButton &&
                <Button
                    label={t("cancel", { ns: "buttons" })}
                    onClickFunction={cancelButtonOnClickFunction}
                    className={"block w-fit mx-auto"}
                />
            }

            <div className="sm:flex sm:gap-8 sm:w-fit sm:mx-auto">
                <div>
                    {/* Inventory number fieldset */}
                    <fieldset>
                        <legend>
                            <Heading
                                headingLevel={3}
                                title={t("inventory_number", { ns: "item" })}
                            />
                        </legend>

                        <div className="flex">
                            <div className="basis-3/4">
                                <Label
                                    forInput={"prefix"}
                                    label={t("prefix", { ns: "item" })}
                                />

                                <InputText
                                    name={"prefix"}
                                    defaultValue={item?.inventory_prefix ?? ""}
                                />
                            </div>

                            <p className="text-5xl self-end">
                                .
                            </p>

                            <div className="basis-1/4">
                                <Label
                                    forInput={"identifier"}
                                    label={t("identifier", { ns: "item"})}
                                />

                                <InputNumber
                                    name={"identifier"}
                                    defaultValue={item?.id ?? ""}
                                    readonly={true}
                                />
                            </div>
                        </div>

                        <Button
                            label={t("generate_inventory_number", { ns: "buttons" })}
                            className={"mt-2"}
                        />
                    </fieldset>

                    {/* Exemplar details fieldset */}
                    <fieldset>
                        <legend>
                            <Heading
                                headingLevel={3}
                                title={t("exemplar_details", { ns: "titles" })}
                            />
                        </legend>

                        <Label
                            forInput={"serial-number"}
                            label={t("serial_number", { ns: "item"})}
                        />

                        <InputText
                            name={"serial-number"}
                            defaultValue={item?.serial_number ?? ""}
                        />

                        <Label
                            forInput={"remarks"}
                            label={t("remarks", { ns: "item"})}
                        />

                        <Textarea
                            name={"remarks"}
                            defaultValue={item?.remarks ?? ""}
                            rows={5}
                        />

                        <Label
                            forInput={"item-condition"}
                            label={t("exemplar_condition", { ns: "item"})}
                        />

                        <SingleSelect
                            name={"item-condition"}
                            selectedDefaultValue={item?.item_condition ?? ""}
                        />

                        <Label
                            forInput={"stocking-place"}
                            label={t("stocking_place", { ns: "item"})}
                        />

                        <SingleSelect
                            name={"stocking-place"}
                            selectedDefaultValue={item?.stocking_place ?? ""}
                        />
                    </fieldset>
                </div>

                <div>
                    {/* Buying details fieldset */}
                    <fieldset>
                        <legend>
                            <Heading
                                headingLevel={3}
                                title={t("purchase_details", { ns: "titles" })}
                            />
                        </legend>

                        <div className="flex justify-between gap-4">
                            <div className="basis-1/2">
                                <Label
                                    forInput={"buying-price"}
                                    label={t("buying_price", { ns: "item"})}
                                />

                                <div className="flex gap-2">
                                    <InputNumber
                                        name={"buying-price"}
                                        defaultValue={item?.buying_price ?? ""}
                                    />

                                    <p className="self-center">
                                        CHF
                                    </p>
                                </div>
                            </div>

                            <div className="basis-1/2">
                                <Label
                                    forInput={"buying-date"}
                                    label={t("buying_date", { ns: "item"})}
                                />

                                <InputDate
                                    name={"buying-date"}
                                    defaultValue={item?.buying_date ?? ""}
                                />
                            </div>
                        </div>

                        <Label
                            forInput={"warranty-duration"}
                            label={t("warranty_duration", { ns: "item"})}
                        />

                        <div className="flex gap-2 w-1/2">
                            <InputNumber
                                name={"warranty-duration"}
                                defaultValue={item?.warranty_duration ?? ""}
                            />

                            <p className="self-center">
                                {t("months", { ns: "misc" })}
                            </p>
                        </div>
                    </fieldset>

                    {/* Supplier details fieldset */}
                    <fieldset>
                        <legend>
                            <Heading
                                headingLevel={3}
                                title={t("supplier_details", { ns: "titles" })}
                            />
                        </legend>

                        <Label
                            forInput={"supplier"}
                            label={t("supplier", { ns: "item"})}
                        />

                        <SingleSelect
                            name={"supplier"}
                            defaultValue={item?.supplier ?? ""}
                        />

                        <Label
                            forInput={"supplier-ref"}
                            label={t("supplier_ref", { ns: "item"})}
                        />

                        <InputText
                            name={"supplier-ref"}
                            defaultValue={item?.supplier_ref ?? ""}
                        />
                    </fieldset>

                    {(endCancelButton || submitButton) &&
                        <div className="flex gap-2 mt-4">
                            {endCancelButton &&
                                <Button
                                    label={t("cancel", { ns: "buttons" })}
                                    onClickFunction={cancelButtonOnClickFunction}
                                />
                            }

                            {submitButton &&
                                <Button
                                    type={"submit"}
                                    label={t("save", { ns: "buttons" })}
                                />
                            }
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default ItemForm;