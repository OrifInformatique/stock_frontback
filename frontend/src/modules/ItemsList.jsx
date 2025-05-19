import React, { useEffect, useState } from "react";

import NoResults from "../ui/NoResults";

import Item from "../modules/Item";
import ItemCommon from "../modules/ItemCommon";

/**
 * List of all exemplars corresponding to the selected filters.
 *
 * @param {array} exemplars List of exemplars.
 *
 * @returns {JSX.Element}
 *
 */
const ItemsList = ({
    items = [],
    displayExemplars
}) =>
{
    return (
        <section className="flex flex-wrap justify-center gap-4 mt-36 lg:mt-24 p-4">
            {items.length > 0 ? (
                displayExemplars ? items.map(itemCommon =>
                    <ItemCommon
                        key={itemCommon.id}
                        itemCommon={itemCommon}
                    />
                ) : items.map(exemplar =>
                    <Item
                        key={exemplar.id}
                        item={exemplar}
                    />
                )
            ) :
                <NoResults />
            }
        </section>
    )
}

export default ItemsList;