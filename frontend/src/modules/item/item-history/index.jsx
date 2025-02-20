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

                setEvents([
                    
                ]);

                setEntries(
                    [
                        [
                            <div className="flex gap-x-2">
                                <Pill>11.01.2025</Pill>
                                <span>Retour du prêt</span>
                            </div>
                        ],
                        [
                            <div className="flex gap-x-2">
                                <Pill>20.12.2024</Pill>
                                <span>Contrôle par ThJo</span>
                            </div>,
                            <Section header="Remarques">
                                <Section.Text>Vu dans l'armoire 35</Section.Text>
                            </Section>
                        ],
                        [
                            <div className="flex gap-x-2">
                                <Pill>24.11.2024</Pill>
                                <span>Prêt à BuYa</span>
                            </div>,
                            <div className="flex flex-wrap gap-x-8">
                                <Section header="Prêté par">
                                    <Section.Text>PeDi</Section.Text>
                                </Section>
                                <Section header="Retour prévu">
                                    <Section.Text>24.02.2025</Section.Text>
                                </Section>
                                <Section header="Emplacement">
                                    <Section.Text>Section RT</Section.Text>
                                </Section>
                            </div>
                        ]
                    ]
                );
            } catch (err) {
                console.log(err)
            } finally {
                setDataLoading(false);
            }
        }
        fetchData();
    }, [])

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
                        <Table title="Prêts & contrôles"
                            entries={entries}
                        />
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