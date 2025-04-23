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
    const [exemplarFormData, setExemplarFormData] = useState(null)

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

    /**
     * Hides the exemplar form and empty all form values.
     *
     * @returns {void}
     *
     */
    const cancelForm = () =>
    {
        setDisplayExemplarForm(false);
        setExemplarFormData(null)
    }

    /**
     * Shows the exemplar form and prefill the fields
     * with corresponding exemplar values.
     *
     * @param {Object} exemplarData Data of the exemplar
     *
     * @returns {void}
     *
     */
    const editExemplar = (exemplarData) =>
    {
        setDisplayExemplarForm(true);
        setExemplarFormData(exemplarData);
    }

    /**
     * Handles the submit of the exemplar form.
     *
     * @param {Event}
     *
     * @returns {void}
     *
     */
    const handleNewExemplarFormSubmit = (event) =>
    {
        event.preventDefault();

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

        setDisplayExemplarForm(false);
        setExemplarFormData(null)
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
                                    item={exemplarFormData}
                                    startCancelButton={true}
                                    endCancelButton={true}
                                    submitButton={true}
                                    cancelButtonOnClickFunction={cancelForm}
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
                                editExemplarFunction={editExemplar}
                            />
                        )}
                    </div>
                </>
            }
        </div>
    )
}

export default ItemCommonDetails;