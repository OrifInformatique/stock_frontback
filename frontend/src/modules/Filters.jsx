import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { faFilter, faXmark, faRotate, faArrowDownAZ, faArrowDownZA, faPlus, faFileExport } from "@fortawesome/free-solid-svg-icons";

import Button from "../ui/Button";
import Label from "../ui/Label";
import InputText from "../ui/InputText";
import Menu from "../ui/Menu";
import MultiSelect from "../ui/MultiSelect";
import SegmentedControl from "../ui/SegmentedControl";
import SingleSelect from "../ui/SingleSelect";
import Toggle from "../ui/Toggle";

import { notDevelopedFeature } from "../utils/devUtils";

/**
 * All filters for searching specific exemplars.
 *
 * @returns {JSX.Element}
 *
 */
const Filters = ({
    selectedDisplayMode, setDisplayModeFunction,
    searchBar, setSearchbar,
    objectTypes, selectedObjectTypes, setSelectedObjectTypes,
    loanStates, selectedLoanStates, setSelectedLoanStates,
    exemplarConditions, selectedExemplarConditions, setSelectedExemplarConditions,
    groups, selectedGroups, setSelectedGroups,
    stockingPlaces, selectedStockingPlaces, setSelectedStockingPlaces,
    filterOptions, selectedFilterOption, setSelectedFilterOption,
    filterByAscOrder, setFilterByAscOrder
}) =>
{
    const { t } = useTranslation(["buttons", "filters", "item", "misc"]);
    const navigate = useNavigate();

    const [expandFilters, setExpandFilters] = useState(false);
    const [filterButtonIcon, setFilterButtonIcon] = useState(faFilter);
    const [filtersButtonLabel, setFilterButtonLabel] = useState(t("show_filters", { ns: "filters" }));

    const handleSearchBar = (event) => setSearchbar(event.target.value.trimStart());

    const handleToggleFilters = () =>
    {
        setExpandFilters(prev => {
            const areFiltersExpanded = !prev

            setFilterButtonIcon(areFiltersExpanded ? faXmark : faFilter )
            setFilterButtonLabel(areFiltersExpanded ? t("hide_filters", { ns: "filters" }) : t("show_filters", { ns: "filters" }))

            return areFiltersExpanded;
        });
    }

    /**
     * Resets all filters by emptying all values.
     *
     * @returns {void}
     */
    const resetFilters = () =>
    {
        setSearchbar("");

        setSelectedObjectTypes([]);
        setSelectedLoanStates([]);
        setSelectedExemplarConditions([]);
        setSelectedGroups([]);
        setSelectedStockingPlaces([]);

        setSelectedFilterOption(selectedDisplayMode === t("objects", { ns: "item" })
            ? "name"
            : "inventory_prefix");
        setFilterByAscOrder(true);
    }

    return (
        <section className="fixed top-8 left-0 sm:flex flex-wrap lg:flex-nowrap justify-between lg:justify-center lg:gap-2 w-full p-2 my-2 z-[100]">
            <div className="w-full sm:w-1/2 lg:w-1/4 h-[56px] p-2 bg-gray-300 rounded-full">
                <SegmentedControl
                    name={"displayMode"}
                    options={[t("objects", { ns: "item"}), t("exemplars", { ns: "item"})]}
                    selectedValue={selectedDisplayMode}
                    onChangeFunction={setDisplayModeFunction}
                />
            </div>

            <div className="relative flex flex-col sm:order-last lg:order-none w-full lg:w-3/5 h-fit rounded-[28px] my-2 lg:my-0 p-2 bg-gray-300">
                <div className="flex justify-between z-20">
                    <div className="w-full pr-2">
                        <InputText
                            name={"searchbar"}
                            placeholder={selectedDisplayMode === t("objects", { ns: "item" })
                                ? t("home_searchbar_placeholder_objects", { ns: "filters"})
                                : t("home_searchbar_placeholder_exemplars", { ns: "filters"})}
                            value={searchBar}
                            onChangeFunction={handleSearchBar}
                            className={"!rounded-full"}
                        />
                    </div>

                    <div className="shrink-0">
                        <Button
                            icon={filterButtonIcon}
                            label={filtersButtonLabel}
                            onClickFunction={handleToggleFilters}
                            className={"!rounded-full"}
                        />
                    </div>
                </div>

                {expandFilters && (
                    <div className="absolute left-0 right-0 grid grid-cols-2 sm:grid-cols-3 gap-4 justify-items-stretch items-end w-full p-4 pt-16 bg-gray-300 rounded-[25px] z-10">
                        <div>
                            <Label
                                forInput={"object-type"}
                                label={t("object_type", { ns: "item" })}
                            />

                            <MultiSelect
                                name={"object-type"}
                                options={objectTypes}
                                selectedValues={selectedObjectTypes}
                                onChangeFunction={setSelectedObjectTypes}
                            />
                        </div>

                        <div>
                            <Label
                                forInput={"loan-state"}
                                label={t("loan_state", { ns: "item" })}
                            />

                            <MultiSelect
                                name={"loan-state"}
                                options={loanStates}
                                selectedValues={selectedLoanStates}
                                onChangeFunction={setSelectedLoanStates}
                            />
                        </div>

                        <div>
                            <Label
                                forInput={"exemplar-condition"}
                                label={t("exemplar_condition", { ns: "item" })}
                            />

                            <MultiSelect
                                name={"exemplar-condition"}
                                options={exemplarConditions}
                                selectedValues={selectedExemplarConditions}
                                onChangeFunction={setSelectedExemplarConditions}
                            />
                        </div>

                        <div>
                            <Label
                                forInput={"group"}
                                label={t("group", { ns: "item" })}
                            />

                            <MultiSelect
                                name={"group"}
                                options={groups}
                                selectedValues={selectedGroups}
                                onChangeFunction={setSelectedGroups}
                            />
                        </div>

                        <div>
                            <Label
                                forInput={"stocking-places"}
                                label={t("stocking_place", { ns: "item" })}
                            />

                            <MultiSelect
                                name={"stocking-places"}
                                options={stockingPlaces}
                                selectedValues={selectedStockingPlaces}
                                onChangeFunction={setSelectedStockingPlaces}
                            />
                        </div>

                        <div>
                            <Label
                                forInput={"filter-by"}
                                label={t("filter_order", { ns: "filters" })}
                            />

                            <SingleSelect
                                name={"filter-by"}
                                options={filterOptions}
                                selectedValue={selectedFilterOption}
                                onChangeFunction={setSelectedFilterOption}
                            />
                        </div>

                        <div>
                            <Toggle
                                name={"filter-order"}
                                label={t("filter_order", { ns: "filters" })}
                                checked={filterByAscOrder}
                                onClickFunction={setFilterByAscOrder}
                                offIcon={faArrowDownZA}
                                onIcon={faArrowDownAZ}
                            />
                        </div>

                        <div className="col-span-full sm:col-auto">
                            <Button
                                icon={faRotate}
                                label={t("reset_filters", { ns: "filters" })}
                                keepLabel={true}
                                onClickFunction={resetFilters}
                            />
                        </div>
                    </div>
                )}
            </div>

            {/* TODO : The menu should be in the header instead. */}
            <div className="fixed sm:static bottom-4 right-4 sm:w-1/4 lg:w-fit lg:order-last z-20">
                <Menu
                    actions={[
                        {
                            icon: faPlus,
                            label: t("new", { ns: "buttons" }),
                            action: () => navigate("/objects/add")
                        },
                        {
                            icon: faFileExport,
                            label: t("export", { ns: "buttons" }),
                            action: () => notDevelopedFeature()
                        }
                    ]}
                    className={"sm:flex-col-reverse"}
                />
            </div>
        </section>
    )
}

export default Filters;