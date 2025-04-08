import React, { use, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useTranslation } from "react-i18next";

import { getItemCommon } from "../services/api/items";

import ItemCommonDetailedCard from "../modules/ItemCommonDetailedCard";
import ItemDetailedCard from "../modules/ItemDetailedCard";
import ItemForm from "../modules/ItemForm";

import Button from "../ui/Button";
import ButtonLink from "../ui/ButtonLink";
import Heading from "../ui/Heading";
import Loading from "../ui/Loading";

/**
 * Page where we display the details of an item common and its items.
 *
 * @returns {JSX.Element}
 *
 */
const ItemCommonDetails = () =>
{
    const { t } = useTranslation(["item", "misc", "titles"]);

    const { itemCommonId, itemId } = useParams();

    const [isLoading, setIsLoading] = useState(true);

    const [displayExemplarForm, setDisplayExemplarForm] = useState(false);
    const [exemplarFormData, setExemplarFormData] = useState({})

    const [itemCommon, setItemCommon] = useState({});

    useEffect(() => {
        const fetchItemCommonData = async () =>
        {
            const data = await getItemCommon(parseInt(itemCommonId));
            setItemCommon(data);
        };

        fetchItemCommonData();
        setIsLoading(false);
    }, [])

    const handleNewExemplarFormSubmit = (event) =>
    {
        event.preventDefault();

        setExemplarFormData(() =>
        {
            const formData = Object.fromEntries(new FormData(event.target).entries());
            console.log(formData);

            /*try
            {
                new XMLHttpRequest()
                    .open("POST", `${process.env.BACKEND_URL}/exemplars/add`)
                    .setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
                    .send(formData);
            }

            catch(error)
            {
                console.error("Error while creating a exemplar: ", error)
            }*/

            return formData;
        })

        setDisplayExemplarForm(false);
    }

    return (
        <div className="">
            <Heading
                headingLevel={1}
                title={t("item_common_details", { ns: "titles" })}
            />

            <ButtonLink
                to={"/"}
                variant={"blue"}
                className={"block w-fit mx-auto my-4"}
            >
                {t("back_to_list", { ns: "buttons" })}
            </ButtonLink>

            {isLoading ?
                <Loading />
            :
                <>
                    <ItemCommonDetailedCard itemCommon={itemCommon} />

                    {displayExemplarForm && (
                        <>
                            <Heading
                                headingLevel={2}
                                title={t("add_exemplar", { ns: "item" })}
                            />

                            <form onSubmit={handleNewExemplarFormSubmit}>
                                <ItemForm
                                    startCancelButton={true}
                                    endCancelButton={true}
                                    submitButton={true}
                                    cancelButtonOnClickFunction={() => setDisplayExemplarForm(false)}
                                />
                            </form>
                        </>
                    )}

                    <Heading
                        headingLevel={2}
                        title={t("exemplars", { ns: "item" })}
                    />

                    {!displayExemplarForm && (
                        <Button
                            label={t("add_exemplar", { ns: "item" })}
                            onClickFunction={() => setDisplayExemplarForm(true)}
                            className={"block w-fit mx-auto"}
                        />
                    )}

                    <div className="flex flex-wrap justify-center gap-4 p-4">
                        {itemCommon.items?.map(item =>
                            <ItemDetailedCard
                                key={item.id}
                                item={item}
                                isHighlighted={item.id === parseInt(itemId)}
                            />
                        )}
                    </div>
                </>
            }
        </div>
    )
}

export default ItemCommonDetails;