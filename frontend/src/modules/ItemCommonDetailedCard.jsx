import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import Image from "../ui/Image";
import MeatballsMenu from "../ui/MeatballsMenu";
import Tag from "../ui/Tag";

import { notDevelopedFeature } from "../utils/devUtils";

/**
 * Displays the details of an item common.
 *
 * @returns {JSX.Element}
 *
 */
const ItemCommonDetailedCard = ({
    itemCommon,
    updateItemCommon = false,
    setDisplayObjectForm = ()=>{},
}) =>
{
    const { t } = useTranslation(["item", "misc"]);

    return (
        <section>
                <div className="flex flex-col sm:flex-row justify-center w-200 h-180 gap-4 rounded-md mx-auto p-4 bg-background">
                    <div className="flex justify-end sm:justify-start sm:order-last w-[275px] sm:w-fit">
                        <MeatballsMenu actions={[
                            {
                                isLink: false,
                                label: t("edit_object", { ns: "item" }),
                                icon: "edit",
                                action: () => setDisplayObjectForm(true)
                            },
                            {
                                isLink: false,
                                label: t("delete_object", { ns: "item" }),
                                icon: "delete",
                                action: () => notDevelopedFeature()
                            },
                        ]}/>
                    </div>

                    <Image
                        src={itemCommon.image_url}
                        alt={itemCommon.name}
                        size={325}
                    />

                    <div className="flex flex-col gap-2 sm:gap-4 max-w-96">
                        <p className="text-2xl">
                            {itemCommon.name}
                        </p>

                        <p>
                            {t("group")}<br/>

                            <Tag
                                text={itemCommon.group ?? " "}
                                color={"bg-gray-500"}
                            />
                        </p>


                        <p>
                            {t("object_type")}<br/>

                            {itemCommon.item_tags?.map(tag =>
                                <Tag
                                    key={tag}
                                    text={tag}
                                    color={"bg-gray-500"}
                                />
                            )}
                        </p>

                        <p className="mr-6">
                            {itemCommon.description ??
                                <i>
                                    {t("no_description", { ns: "misc" })}
                                </i>
                            }
                        </p>

                    </div>

                </div>
        </section>
    )
}

export default ItemCommonDetailedCard;