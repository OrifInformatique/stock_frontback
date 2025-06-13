import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import clsx from "clsx";

import { getAllLoanStates } from "../services/api/loan_states"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleInfo,
    faClockRotateLeft,
    faPen,
    faTrash
} from "@fortawesome/free-solid-svg-icons";

import HTMLLink from "../ui/HTMLLink";
import Tag from "../ui/Tag";
import MeatballsMenu from "../ui/MeatballsMenu";

import {
    setConditionTagColor,
    setLoanTagColor,
    setWarrantyTagColor
} from "../utils/tagColors";
import { notDevelopedFeature } from "../utils/devUtils";

/**
 * Displays the details of an item.
 *
 * @returns {JSX.Element}
 *
 */
const ItemDetailedCard = ({
    id = null,
    item = null,
    isHighlighted = false,
    editExemplarFunction = null
}) =>
{
    if(!editExemplarFunction)
    {
        console.error("No function to edit an exemplar provided.");
        return;
    }

    const { t } = useTranslation(["item", "misc"]);

    const [showExtraInfos, setShowExtraInfos] = useState(false);
    const [loanStates, setLoanStates] = useState([]);

    /**
     * Fetches all loan states, to determine the correct loan to display on each exemplar.
     */
    useEffect(() =>
    {
        const fetchLoanStates = async () =>
        {
            setLoanStates(await getAllLoanStates());
        }
        fetchLoanStates();
    }, [])

    return (
        <div
            id={id}
            className={clsx(
                "w-80 lg:w-[450px] p-4 rounded-md",
                isHighlighted ? "bg-amber-300" : "bg-background"
            )}
        >
            <div className="flex justify-end">
                <MeatballsMenu actions={[
                    {
                        isLink: true,
                        label: t("event_history", { ns: "item" }),
                        icon: faClockRotateLeft,
                        action: `${isHighlighted ? "" : item.id+"/"}event-history`
                    },
                    {
                        isLink: false,
                        label: t("edit_exemplar", { ns: "item" }),
                        icon: faPen,
                        action: () => editExemplarFunction(item)
                    },
                    {
                        isLink: false,
                        label: t("delete_exemplar", { ns: "item" }),
                        icon: faTrash,
                        action: () => notDevelopedFeature()
                    }
                ]}/>
            </div>
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
                    {item.loan_state !== loanStates[0]?.name
                        ? `${t("loaned_at", {ns: "misc" })} ${item.item_localization}`
                        : `${t("in", { ns: "misc" })} ${item.stocking_place}`
                    }
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

                    <span>{t("other_infos", { ns: "misc" })}</span>
                </p>

                <div
                    className={clsx(
                        "absolute w-5/6 max-w-72 lg:max-w-max bg-white border-2 border-black px-4 py-2 rounded-md z-50",
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

            <div className="flex flex-1 flex-col sm:flex-row justify-center gap-2 mt-4">
                {item.loan_state !== loanStates[0]?.name ? (
                    <HTMLLink
                        to={"/"}
                        styleAsButton={true}
                        className={"basis-1/2"}
                    >
                        {t("return_loan", { ns: "item" })}
                    </HTMLLink>
                ) : (
                    <HTMLLink
                        to={"/"}
                        styleAsButton={true}
                        className={"basis-1/2"}
                    >
                        {t("add_loan", { ns: "item" })}
                    </HTMLLink>
                )}

                <HTMLLink
                    to={"/"}
                    styleAsButton={true}
                    className={"basis-1/2"}
                >
                    {t("add_control", { ns: "item" })}
                </HTMLLink>
            </div>
        </div>
    )
}

export default ItemDetailedCard;
