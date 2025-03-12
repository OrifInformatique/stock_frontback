import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next"
import { getItems } from "../services/api/items"

/**
 * Main page of the app. Default route ("/") leads to this page.
 *
 * @returns {JSX.Element}
 *
 */
const Home = () =>
{
    const { t } = useTranslation("example");
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchItems = async () =>
        {
            setItems(await getItems());
        };
        fetchItems();
    }, []);

    return (
        <div>
            <p>Home works!</p>

            <p>{t("example_language_entry")}</p>

            <pre>{JSON.stringify(items, null, 2)}</pre>
        </div>
    )
}

export default Home;