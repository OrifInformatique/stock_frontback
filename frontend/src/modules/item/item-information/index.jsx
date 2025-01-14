import React from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

// Modules

// UI elements

const ItemInformation = () => {
    const { id } = useParams();
    const { t } = useTranslation("itemInformation");

    return (
        <div>
            <h1>{t('test')} {id}</h1>
        </div>
    );
}

export default ItemInformation;