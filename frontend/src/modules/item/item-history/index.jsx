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
    const { t, ready } = useTranslation(["itemHistory", "common"]);

    // State variables
    const [isDataLoading, setDataLoading] = useState(true);
    const [historyData, setHistoryData] = useState({});
    const [itemData, setItemData] = useState({});
    const [events, setEvents] = useState([]);
    const [entries, setEntries] = useState([]);

    // Functions
    /**
     * Formats the history data of the item for later use
     * 
     * @param {Object} historyData - The item history data fetched from the API
     * @returns {array} The formatted array of objects
     */
    const formatHistoryData = (historyData) => {
        let formattedData = [];

        historyData.loans && historyData.loans.forEach((loan) => {
            if (loan.real_return_date) {
                formattedData.push({
                    eventType: "loanReturned",
                    date: loan.real_return_date,
                    content: {
                        borrower: loan.borrower && loan.borrower.username || (loan.borrower_email ? "" : "-"),
                        borrowerEmail: loan.borrower_email || "",
                        loanDate: loan.date
                    }
                });
            }
            formattedData.push({
                eventType: "loan",
                date: loan.date,
                content: {
                    loaner: loan.loaner && loan.loaner.username || "-",
                    plannedReturnDate: loan.planned_return_date,
                    borrower: loan.borrower && loan.borrower.username || (loan.borrower_email ? "" : "-"),
                    borrowerEmail: loan.borrower_email || "",
                    itemLocalisation: loan.item_localisation || "-"
                }
            });
        });

        historyData.controls && historyData.controls.forEach((control) => {
            formattedData.push({
                eventType: "control",
                date: control.date,
                content: {
                    controller: control.controller.username || "-",
                    remarks: control.remarks || t("noneF", { ns:"common" })
                }
            })
        });
        return formattedData;
    }

    /**
     * Sorts an array of objects by their date property, in descending order
     * 
     * @param {array} array - The array of objects to be sorted
     * @returns {array} The sorted array
     */
    const sortByDate = (array) => {
        array.sort((a, b) => new Date(b.date) - new Date(a.date));
        return array;
    }

    /**
     * Formats a date (YYYY-MM-DD) in the format DD.MM.YYYY
     * 
     * @param {string} date - The date to be formatted
     * @returns {string} The formatted date
     */
    const formatDate = (date) => {
        const regex = /^\d{4}-\d{2}-\d{2}$/;
        if (!regex.test(date)) return "-";

        const [year, month, day] = date.split("-");
        return `${day}.${month}.${year}`;
    }

    // Change the title element of the page
    useEffect(() => {
        if (ready && itemData.inventory_nb) {
            document.title = `${t("appTitle", { ns:"common" })} - ${itemData.inventory_nb}`;
        }
    }, [ready, itemData.inventory_nb])

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

    // Create an array of JSX elements that represent the history events
    useEffect(() => {
        const newEntries = events.length !== 0 ? (events.map((event, index) => {
            switch (event.eventType) {
                case "loan":
                    return [
                        <div key={`loan-${index}`} className="flex flex-wrap items-baseline gap-x-1">
                            <Pill className="self-center min-w-20 h-6 mr-1">{formatDate(event.date)}</Pill>
                            <span className="text-lg">{t("loanTo")} : {event.content.borrower}</span>
                            <span className="text-sm break-all"><em>{event.content.borrowerEmail}</em></span>
                        </div>,
                        <div key={`loanDetail-${index}`} className="flex flex-wrap items-start gap-x-8 gap-y-1">
                            <Section header={t("plannedReturn")}>
                                <Section.Text>{formatDate(event.content.plannedReturnDate)}</Section.Text>
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
                        <div key={`loanReturned-${index}`} className="flex flex-wrap items-baseline gap-x-1">
                            <Pill className="self-center min-w-20 h-6 mr-1">{formatDate(event.date)}</Pill>
                            <span className="text-lg">{t("loanReturned")} : {event.content.borrower}</span>
                            <span className="text-sm break-all"><em>{event.content.borrowerEmail}</em></span>
                        </div>,
                        <Section key={`loanDate-${index}`} header={t("loanDate")}>
                            <Section.Text>{formatDate(event.content.loanDate)}</Section.Text>
                        </Section>
                    ];
                case "control":
                    return [
                        <div key={`control-${index}`} className="flex items-center gap-x-2">
                            <Pill className="min-w-20 h-6">{formatDate(event.date)}</Pill>
                            <span className="text-lg">{t("controlBy")} : {event.content.controller}</span>
                        </div>,
                        <Section key={`remarks-${index}`} header={t("remarks")}>
                            <Section.Text>{event.content.remarks}</Section.Text>
                        </Section>
                    ];
            }
        })) : (
            [[<div><em>{t("nothingToShow")}</em></div>]]
        );
        setEntries(newEntries);
    }, [events]);

    return (ready &&
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
                        {/* History table */}
                        <Table title={t("loansAndControls")} entries={entries}/>
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