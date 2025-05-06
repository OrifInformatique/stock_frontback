import React from "react";
import { useTranslation } from "react-i18next";

/**
 * Item common card.
 *
 * @returns {JSX.Element}
 *
 */

const ItemInfo = ({ events }) => {
    const { t } = useTranslation("event");

    return (
        <section className="flex justify-center">
            <p>{events.name}</p>
        </section>
    );
};
export default ItemInfo;
