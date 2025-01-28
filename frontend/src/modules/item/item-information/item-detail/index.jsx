import React from "react";
import { useTranslation } from "react-i18next";

// UI elements
import Button from "../../../../ui/buttons";
import Icon from "../../../../ui/icons";
import Pill from "../../../../ui/pills";
import Section from "../../../../ui/sections";
import Title from "../../../../ui/titles";

const ItemDetail = () => {
    const { t } = useTranslation("itemInformation");

    return (
        <div className="flex flex-col border border-primary border-opacity-70 p-2 my-2">
            {/* Edit and delete buttons */}
            <div className="flex flex-1 gap-3">
                <Button.Outlined className="flex-1" variant="warning">
                    <Button.Label className="text-primary text-sm">{t("edit")}</Button.Label>
                    <Button.Icon className="w-8">
                        <Icon.Edit className="text-white h-4" />
                    </Button.Icon>
                </Button.Outlined>
                <Button.Outlined className="flex-1" variant="danger">
                    <Button.Label className="text-primary text-sm">{t("delete")}</Button.Label>
                    <Button.Icon className="text-white w-8">
                        <Icon.Delete className="h-4" />
                    </Button.Icon>
                </Button.Outlined>
            </div>
            <div className="flex flex-col py-2 gap-y-2">
                <Title.Sub className="mr-auto">ORP.OBNET14.0355</Title.Sub>
                <div className="flex flex-wrap gap-1">
                    <Pill variant="danger">Plus disponible</Pill>
                    <Pill variant="success">Pas de prêt en cours</Pill>
                </div>
            </div>
            <div className="flex flex-wrap gap-x-20">
                <div>
                    <Section header={t("stocking_place")}>
                        <Section.Text>Armoire 35</Section.Text>
                    </Section>
                    <Section header={t("last_control")}>
                        <div className="flex items-center gap-1">
                            <Icon.Date className="text-secondary-dark w-4" />
                            <Section.Text>23.01.2025</Section.Text>
                            <Icon.User className="text-secondary-dark w-4" />
                            <Section.Text>AbCd</Section.Text>
                        </div>
                        <div className="flex gap-1">
                            <Icon.Message className="text-secondary-dark w-4" />
                            <Section.Text>Vu dans l'armoire 35</Section.Text>
                        </div>
                    </Section>
                    <Section header={t("serial_number")}>
                        <Section.Text>12CC0807024</Section.Text>
                    </Section>
                    <Section header={t("supplier")}>
                        <Section.Text>Digitec AG</Section.Text>
                    </Section>
                </div>
                <div>
                    <Section header={t("buying_price")}>
                        <Section.Text>CHF 1'499.-</Section.Text>
                    </Section>
                    <Section header={t("buying_date")}>
                        <div className="flex gap-1">
                            <Icon.Date className="text-secondary-dark w-4" />
                            <Section.Text>20.09.2022</Section.Text>
                        </div>
                    </Section>
                    <Section header={t("warranty_duration")}>
                        <div className="flex items-center gap-2">
                            <Section.Text>36 mois</Section.Text>
                            <Pill variant="success">Sous garantie</Pill>
                        </div>
                    </Section>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;