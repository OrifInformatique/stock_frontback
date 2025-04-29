import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { getItemCommon } from "../services/api/items";

import ItemCommonDetailedCard from "../modules/ItemCommonDetailedCard";
import ItemDetailedCard from "../modules/ItemDetailedCard";
import ItemForm from "../modules/ItemForm";

import Button from "../ui/Button";
import ButtonLink from "../ui/ButtonLink";
import Heading from "../ui/Heading";
import Loading from "../ui/Loading";

import { jumpToAnchor } from "../utils/jumpToAnchor";

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

    const location = useLocation();
    const isObjectEditMode = location.pathname.endsWith(`${itemCommonId}/edit`);
    const isExemplarAddMode = location.pathname.endsWith("exemplars/add");
    const isExemplarEditMode = location.pathname.endsWith(`${itemId}/edit`);

    const [isLoading, setIsLoading] = useState(true);

    const [displayExemplarForm, setDisplayExemplarForm] = useState(false);
    const [exemplarFormData, setExemplarFormData] = useState(null)

    const [itemCommon, setItemCommon] = useState({});

    useEffect(() =>
    {
        const fetchItemCommonData = async () =>
        {
            const data = await getItemCommon(parseInt(itemCommonId));
            setItemCommon(data);
        };

        fetchItemCommonData();
        setIsLoading(false);
    }, [])

    useEffect(() =>
    {
        if(isExemplarAddMode)
            setDisplayExemplarForm(true);

        else if(itemId && isExemplarEditMode)
        {
            const exemplarData = itemCommon.items?.find(item => item.id === parseInt(itemId));
            editExemplar(exemplarData);
        }
    }, [itemCommon, isExemplarEditMode, isExemplarAddMode])


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
    const editExemplar = async (exemplarData) =>
    {
        if(displayExemplarForm) await cancelForm();
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

        // ============================================== //
        // Future POST request to backend will go here... //
        // ============================================== //

        setDisplayExemplarForm(false);
        setExemplarFormData(null)
    }

    useEffect(() => {
        if (displayExemplarForm)
            jumpToAnchor("exemplar-form");
    }, [displayExemplarForm]);

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
                    <ItemCommonDetailedCard
                        itemCommon={itemCommon}
                        updateItemCommon={isObjectEditMode}
                    />

                    {displayExemplarForm && (
                        <>
                            <div id="exemplar-form">
                                <Heading
                                    headingLevel={2}
                                    title={exemplarFormData
                                        ? t("edit_exemplar", { ns: "item" })
                                        : t("add_exemplar", { ns: "item" })
                                    }
                                />
                            </div>

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