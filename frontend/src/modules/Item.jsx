import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Heading from "../ui/Heading";
import HTMLLink from "../ui/HTMLLink";
import Image from "../ui/Image";
import MeatballsMenu from "../ui/MeatballsMenu";
import Tag from "../ui/Tag";

import { setConditionTagColor, setLoanTagColor } from "../utils/tagColors";
import { notDevelopedFeature } from "../utils/devUtils";

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
                        action: () => notDevelopedFeature()
                    },
                    {
                        label: t("edit_loan", { ns: "item" }),
                        action: () => notDevelopedFeature()
                    },
                    {
                        label: t("return_loan", { ns: "item" }),
                        action: () => notDevelopedFeature()
                    },
                    {
                        label: t("edit_exemplar", { ns: "item" }),
                        action: () => navigate(`/objects/${item.item_common_id}/exemplars/${item.id}/edit`)
                    },
                    {
                        label: t("delete_exemplar", { ns: "item" }),
                        action: () => notDevelopedFeature()
                    }
                ]}/>
            </div>

            <HTMLLink
                to={`/objects/${item.item_common_id}/exemplars/${item.id}`}
                color={"transparent"}
                className={"mx-auto"}
            >
                <Image
                    src={item.image_url}
                    alt={item.name}
                    size={285}
                />
            </HTMLLink>

            <HTMLLink
                to={`/objects/${item.item_common_id}/exemplars/${item.id}`}
                color={"transparent"}
            >
                <Heading
                    headingLevel={3}
                    title={`${item.inventory_prefix}.${item.id}`}
                    className={"!mb-0"}
                />

                <Heading
                    headingLevel={3}
                    title={item.name}
                    className={"!mt-0"}
                />
            </HTMLLink>

            <Tag
                text={item.item_condition}
                color={item.item_condition && setConditionTagColor(item.item_condition)}
                className={"mx-auto"}
            />

            <Tag
                text={item.loan_state}
                color={item.loan_state && setLoanTagColor(item.loan_state)}
                className={"mx-auto"}
            />
        </div>
    )
}

export default Item;