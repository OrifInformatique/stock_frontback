import React from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

const ItemHistory = () => {
    const { id } = useParams();
    const { t } = useTranslation("itemHistory");

    return (
        <h1>{t("history")} {id}</h1>
    );
}

export default ItemHistory;