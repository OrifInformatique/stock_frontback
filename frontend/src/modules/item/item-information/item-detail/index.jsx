import React from "react";
import { useTranslation } from "react-i18next";

// UI elements
import Button from "../../../../ui/buttons";
import Icon from "../../../../ui/icons";
import Pill from "../../../../ui/pills";
import Section from "../../../../ui/sections";
import Title from "../../../../ui/titles";

const ItemDetail = ({ data }) => {
    const { t } = useTranslation(["itemInformation", "common"]);

    const conditionStyleMap = {
        10: "success",
        30: "warning",
        40: "danger"
    }
    const loanStyleMap = {
        "Pas de prêt en cours": "success",
        "En prêt":              "warning",
        "Prêt en retard":       "danger"
    }
    const warrantyStyleMap = {
        "Sous garantie":    "success",
        "Échéance proche":  "warning",
        "Garantie expirée": "danger"
    }

    const formatDate = (date) => {
        const [year, month, day] = date.split("-");
        return `${day}.${month}.${year}`;
    } 

    return (
        <div className="flex flex-col border border-primary border-opacity-70 p-3 my-2">
            {/* Edit and delete buttons */}
            <div className="flex justify-between flex-1 gap-3">
                <Button.Outlined className="flex-1" variant="warning">
                    <Button.Label className="text-primary text-sm">
                        {t("buttons.edit", { ns:"common" })}
                    </Button.Label>
                    <Button.Icon className="w-8">
                        <Icon.Edit className="text-white h-4" />
                    </Button.Icon>
                </Button.Outlined>
                <Button.Outlined className="flex-1" variant="danger">
                    <Button.Label className="text-primary text-sm">
                        {t("buttons.delete", { ns:"common" })}
                    </Button.Label>
                    <Button.Icon className="text-white w-8">
                        <Icon.Delete className="h-4" />
                    </Button.Icon>
                </Button.Outlined>
            </div>
            {/* Item name and states */}
            <div className="flex flex-col py-2 gap-y-2">
                <Title.Sub className="mr-auto">{data.inventory_nb}</Title.Sub>
                <div className="flex flex-wrap gap-1">
                    <Pill variant={conditionStyleMap[data.condition.item_condition_id]}>
                        {data.condition.name}
                    </Pill>
                    <Pill variant={loanStyleMap[data.current_loan.status]}>
                        {data.current_loan.status}
                    </Pill>
                </div>
            </div>
            {/* Item detail */}
            <div className="flex flex-wrap gap-x-12">
                <div>
                    <Section variant="primary" header={t("stockingPlace")}>
                        <Section.Text>{data.stocking_place.name}</Section.Text>
                    </Section>
                    <Section variant="primary" header={t("lastControl")}>
                        {data.last_control ? (
                            <div>
                                <div className="flex items-center gap-1">
                                    <Icon.Date className="text-secondary-dark min-w-4 w-4" />
                                    <Section.Text>{formatDate(data.last_control.date)}</Section.Text>
                                    <Icon.User className="text-secondary-dark min-w-4 w-4" />
                                    <Section.Text>{data.last_control.controller.username}</Section.Text>
                                </div>
                                <div className="flex gap-1">
                                    <Icon.Message className="text-secondary-dark min-w-4 w-4" />
                                    <Section.Text>{data.last_control.remarks}</Section.Text>
                                </div>
                            </div>
                        ) : (
                            <Section.Text>{t("noneM", { ns:"common" })}</Section.Text>
                        )}
                    </Section>
                    <Section variant="primary" header={t("serialNumber")}>
                        <Section.Text>{data.serial_number
                            ? data.serial_number
                            : t("noneM", { ns:"common" })}
                        </Section.Text>
                    </Section>
                    <Section variant="primary" header={t("supplier")}>
                        <Section.Text>{data.supplier.name}</Section.Text>
                    </Section>
                </div>
                <div>
                    <Section variant="primary" header={t("buyingPrice")}>
                        <Section.Text>CHF {data.buying_price}</Section.Text>
                    </Section>
                    <Section variant="primary" header={t("buyingDate")}>
                        <div className="flex gap-1">
                            <Icon.Date className="text-secondary-dark min-w-4 w-4" />
                            <Section.Text>{formatDate(data.buying_date)}</Section.Text>
                        </div>
                    </Section>
                    <Section variant="primary" header={t("warrantyDuration")}>
                        <div className="flex gap-2">
                            <Section.Text>{data.warranty_duration} {t("month")}</Section.Text>
                            {data.warranty_duration != 0 &&
                                <Pill variant={warrantyStyleMap[data.warranty_status]}>
                                    {data.warranty_status}
                                </Pill>}
                        </div>
                    </Section>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;