import React from "react";
import { useTranslation } from "react-i18next"

/**
 * Main page of the app. Default route ("/") leads to this page.
 *
 * @returns {JSX.Element}
 *
 */
const Home = () =>
{
    const { t } = useTranslation("example");

    return (
        <div>
            <p>Home works!</p>

            <p>{t("example_language_entry")}</p>
        </div>
    )
}

export default Home;