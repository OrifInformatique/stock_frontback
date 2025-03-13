import React, { cloneElement } from "react";

import Image from "../components/Image";
import Heading from "../components/Heading";
import Tag from "../components/Tag";

/**
 * Exemplary card.
 *
 * @param {array} itemData The data of the item.
 *
 * @returns {JSX.Element}
 *
 */
const Item = ({ itemData }) =>
{
    let stateTagColor = "green", loanTagColor = "green";

    switch(itemData.loan_state)
    {
        case "En prêt":
            loanTagColor = "orange";
            break;

        case "Prêt en retard":
            loanTagColor = "red";
            break;
    }

    return (
        <div className="flex flex-col justify-items-stretch w-fit max-w-[310px] p-2 m-2 bg-background rounded-md break-words space-y-2 text-center">
            <Image
                src={itemData.image_url}
                alt={itemData.object_name}
                size={300}
            />

            <Heading
                headingLevel={3}
                title={itemData.object_name}
            />

            <p>{itemData.object_description}</p>

            <Tag
                text={itemData.state}
                color={stateTagColor}
            />

            <Tag
                text={itemData.loan_state}
                color={loanTagColor}
            />
        </div>
    )
}

export default Item;