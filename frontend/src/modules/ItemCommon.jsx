import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Heading from "../ui/Heading";
import Image from "../ui/Image";
import MeatballsMenu from "../ui/MeatballsMenu";
import Tag from "../ui/Tag";
import HTMLLink from "../ui/HTMLLink";

import "../style.css"

import { setConditionTagColor, setLoanTagColor } from "../utils/tagColors";
import { notDevelopedFeature } from "../utils/devUtils";

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
        <div className="flex flex-col gap-2 w-60 h-80 p-2 bg-background rounded-md break-words text-center appear transition duration-100 hover:scale-105">
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
                        action: () => notDevelopedFeature()
                    },
                ]}/>
            </div>
            
            <HTMLLink
                to={`/objects/${itemCommon.id}/exemplars`}
                color={"transparent"}
                className={"mx-auto w-55"}
            >
                <Image
                    src={itemCommon.image_url}
                    alt={itemCommon.name}
                    size={285}
                />
            </HTMLLink>
            
            <div className="flex flex-wrap place-content-center min-h-10">
                <HTMLLink
                    to={`/objects/${itemCommon.id}/exemplars`}
                    color={"transparent"}
                >
                    <Heading
                        className="!text-[20px]"
                        headingLevel={2}
                        title={itemCommon.name}
                    />
                </HTMLLink>
            </div>

        </div>
    )
}

export default ItemCommon;