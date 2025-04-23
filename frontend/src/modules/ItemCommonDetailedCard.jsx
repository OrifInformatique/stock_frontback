import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

import ItemCommonForm from "../modules/ItemCommonForm";

import Image from "../ui/Image";
import Button from "../ui/Button";
import Tag from "../ui/Tag";

/**
 * Displays the details of an item common.
 *
 * @returns {JSX.Element}
 *
 */
const ItemCommonDetailedCard = ({ itemCommon }) =>
{
    const { t } = useTranslation(["item", "misc"]);

    const [isUpdated, setIsUpdated] = useState(false);
    const [objectFormData, setObjectFormData] = useState({})

    const handleObjectEditFormSubmit = (event) =>
        {
            event.preventDefault();

            setObjectFormData(() =>
            {
                const formData = Object.fromEntries(new FormData(event.target).entries());
                console.log(formData);

                /*try
                {
                    new XMLHttpRequest()
                        .open("POST", `${process.env.BACKEND_URL}/objects/add`)
                        .setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
                        .send(formData);
                }

                catch(error)
                {
                    console.error("Error while editing a object: ", error)
                }*/

                return formData;
            })

            setIsUpdated(false);
        }

    return (
        <section>
            {!isUpdated ? (
                <div className="flex flex-col sm:flex-row justify-center w-min sm:w-fit gap-4 rounded-md mx-auto p-4 bg-background">
                    <div className="flex sm:flex-col justify-end sm:justify-start sm:order-last gap-2 w-[275px] sm:w-fit">
                        <Button
                            icon={faPen}
                            title={t("edit_object", { ns: "item" })}
                            onClickFunction={() => setIsUpdated((prev) => !prev)}
                            className={"!rounded-md"}
                        />

                        <Button
                            icon={faTrash}
                            title={t("delete_object", { ns: "item" })}
                            onClickFunction={() => alert("button cliked!")}
                            className={"!rounded-md"}
                        />
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
                                text={itemCommon.group}
                                color={"bg-gray-500"}
                            />
                        </p>


                        <p>
                            {t("object_type")}<br/>

                            <Tag
                                text={itemCommon.item_tag}
                                color={"bg-gray-500"}
                            />
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