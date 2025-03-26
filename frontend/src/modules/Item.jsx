import React from "react";

import { useTranslation } from "react-i18next";

import Heading from "../ui/Heading";
import Image from "../ui/Image";
import MeatballsMenu from "../ui/MeatballsMenu";
import Tag from "../ui/Tag";

/**
 * Exemplary card.
 *
 * @param {array} item The data of the item.
 *
 * @returns {JSX.Element}
 *
 */
const Item = ({ item }) =>
{
    const { t } = useTranslation("item");

    return (
        <div className="flex flex-col gap-2 w-80 p-2 bg-background rounded-md break-words text-center">
            <div className="flex justify-end">
                <MeatballsMenu actions={[
                    {
                        label: t("add_loan", { ns: "item" }),
                        action: () => alert("button clikced")
                    },
                    {
                        label: t("edit_loan", { ns: "item" }),
                        action: () => alert("button clikced")
                    },
                    {
                        label: t("return_loan", { ns: "item" }),
                        action: () => alert("button clikced")
                    },
                    {
                        label: t("edit_exemplar", { ns: "item" }),
                        action: () => alert("button clikced")
                    },
                    {
                        label: t("delete_exemplar", { ns: "item" }),
                        action: () => alert("button clikced")
                    }
                ]}/>
            </div>

            <div className="mx-auto">
                <Image
                    src={item.image_url}
                    alt={item.name}
                    size={285}
                />
            </div>

            <Heading
                headingLevel={3}
                title={`${item.inventory_prefix}.${item.id}`}
            />

            <Tag
                text={item.item_condition}
                color={"blue-light"}
            />

            <Tag
                text={item.loan_state}
                color={"blue-light"}
            />
        </div>
    )
}

export default Item;