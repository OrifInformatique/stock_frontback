import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import ItemCommonForm from "../modules/ItemCommonForm";
import ItemForm from "../modules/ItemForm";

import Heading from "../ui/Heading";
import HTMLLink from "../ui/HTMLLink";

const ItemCommonCreation = () =>
{
    const { t } = useTranslation(["buttons", "item", "titles"]);
    const navigate = useNavigate()

    const handleNewObjectForm = (event) =>
    {
        event.preventDefault();

        const formData = Object.fromEntries(new FormData(event.target).entries());
        console.log(formData);

        // ============================================== //
        // Future POST request to backend will go here... //
        // ============================================== //

        navigate("/objects/1/exemplars");
    }

    return (
        <>
            <Heading
                headingLevel={1}
                title={t("add_object", { ns: "item" })}
            />

            <HTMLLink
                to={"/"}
                styleAsButton={true}
                className={"block w-fit mx-auto my-4"}
            >
                {t("back_to_list", { ns: "buttons" })}
            </HTMLLink>

            <form onSubmit={handleNewObjectForm}>
                <section>
                    <Heading
                        headingLevel={2}
                        title={t("item_common_details", { ns: "titles" })}
                    />

                    <ItemCommonForm />
                </section>

                <section>
                    <Heading
                        headingLevel={2}
                        title={t("exemplar_details", { ns: "titles" })}
                    />

                    <ItemForm
                        endCancelButton={true}
                        submitButton={true}
                        cancelButtonOnClickFunction={() => navigate("/")}
                    />
                </section>
            </form>

        </>
    )
}

export default ItemCommonCreation;