import React from "react";

import { useTranslation } from "react-i18next";

import { setConditionTagColor, setLoanTagColor } from "../utils/tagColors";

import Heading from "../ui/Heading";
import Image from "../ui/Image";
import TextLink from "../ui/TextLink";
import MeatballsMenu from "../ui/MeatballsMenu";
import Tag from "../ui/Tag";

/**
 * Item common card, with minimal info.
 *
 * @returns {JSX.Element}
 *
 */
const ItemCommon = ({ itemCommon }) =>
{
    const { t } = useTranslation("item");

    return (
        <div className="flex flex-col gap-2 w-80 p-2 bg-background rounded-md break-words text-center">
            <div className="flex justify-end">
                <MeatballsMenu actions={[
                    {
                        label: t("add_exemplar", { ns: "item" }),
                        action: () => alert("button clikced")
                    },
                    {
                        label: t("edit_object", { ns: "item" }),
                        action: () => alert("button clikced")
                    },
                    {
                        label: t("delete_object", { ns: "item" }),
                        action: () => alert("button clikced")
                    },
                ]}/>
            </div>

            <div className="mx-auto">
                <Image
                    src={itemCommon.image_url}
                    alt={itemCommon.name}
                    size={285}
                />
            </div>

            <div className="flex flex-wrap place-content-center min-h-24">
                <TextLink to={`/objects/${itemCommon.id}/exemplars`}>
                    <Heading
                        headingLevel={2}
                        title={itemCommon.name}
                    />
                </TextLink>
            </div>

            <div className="flex flex-col gap-2 max-h-64 sm:max-h-60 overflow-y-auto">
                {itemCommon.items?.map(exemplar => (
                    <div
                        key={exemplar.id}
                        className="flex justify-between items-center h-20 p-2 rounded-md bg-blue text-white">
                        <Heading
                            headingLevel={3}
                            title={`${exemplar.inventory_prefix}.${exemplar.id}`}
                        />

                        <div className="flex flex-col justify-center gap-2">
                            <Tag
                                text={exemplar.item_condition}
                                color={setConditionTagColor(exemplar.item_condition)}
                                className={"mx-auto"}
                            />

                            <Tag
                                text={exemplar.loan_state}
                                color={setLoanTagColor(exemplar.loan_state)}
                                className={"mx-auto"}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ItemCommon;