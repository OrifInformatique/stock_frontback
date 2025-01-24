import React from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

// Modules
import ItemDetail from "./item-detail";
import ItemCommonDetail from "./item-common-detail";

// UI elements
import Button from "../../../ui/buttons";
import Icon from "../../../ui/icons";
import Image from "../../../ui/images";
import Link from "../../../ui/links";
import Separator from "../../../ui/separators";
import Title from "../../../ui/titles";
import Toolbar from "../../../ui/toolbars";

const ItemInformation = () => {
    const { id } = useParams();
    const { t } = useTranslation("itemInformation");

    return (
        <div>
            {/* Toolbar */}
            <Toolbar>
                <Button.Toolbar variant="primary-light">
                    <Button.Icon className="rounded-l-full w-10">
                        <Icon.Back className="h-8" />
                    </Button.Icon>
                    <Button.Label>{t("back")}</Button.Label>
                </Button.Toolbar>
                <Button.Toolbar variant="primary-light">
                    <Button.Label>{t("scan")}</Button.Label>
                    <Button.Icon className="rounded-r-full w-12">
                        <Icon.Scan className="h-8" />
                    </Button.Icon>
                </Button.Toolbar>
            </Toolbar>

            <Separator />

            {/* Page title section */}
            <div className="flex flex-wrap items-center justify-between gap-2">
                <Title.Page className="flex-1 min-w-48">
                    ASUS Carte Wireless Wi-Fi PCE-N15
                </Title.Page>
                <Link.History />
            </div>

            {/* Loan and control buttons */}
            <div className="flex gap-4 mt-2">
                <Button.Filled variant="success">
                    <Button.Label className="text-white">
                        {t("new-loan")}
                    </Button.Label>
                </Button.Filled>
                <Button.Outlined variant="success">
                    <Button.Label>{t("control")}</Button.Label>
                    <Button.Icon>
                        <Icon.Add className="h-6" />
                    </Button.Icon>
                </Button.Outlined>
            </div>

            {/* Item and item common detail */}
            <ItemCommonDetail />

            <Separator />

            <ItemDetail />
        </div>
    );
}

export default ItemInformation;