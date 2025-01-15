import React from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

// Modules

// UI elements
import Toolbar from "../../../ui/toolbars";
import Button from "../../../ui/buttons";
import Icon from "../../../ui/icons";
import Separator from "../../../ui/separators";
import Title from "../../../ui/titles";

const ItemInformation = () => {
    const { id } = useParams();
    const { t } = useTranslation("itemInformation");

    return (
        <>
            <Toolbar>
                <Button.Toolbar>
                    <Button.Icon className="rounded-l-full w-10"><Icon.Back /></Button.Icon>
                    <Button.Label>{t("back")}</Button.Label>
                </Button.Toolbar>
                <Button.Toolbar>
                    <Button.Label>{t("scan")}</Button.Label>
                    <Button.Icon className="rounded-r-full w-10"><Icon.Scan /></Button.Icon>
                </Button.Toolbar>
            </Toolbar>
            <Separator />
            <Title.Page>Titre de la page</Title.Page>
        </>
    );
}

export default ItemInformation;