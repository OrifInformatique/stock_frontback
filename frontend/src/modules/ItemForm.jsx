import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import { getAllItemConditions } from "../services/api/item_conditions";
import { getAllStockingPlaces } from "../services/api/stocking_places";
import { getAllSuppliers } from "../services/api/suppliers";

import Heading from "../ui/Heading";
import { Button, Label, Textarea, InputText, InputNumber , InputDate, SingleSelect } from "@orif-informatique/react-components-library";
import { notDevelopedFeature } from "../utils/devUtils";

/**
 * Displays the form to add or edit a item.
 *
 * @returns {JSX.Element}
 *
 */
const ItemForm = ({
    item = null,
    startCancelButton = false,
    endCancelButton = false,
    submitButton = false,
    cancelButtonOnClickFunction = null
}) =>
{
    const { t } = useTranslation(["buttons", "item", "titles"]);

        const [itemConditions, setItemConditions] = useState([]);
        const [stockingPlaces, setStockingPlaces] = useState([]);
        const [suppliers, setSuppliers] = useState([]);

        /**
         * Fetch data from the API.
         */
        useEffect(() =>
        {
            const fetchData = async () =>
            {
                setItemConditions(await getAllItemConditions());
                setStockingPlaces(await getAllStockingPlaces());
                setSuppliers(await getAllSuppliers())
            }

            fetchData();
        }, []);

    /**
     * Generates a inventory number for the item being created.
     *
     */
    const generateInventoryNumber = () =>
    {
        notDevelopedFeature()
    }

    return (
        <div className="w-full my-4 space-y-2 p-4">
            {startCancelButton &&
                <Button
                    label={t("cancel", { ns: "buttons" })}
                    onClick={cancelButtonOnClickFunction}
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
                                    defaultValue={item?.inventory_prefix}
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
                                    defaultValue={item?.id}
                                    readonly={true}
                                />
                            </div>
                        </div>

                        <Button
                            label={t("generate_inventory_number", { ns: "buttons" })}
                            onClickFunction={generateInventoryNumber}
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
                            defaultValue={item?.serial_number}
                        />

                        <Label
                            forInput={"remarks"}
                            label={t("remarks", { ns: "item"})}
                        />

                        <Textarea
                            name={"remarks"}
                            defaultValue={item?.remarks}
                            rows={5}
                        />

                        {itemConditions.length > 0 && (
                            <>
                                <Label
                                    forInput={"item-condition"}
                                    label={t("exemplar_condition", { ns: "item"})}
                                />

                                <SingleSelect
                                    name={"item-condition"}
                                    options={itemConditions?.map(itemCondition => (
                                        {
                                            value: itemCondition.name,
                                            label: itemCondition.name
                                        }))
                                    }
                                    defaultValue={item?.item_condition}
                                />
                            </>
                        )}

                        {stockingPlaces.length > 0 && (
                            <>
                                <Label
                                    forInput={"stocking-place"}
                                    label={t("stocking_place", { ns: "item"})}
                                />

                                <SingleSelect
                                    name={"stocking-place"}
                                    options={stockingPlaces?.map(stockingPlace => (
                                        {
                                            value: stockingPlace.name,
                                            label: stockingPlace.name
                                        }))
                                    }
                                    defaultValue={item?.stocking_place}
                                />
                            </>
                        )}
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

                        <div className="flex flex-col justify-between gap-2">
                            <div>
                                <Label
                                    forInput={"buying-price"}
                                    label={t("buying_price", { ns: "item"})}
                                />

                                <InputNumber
                                    name={"buying-price"}
                                    defaultValue={item?.buying_price}
                                    unit={"CHF"}
                                />
                            </div>

                            <div>
                                <Label
                                    forInput={"buying-date"}
                                    label={t("buying_date", { ns: "item"})}
                                />

                                <InputDate
                                    name={"buying-date"}
                                    defaultValue={item?.buying_date}
                                />
                            </div>

                            <div>
                                <Label
                                    forInput={"warranty-duration"}
                                    label={t("warranty_duration", { ns: "item"})}
                                />

                                <InputNumber
                                    name={"warranty-duration"}
                                    defaultValue={item?.warranty_duration}
                                    unit={t("months", { ns: "misc" })}
                                />
                            </div>
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

                        {suppliers?.length > 0 && (
                            <SingleSelect
                                name="supplier"
                                options={suppliers.map(supplier => ({
                                    value: supplier.name,
                                    label: supplier.name
                                }))}
                                defaultValue={item?.supplier}
                            />
                        )}

                        <Label
                            forInput={"supplier-ref"}
                            label={t("supplier_ref", { ns: "item"})}
                        />

                        <InputText
                            name={"supplier-ref"}
                            defaultValue={item?.supplier_ref}
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