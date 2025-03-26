import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { getItems } from "../services/api/items"

import Loading from "../ui/Loading";

import Filters from "../modules/Filters";
import ItemsList from "../modules/ItemsList";

/**
 * Main page of the app. Default route ("/") leads to this page.
 *
 * @returns {JSX.Element}
 *
 */
const Home = () =>
{
    const { t } = useTranslation("item");

    const [isLoading, setIsLoading] = useState(true);

    const [displayMode, setDisplayMode] = useState(t("objects", { ns: "item" }));

    const [searchBar, setSearchbar] = useState("");

    const [selectedObjectTypes, setSelectedObjectTypes] = useState([]);

    const [selectedLoanStates, setSelectedLoanStates] = useState([]);

    const [selectedExemplarConditions, setSelectedExemplarConditions] = useState([]);

    const [selectedGroups, setSelectedGroups] = useState([]);

    const [selectedStockingPlaces, setSelectedStockingPlaces] = useState([]);

    const [selectedFilterOption, setSelectedFilterOption] = useState("name");

    const [filterByAscOrder, setFilterByAscOrder] = useState(true);

    const [filters, setFilters] = useState([]);
    const [itemsCommon, setItemsCommon] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);

    const filterOptionsObjects = [
        { label: t("name", { ns: "item" }), value: "name" }
    ];

    const filterOptionsExemplars = [
        { label: t("inventory_number", { ns: "item" }), value: "inventory_prefix" },
        { label: t("stocking_place", { ns: "item" }), value: "stocking_place" }
    ];

    const filterItems = () =>
    {
        if(displayMode === t("objects", { ns: "item" }))
        {
            setFilteredItems(itemsCommon
                .filter(itemCommon => !searchbar
                    || itemCommon.name.toLowerCase().includes(searchBar.toLowerCase()))

                .filter(itemCommon => selectedObjectTypes.length === 0
                    || selectedObjectTypes.some(type => itemCommon.item_tag === type))

                .map(itemCommon => ({
                    ...itemCommon,
                    items: itemCommon.items.filter(exemplar =>
                        selectedLoanStates.length === 0
                        || selectedLoanStates.some(state => exemplar.loan_state === state))
                }))

                .map(itemCommon => ({
                    ...itemCommon,
                    items: itemCommon.items.filter(exemplar =>
                        selectedExemplarConditions.length === 0
                        || selectedExemplarConditions.some(condition => exemplar.item_condition === condition))
                }))


                .filter(itemCommon => selectedGroups.length === 0
                    || selectedGroups.some(type => itemCommon.group === type))

                .map(itemCommon => ({
                    ...itemCommon,
                    items: itemCommon.items.filter(exemplar =>
                        selectedStockingPlaces.length === 0
                        || selectedStockingPlaces.some(place => exemplar.stocking_place === place))
                }))

                .filter(itemCommon => itemCommon.items.length > 0)

                .sort((a, b) => {
                    if(!a[selectedFilterOption])
                        return filterByAscOrder
                            ? a[filterOptionsObjects[0].value].localeCompare(filterOptionsObjects[0].value)
                            : b[filterOptionsObjects[0].value].localeCompare(a[filterOptionsObjects[0].value])

                    return filterByAscOrder
                        ? a[selectedFilterOption].localeCompare(b[selectedFilterOption])
                        : b[selectedFilterOption].localeCompare(a[selectedFilterOption])
                })
            )
        }

        else
        {
            const exemplars = itemsCommon.flatMap(itemCommon =>
                itemCommon.items.map(exemplar => ({
                    ...exemplar,
                    name: itemCommon.name,
                    item_tag: itemCommon.item_tag,
                    group: itemCommon.group,
                    image_url: itemCommon.image_url
                }))
            );

            setFilteredItems(exemplars
                .filter(exemplar => !searchbar
                    || exemplar.inventory_prefix.toLowerCase().includes(searchBar.toLowerCase())
                    || exemplar.id.toString().toLowerCase().includes(searchBar.toLowerCase())
                    || `${exemplar.inventory_prefix}.${exemplar.id}`.toLowerCase().includes(searchBar.toLowerCase()))

                .filter(exemplar => selectedObjectTypes.length === 0
                    || selectedObjectTypes.some(type => exemplar.item_tag === type))

                .filter(exemplar => selectedLoanStates.length === 0
                    || selectedLoanStates.some(state => exemplar.loan_state === state))

                .filter(exemplar => selectedExemplarConditions.length === 0
                    || selectedExemplarConditions.some(condition => exemplar.item_condition === condition))

                .filter(exemplar => selectedGroups.length === 0
                    || selectedGroups.some(group => exemplar.group === group))

                .filter(exemplar => selectedStockingPlaces.length === 0
                    || selectedStockingPlaces.some(place => exemplar.stocking_place === place))

                .sort((a, b) => {
                    if(!a[selectedFilterOption])
                        return filterByAscOrder
                            ? a[filterOptionsExemplars[0].value].localeCompare(b[filterOptionsExemplars[0].value])
                            : b[filterOptionsExemplars[0].value].localeCompare(a[filterOptionsExemplars[0].value])

                    return filterByAscOrder
                        ? a[selectedFilterOption].localeCompare(b[selectedFilterOption])
                        : b[selectedFilterOption].localeCompare(a[selectedFilterOption])
                })
            )
        }
    }

    const debugFilters = () =>
    {
        console.clear();
        console.log("displayMode:", displayMode);
        console.log("searchBar:", searchBar);
        console.log("selectedObjectTypes:", selectedObjectTypes);
        console.log("selectedLoanStates:", selectedLoanStates);
        console.log("selectedExemplarConditions:", selectedExemplarConditions);
        console.log("selectedGroups:", selectedGroups);
        console.log("selectedStockingPlaces:", selectedStockingPlaces);
        console.log("selectedFilterOption:", selectedFilterOption);
        console.log("filterByAscOrder:", filterByAscOrder);
    }

    /**
     * Fetch data from the API.
     */
    useEffect(() =>
    {
        const fetchItems = async () =>
        {
            const data = await getItems();
            setFilters(data.filters);
            setItemsCommon(data.items_common);
        };

        fetchItems();
    }, []);

    /**
     * Initializes the items after fetching the data.
     */
    useEffect(() =>
    {
        filterItems();
        setIsLoading(false);
    }, [itemsCommon]);

    /**
     * Sets the filter option to prevent filtering
     * by a unknown field when switching display mode.
     */
    useEffect(() => setSelectedFilterOption(
        displayMode === t("objects", { ns: "item" })
            ? "name"
            : "inventory_prefix"), [displayMode]);

    /**
     * Filters the list of items common when a filter is updated.
     */
    useEffect(() => {
        debugFilters();
        filterItems();

    }, [displayMode, searchBar, selectedObjectTypes, selectedLoanStates, selectedExemplarConditions, selectedGroups, selectedStockingPlaces, selectedFilterOption, filterByAscOrder]);

    return (
        <div className="relative">
            <Filters
                setDisplayModeFunction={setDisplayMode}
                selectedDisplayMode={displayMode}

                searchBar={searchBar}
                setSearchbar={setSearchbar}

                objectTypes={filters.item_tags?.map(itemTag => itemTag.name)}
                selectedObjectTypes={selectedObjectTypes}
                setSelectedObjectTypes={setSelectedObjectTypes}

                loanStates={filters.loan_states?.map(loanState => loanState.name)}
                selectedLoanStates={selectedLoanStates}
                setSelectedLoanStates={setSelectedLoanStates}

                exemplarConditions={filters.item_conditions?.map(itemCondition => itemCondition.name)}
                selectedExemplarConditions={selectedExemplarConditions}
                setSelectedExemplarConditions={setSelectedExemplarConditions}

                groups={filters.item_groups?.map(itemGroup => itemGroup.name)}
                selectedGroups={selectedGroups}
                setSelectedGroups={setSelectedGroups}

                stockingPlaces={filters.stocking_places?.map(stockingPlace => stockingPlace.name)}
                selectedStockingPlaces={selectedStockingPlaces}
                setSelectedStockingPlaces={setSelectedStockingPlaces}

                filterOptions={displayMode === t("objects", { ns: "item" })
                    ? filterOptionsObjects
                    : filterOptionsExemplars}
                selectedFilterOption={selectedFilterOption}
                setSelectedFilterOption={setSelectedFilterOption}

                filterByAscOrder={filterByAscOrder}
                setFilterByAscOrder={setFilterByAscOrder}
            />

            {isLoading ? (
                <div className="mt-28">
                    <Loading />
                </div>
            ) : (
                <ItemsList
                    items={filteredItems}
                    displayExemplars={displayMode == t("objects", { ns: "item" })}
                />
            )}
        </div>
    )
}

export default Home;