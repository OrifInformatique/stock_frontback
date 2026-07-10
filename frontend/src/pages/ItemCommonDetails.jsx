import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { getItemCommon } from "../services/api/items";

import ItemCommonDetailedCard from "../modules/ItemCommonDetailedCard";
import ItemDetailedCard from "../modules/ItemDetailedCard";
import ItemCommonForm from "../modules/ItemCommonForm";
import ItemForm from "../modules/ItemForm";

import Heading from "../ui/Heading";
import Loading from "../ui/Loading";
import HTMLLink from "../ui/HTMLLink";

import { Button } from "@orif-informatique/react-components-library";

import { jumpToAnchor } from "../utils/jumpToAnchor";

import "../style.css"

/**
 * Page where we display the details of an item common and its items.
 *
 * @returns {JSX.Element}
 *
 */
const ItemCommonDetails = () => {
    const { t } = useTranslation(["item", "misc", "titles"]);

    const { itemCommonId, itemId } = useParams();

    const location = useLocation();
    const isObjectEditMode = location.pathname.endsWith(`${itemCommonId}/edit`);
    const isExemplarAddMode = location.pathname.endsWith("exemplars/add");
    const isExemplarEditMode = location.pathname.endsWith(`${itemId}/edit`);

    const [isLoading, setIsLoading] = useState(true);

    const [displayExemplarForm, setDisplayExemplarForm] = useState(false);
    const [displayObjectForm, setDisplayObjectForm] = useState(false);

    const [exemplarFormData, setExemplarFormData] = useState(null)

    const [itemCommon, setItemCommon] = useState({});
    const [filteredExemplars, setFilteredExemplars] = useState([]);
    const [showButtonsAndOptions, setShowButtonsAndOptions] = useState(true);

    /**
     * Fetches itemComment data on mount.
     */
    useEffect(() => {
        const fetchItemCommonData = async () => {
            const data = await getItemCommon(parseInt(itemCommonId));
            setItemCommon(data);
            setFilteredExemplars(data.items)
        };

        fetchItemCommonData();
        setIsLoading(false);
    }, [])

    /**
     * Checks if an exemplar is being edited from another page (via url).
     */
    useEffect(() => {
        if (isExemplarAddMode)
            setDisplayExemplarForm(true);

        else if (itemId && isExemplarEditMode) {
            const exemplarData = itemCommon.items?.find(item => item.id === parseInt(itemId));
            editExemplar(exemplarData);
        }
    }, [itemCommon, isExemplarEditMode, isExemplarAddMode])

    /**
     * Scrolls to the exemplar when one is clicked from the home page.
     */
    useEffect(() => {
        if (itemId && itemCommon.items)
            jumpToAnchor(itemId);
    }, [itemCommon])

    /**
     * Displays the form.
     *
     * @return {void}
     *
     */
    const displayForm = () =>
    {
        setDisplayExemplarForm(true);
        setShowButtonsAndOptions(false);
    }

    /**
     * Hides the exemplar form and empty all form values.
     *
     * @returns {void}
     *
     */
    const cancelForm = () => {
        setDisplayExemplarForm(false);
        setShowButtonsAndOptions(true);
        setExemplarFormData(null);
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
    const editExemplar = async (exemplarData) => {
        if (displayExemplarForm) await cancelForm();
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
    const handleNewExemplarFormSubmit = (event) => {
        event.preventDefault();

        const formData = Object.fromEntries(new FormData(event.target).entries());
        console.log(formData);

        // ============================================== //
        // Future POST request to backend will go here... //
        // ============================================== //

        cancelForm();
    }

    /**
     * When the exemplar form is opened, scroll to the top of it.
     */
    useEffect(() => {
        if(displayExemplarForm)
            jumpToAnchor("exemplar-form");
    }, [displayExemplarForm]);

    /**
     * Filters the item common exemplars to hide the exemplar being updated.
     */
    useEffect(() =>
    {
        setFilteredExemplars(itemCommon.items?.filter(item =>
            exemplarFormData === null || item.id !== exemplarFormData.id));
    }, [exemplarFormData])

    return (
        <div className="overflow-show mb-50">
            <Heading
                headingLevel={1}
                title={t("item_common_details", { ns: "titles" })}
            />

            {isLoading ?
                <Loading />
                :
                <>
                    {displayExemplarForm && (
                        <>

                            <form onSubmit={handleNewExemplarFormSubmit}>
                                <ItemForm
                                    title={exemplarFormData
                                        ? t("edit_exemplar", { ns: "item" })
                                        : t("add_exemplar", { ns: "item" })}
                                    item={exemplarFormData}
                                    startCancelButton={true}
                                    endCancelButton={true}
                                    submitButton={true}
                                    cancelButtononClick={cancelForm}
                                />
                            </form>
                        </>
                    )}
                    <div className="appear flex flex-row justify-center">
                        <div className="flex flex-col">
                            <HTMLLink
                                to={"/"}
                                styleAsButton={true}
                                className={"block w-fit my-4"}
                                icon="arrow-left"
                                title={t("back_to_list", { ns: "buttons" })}
                            >
                                {t("back_to_list", { ns: "buttons" })}
                            </HTMLLink>
                            <ItemCommonDetailedCard
                                setDisplayObjectForm={setDisplayObjectForm}
                                itemCommon={itemCommon}
                                updateItemCommon={isObjectEditMode}
                            />
                        </div>
                        <div className="flex flex-col gap-4">
                            <Heading
                                headingLevel={2}
                                title={t("exemplars", { ns: "item" })}
                            />
                            <Button
                                label={t("add_exemplar", { ns: "item" })}
                                onClick={() => setDisplayExemplarForm(true)}
                                icon="plus"
                                className={"block w-fit mx-auto"}
                            />
                            <div className="appear flex flex-row h-150 w-80 flex-wrap justify-center gap-4 p-4 overflow-y-scroll overflow-x-hide">
                                {itemCommon.items?.map(item =>
                                    <ItemDetailedCard
                                        key={item.id}
                                        id={item.id}
                                        item={item}
                                        isHighlighted={item.id === parseInt(itemId)}
                                        editExemplarFunction={editExemplar}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                    {displayObjectForm &&
                        <ItemCommonForm
                            itemCommon={itemCommon}
                            endCancelButton={true}
                            setDisplayObjectForm={setDisplayObjectForm}
                            submitButton={true}
                            cancelButtonOnClickFunction={() => setDisplayObjectForm((prev) => !prev)}
                        />
                    }
                </>
            }
        </div>
    )
}

export default ItemCommonDetails;