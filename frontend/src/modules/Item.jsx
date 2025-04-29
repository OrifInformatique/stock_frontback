import React from "react";

import { useTranslation } from "react-i18next";

import { setConditionTagColor, setLoanTagColor } from "../utils/tagColors";

import Heading from "../ui/Heading";
import Image from "../ui/Image";
import MeatballsMenu from "../ui/MeatballsMenu";
import Tag from "../ui/Tag";
import TextLink from "../ui/TextLink";
import { useNavigate } from "react-router-dom";

/**
 * Exemplary card, with minimal info.
 *
 * @param {array} item The data of the item.
 *
 * @returns {JSX.Element}
 *
 */
const Item = ({ item }) =>
{
    const { t } = useTranslation("item");
    const navigate = useNavigate()

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
                        action: () => navigate(`/objects/${item.item_common_id}/exemplars/${item.id}/edit`)
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

            <TextLink to={`/objects/${item.item_common_id}/exemplars/${item.id}`}>
                <Heading
                    headingLevel={3}
                    title={`${item.inventory_prefix}.${item.id}`}
                />
            </TextLink>

            <Tag
                text={item.item_condition}
                color={setConditionTagColor(item.item_condition)}
                className={"mx-auto"}
            />

            <Tag
                text={item.loan_state}
                color={setLoanTagColor(item.loan_state)}
                className={"mx-auto"}
            />
        </div>
    )
}

export default Item;