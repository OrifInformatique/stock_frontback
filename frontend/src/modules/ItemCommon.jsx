import React from "react";
import { useNavigate } from "react-router-dom";

import { useTranslation } from "react-i18next";

import { setConditionTagColor, setLoanTagColor } from "../utils/tagColors";

import Heading from "../ui/Heading";
import Image from "../ui/Image";
import HTMLLink from "../ui/HTMLLink";
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
    const navigate = useNavigate();

    return (
        <div className="flex flex-col gap-2 w-80 p-2 bg-background rounded-md break-words text-center">
            <div className="flex justify-end">
                <MeatballsMenu actions={[
                    {
                        label: t("add_exemplar", { ns: "item" }),
                        action: () => navigate(`/objects/${itemCommon.id}/exemplars/add`)
                    },
                    {
                        label: t("edit_object", { ns: "item" }),
                        action: () => navigate(`/objects/${itemCommon.id}/edit`)
                    },
                    {
                        label: t("delete_object", { ns: "item" }),
                        action: () => alert("button clikced")
                    },
                ]}/>
            </div>

            <HTMLLink
                to={`/objects/${itemCommon.id}/exemplars`}
                color={"transparent"}
                className={"mx-auto"}
            >
                <Image
                    src={itemCommon.image_url}
                    alt={itemCommon.name}
                    size={285}
                />
            </HTMLLink>

            <div className="flex flex-wrap place-content-center min-h-24">
                <HTMLLink
                    to={`/objects/${itemCommon.id}/exemplars`}
                    color={"transparent"}
                >
                    <Heading
                        headingLevel={2}
                        title={itemCommon.name}
                    />
                </HTMLLink>
            </div>

            <div className="flex flex-col gap-2 max-h-[280px] sm:max-h-[250px] overflow-y-auto">
                {itemCommon.items?.map(exemplar => (
                    <div
                        key={exemplar.id}
                        className="h-20 p-2 rounded-md bg-blue text-white">
                        <HTMLLink
                            to={`/objects/${itemCommon.id}/exemplars/${exemplar.id}`}
                            variant={"transparent"}
                            colorOnHover={false}
                            underlineOnHover={true}
                        >
                            <Heading
                                headingLevel={3}
                                title={`${exemplar.inventory_prefix}.${exemplar.id}`}
                                className={"!my-0"}
                            />
                        </HTMLLink>

                        <div className="flex justify-center gap-2">
                            <Tag
                                text={exemplar.item_condition}
                                color={setConditionTagColor(exemplar.item_condition)}
                            />

                            <Tag
                                text={exemplar.loan_state}
                                color={setLoanTagColor(exemplar.loan_state)}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ItemCommon;