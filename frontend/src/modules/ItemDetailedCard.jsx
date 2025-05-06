import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import clsx from "clsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleInfo,
    faClockRotateLeft,
    faPen,
    faTrash
} from "@fortawesome/free-solid-svg-icons";

import {
    setConditionTagColor,
    setLoanTagColor,
    setWarrantyTagColor
} from "../utils/tagColors";

import Button from "../ui/Button";
import HTMLLink from "../ui/HTMLLink";
import Tag from "../ui/Tag";

/**
 * Displays the details of an item.
 *
 * @returns {JSX.Element}
 *
 */
const ItemDetailedCard = ({
    item = null,
    isHighlighted = false,
    editExemplarFunction = null
}) =>
{
    const { t } = useTranslation(["item", "misc"]);

    const [showExtraInfos, setShowExtraInfos] = useState(false);

    if(!editExemplarFunction)
    {
        console.error("No function to edit an exemplar provided.");
        return;
    }

    return (
        <div className={clsx(
            "flex flex-col lg:flex-row justify-between gap-8 w-80 lg:w-[450px] p-4 rounded-md",
            isHighlighted ? "bg-amber-300" : "bg-background"
        )}>
            <div className="space-y-2">
                <p className="text-2xl">
                    {`${item.inventory_prefix}.${item.id}`}
                </p>

                <p className="flex flex-wrap gap-2">
                    <Tag
                        text={item.item_condition}
                        color={setConditionTagColor(item.item_condition)}
                    />

                    <Tag
                        text={item.loan_state}
                        color={setLoanTagColor(item.loan_state)}
                    />
                </p>

                <p>
                    {`${t("in", { ns: "misc" })} ${item.stocking_place}`}
                </p>

                {item.remarks && (
                    <p>{item.remarks}</p>
                )}

                <p
                    onClick={() => setShowExtraInfos((prev) => !prev)}
                    className="space-x-1 hover:cursor-pointer select-none"
                >
                    <FontAwesomeIcon
                        icon={faCircleInfo}
                        size="lg"
                    />

                    <span>{t("additional_infos", { ns: "misc" })}</span>
                </p>

                <div
                    className={clsx(
                        "absolute w-5/6 max-w-72 lg:max-w-max bg-white border-2 border-black px-4 py-2 rounded-md",
                        !showExtraInfos && "hidden"
                    )}
                >
                    <p>{`${t("serial_number", { ns: "item" })} : ${item.serial_number}`}</p>

                    <p>{`${t("supplier", { ns: "item" })} : ${item.supplier}`}</p>

                    <p>{`${t("supplier_ref", { ns: "item" })} : ${item.supplier_ref}`}</p>

                    <p>{`${t("bought_the", { ns: "misc" })} ${new Date(item.buying_date).toLocaleDateString("fr-CH")}, ${t("for_price", { ns: "misc" })} ${item.buying_price} CHF`}</p>

                    <p>{`${t("warranty_duration", { ns: "item" })} : ${item.warranty_duration} ${t("months", { ns: "misc" })}`}</p>

                    <Tag
                        text={item.warranty_state}
                        color={setWarrantyTagColor(item.warranty_state)}
                    />
                </div>
            </div>

            <div className="space-y-2">
                <div className="flex gap-4">
                    <HTMLLink
                        to={`${item.id}/event-history`}
                        title={t("event_history", { ns: "item" })}
                        styleAsButton={true}
                        className={"inline-block basis-1/3 flex flex-wrap place-content-center size-10 !p-0"}
                    >
                        <FontAwesomeIcon icon={faClockRotateLeft} />
                    </HTMLLink>

                    <Button
                        icon={faPen}
                        title={t("edit_exemplar", { ns: "item" })}
                        onClickFunction={() => editExemplarFunction(item)}
                        className={"basis-1/3"}
                    />

                    <Button
                        icon={faTrash}
                        title={t("delete_exemplar", { ns: "item" })}
                        className={"basis-1/3"}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <HTMLLink
                        to={"/"}
                        styleAsButton={true}
                    >
                        {t("add_loan", { ns: "item" })}
                    </HTMLLink>

                    <HTMLLink
                        to={"/"}
                        styleAsButton={true}
                        className={"min-w-max"}
                    >
                        {t("add_control", { ns: "item" })}
                    </HTMLLink>
                </div>
            </div>
        </div>
    )
}

export default ItemDetailedCard;