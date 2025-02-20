import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams, useNavigate } from "react-router-dom";

// Modules
import ItemDetail from "./item-detail";
import ItemCommonDetail from "./item-common-detail";

// UI elements
import Button from "../../../ui/buttons";
import Icon from "../../../ui/icons";
import Link from "../../../ui/links";
import Separator from "../../../ui/separators";
import Title from "../../../ui/titles";
import Toolbar from "../../../ui/toolbars";

const ItemInformation = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { t } = useTranslation(["itemInformation", "common"]);

    // State variables
    const [isDataLoading, setDataLoading] = useState(true);
    const [itemData, setItemData] = useState(null);
    const [itemCommonData, setItemCommonData] = useState(null);

    // API calls
    useEffect(() => {
        async function fetchData() {
            setDataLoading(true);
            try {
                const itemResponse = await fetch(`http://localhost/stock/public/api/items/${id}`);
                const { item } = await itemResponse.json();

                const itemCommonResponse = await fetch(`http://localhost/stock/public/api/items/${id}/item_common`);
                const { item_common } = await itemCommonResponse.json();

                setItemData(item);
                setItemCommonData(item_common);
            } catch (err) {
                console.log(err)
            } finally {
                setDataLoading(false);
            }
        }
        fetchData();
    }, []);

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
                {/* Scan button */}
                <Button.Toolbar>
                    <Button.Label className="text-primary">
                        {t("buttons.scan", { ns:"common" })}
                    </Button.Label>
                    <Button.Icon className="rounded-r-full w-12">
                        <Icon.Scan className="text-white h-8" />
                    </Button.Icon>
                </Button.Toolbar>
            </Toolbar>
            <Separator />
            {/* Item and item common detail */}
            {!isDataLoading ? (
                itemCommonData && itemData ? (
                    <div>
                        {/* Page title section */}
                        <div className="flex flex-wrap items-center justify-between gap-2">
                            <Title.Page className="flex-1 min-w-48">
                                {itemCommonData.name}
                            </Title.Page>
                            <Link.History to="history" />
                        </div>
                        {/* Loan and control buttons */}
                        <div className="flex justify-between gap-4 mt-2">
                            <Button.Filled variant="success" className="flex-1">
                                <Button.Label className="text-white">
                                    {itemData.current_loan.loan_id
                                        ? t("buttons.returnLoan", { ns:"common" })
                                        : t("buttons.newLoan", { ns:"common" })}
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
                        {/* Item and item common detail */}
                        <ItemCommonDetail data={itemCommonData} />
                        <ItemDetail data={itemData} />
                    </div>
                ) : (
                    <div className="flex justify-center">
                        {t("itemNotFound")}
                    </div>
                )
            ) : (
                <div className="flex justify-center">
                    {t("loading", { ns:"common" })}...
                </div>
            )}
        </div>
    );
}

export default ItemInformation;