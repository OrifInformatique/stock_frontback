import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

import ItemCommonForm from "../modules/ItemCommonForm";

import Image from "../ui/Image";
import Button from "../ui/Button";
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
    updateItemCommon = false
}) =>
{
    // FIX : Multiselect not displaying the correct selected count when editing an object from the Home page.

    const { t } = useTranslation(["item", "misc"]);

    const [isUpdated, setIsUpdated] = useState(updateItemCommon);

    const handleObjectEditFormSubmit = (event) =>
    {
        event.preventDefault();

        const formData = Object.fromEntries(new FormData(event.target).entries());
        console.log(formData);

        // ============================================== //
        // Future POST request to backend will go here... //
        // ============================================== //

        setIsUpdated(false);
    }

    return (
        <section>
            {!isUpdated ? (
                <div className="flex flex-col sm:flex-row justify-center w-min sm:w-fit gap-4 rounded-md mx-auto p-4 bg-background">
                    <div className="flex justify-end sm:justify-start sm:order-last w-[275px] sm:w-fit">
                        <MeatballsMenu actions={[
                            {
                                isLink: false,
                                label: t("edit_object", { ns: "item" }),
                                icon: faPen,
                                action: () => setIsUpdated((prev) => !prev)
                            },
                            {
                                isLink: false,
                                label: t("delete_object", { ns: "item" }),
                                icon: faTrash,
                                action: () => notDevelopedFeature()
                            },
                        ]}/>
                    </div>

                    <Image
                        src={itemCommon.image_url}
                        alt={itemCommon.name}
                        size={275}
                    />

                    <div className="flex flex-col gap-2 sm:gap-4 max-w-96">
                        <p className="text-2xl">
                            {itemCommon.name}
                        </p>

                        <p className="mr-6">
                            {itemCommon.description ??
                                <i>
                                    {t("no_description", { ns: "misc" })}
                                </i>
                            }
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

                    </div>

                </div>
            ) : (
                <form onSubmit={handleObjectEditFormSubmit}>
                    <ItemCommonForm
                        itemCommon={itemCommon}
                        endCancelButton={true}
                        submitButton={true}
                        cancelButtonOnClickFunction={() => setIsUpdated((prev) => !prev)}
                    />
                </form>
            )}
        </section>
    )
}

export default ItemCommonDetailedCard;