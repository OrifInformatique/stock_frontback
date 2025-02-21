import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useParams, useNavigate } from "react-router-dom";

// Modules
import Table from "../../table";

// UI elements
import Button from "../../../ui/buttons";
import Icon from "../../../ui/icons";
import Section from "../../../ui/sections";
import Separator from "../../../ui/separators";
import Title from "../../../ui/titles";
import Toolbar from "../../../ui/toolbars";
import Pill from "../../../ui/pills";

const ItemHistory = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { t } = useTranslation(["itemHistory", "common"]);

    // State variables
    const [isDataLoading, setDataLoading] = useState(true);
    const [historyData, setHistoryData] = useState({});
    const [itemData, setItemData] = useState({});
    const [events, setEvents] = useState([]);
    const [entries, setEntries] = useState([]);

    // Functions
    const formatHistoryData = (historyData) => {
        let formattedData = [];

        historyData.loans && historyData.loans.forEach((loan) => {
            formattedData.push({
                eventType: "loan",
                date: loan.date ?? "-",
                content: {
                    loaner: loan.loaner.username ?? "-",
                    plannedReturnDate: loan.planned_return_date ?? "-",
                    borrower: loan.borrower ? loan.borrower.username : "",
                    borrowerEmail: loan.borrower_email ?? "",
                    itemLocalisation: loan.item_localisation ?? "-"
                }
            });

            if (loan.real_return_date) {
                formattedData.push({
                    eventType: "loanReturned",
                    date: loan.real_return_date ?? "-",
                    content: {}
                });
            }
        });

        historyData.controls && historyData.controls.forEach((control) => {
            formattedData.push({
                eventType: "control",
                date: control.date ?? "-",
                content: {
                    controller: control.controller.username ?? "-",
                    remarks: control.remarks ?? t("none", {ns: "common"})
                }
            })
        });
        return formattedData;
    }

    const sortByDate = (array) => {
        array.sort((a, b) => new Date(b.date) - new Date(a.date));
        return array;
    }

    const formatDate = (date) => {
        const [year, month, day] = date.split("-");
        return `${day}.${month}.${year}`;
    } 

    // API calls
    useEffect(() => {
        async function fetchData() {
            setDataLoading(true);
            try {
                const historyResponse = await fetch(`http://localhost/stock/public/api/items/${id}/history`);
                const { history } = await historyResponse.json();

                const itemResponse = await fetch(`http://localhost/stock/public/api/items/${id}`);
                const { item } = await itemResponse.json();

                setHistoryData(history);
                setItemData(item);

                setEvents(sortByDate(formatHistoryData(history)));
            } catch (err) {
                console.log(err)
            } finally {
                setDataLoading(false);
            }
        }
        fetchData();
    }, []);

    useEffect(() => {
        const newEntries = events.map((event, index) => {
            switch (event.eventType) {
                case "loan":
                    return [
                        <div key={`loan-${index}`} className="flex items-center gap-x-2">
                            <Pill className="min-w-20 h-6">{event.date && formatDate(event.date)}</Pill>
                            <div className="flex flex-wrap items-baseline gap-x-1">
                                <span className="text-lg">{t("loanTo")} {event.content.borrower}</span>
                                {event.content.borrowerEmail && (<em className="text-md">{event.content.borrowerEmail}</em>)}
                            </div>
                        </div>,
                        <div key={`loanDetail-${index}`} className="flex flex-wrap gap-x-8">
                            <Section header={t("plannedReturn")}>
                                <Section.Text>{event.content.plannedReturnDate && formatDate(event.content.plannedReturnDate)}</Section.Text>
                            </Section>
                            <Section header={t("loanBy")}>
                                <Section.Text>{event.content.loaner}</Section.Text>
                            </Section>
                            <Section header={t("location")}>
                                <Section.Text>{event.content.itemLocalisation}</Section.Text>
                            </Section>
                        </div>
                    ];
                case "loanReturned":
                    return [
                        <div key={`loanReturned-${index}`} className="flex gap-x-2">
                            <Pill className="min-w-20 h-6">{event.date && formatDate(event.date)}</Pill>
                            <span className="text-lg">{t("returnLoan")}</span>
                        </div>
                    ];
                case "control":
                    return [
                        <div key={`control-${index}`} className="flex gap-x-2">
                            <Pill className="min-w-20 h-6">{event.date && formatDate(event.date)}</Pill>
                            <span className="text-lg">{t("controlBy")} {event.content.controller}</span>
                        </div>,
                        <Section key={`remarks-${index}`} header={t("remarks")}>
                            <Section.Text>{event.content.remarks}</Section.Text>
                        </Section>
                    ];
            }
        });
        setEntries(newEntries);
    }, [events]);

    return (
        <div className="flex flex-col">
            {/* Toolbar */}
            <Toolbar>
                {/* Back button */}
                <Button.Toolbar onClick={() => navigate(-1)}>
                    <Button.Icon className="rounded-l-full w-10">
                        <Icon.Back className="text-white h-8" />
                    </Button.Icon>
                    <Button.Label className="text-primary">
                        {t("buttons.back", { ns:"common" })}
                    </Button.Label>
                </Button.Toolbar>
            </Toolbar>
            <Separator />
            {!isDataLoading ? (
                historyData && itemData ? (
                    <div>
                        {/* Page title section */}
                        <div className="flex flex-wrap items-center gap-2">
                            <span className="text-2xl font-medium">{t("history")}</span>
                            <Title.Page>{itemData.inventory_nb}</Title.Page>
                        </div>
                        {/* Loan and control buttons */}
                        <div className="flex justify-between gap-4 my-2">
                            <Button.Filled variant="success" className="flex-1">
                                <Button.Label className="text-white">
                                    {t("buttons.returnLoan", { ns:"common" })}
                                </Button.Label>
                            </Button.Filled>
                            <Button.Outlined variant="success" className="flex-1">
                                <Button.Label className="text-primary">
                                    {t("buttons.control", { ns:"common" })}
                                </Button.Label>
                                <Button.Icon>
                                    <Icon.Add className="text-white h-6" />
                                </Button.Icon>
                            </Button.Outlined>
                        </div>
                        <Table title="Prêts & contrôles" entries={entries}/>
                    </div>
                ) : (
                    t("itemNotFound")
                )
            ) : (
                <div className="flex justify-center">
                    {t("loading", { ns:"common" })}...
                </div>
            )}
        </div>
    );
}

export default ItemHistory;