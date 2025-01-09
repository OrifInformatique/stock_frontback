import React from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

const ItemInformation = () => {
    const { id } = useParams();
    const { t } = useTranslation("itemInformation");

    return (
        <div>
            <h1>Information for item {id}</h1>
        </div>
    );
}

export default ItemInformation;