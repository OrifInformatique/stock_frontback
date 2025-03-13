import React, { useEffect, useState } from "react";

import Item from "../modules/Item"

import { getItems } from "../services/api/items"

/**
 * List of all exemplars corresponding to the selected filters.
 *
 * @param {array} exemplars List of exemplars.
 *
 * @returns {JSX.Element}
 *
 */
const ItemsList = () =>
{
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchItems = async () =>
        {
            const data = await getItems();
            setItems(data.items);
        };
        fetchItems();
    }, []);

    return (
        <>
            {/*<pre>{JSON.stringify(items, null, 2)}</pre>*/}

            <section className="p-2 flex flex-wrap justify-center">
                {items.length > 0 &&
                    items.map(item => (
                        <Item
                            key={item.id}
                            itemData={item}
                        />
                    ))
                }
            </section>

        </>
    )
}

export default ItemsList;