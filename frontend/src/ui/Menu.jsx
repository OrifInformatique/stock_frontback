import React, { useState } from "react";

import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

import Button from "./Button";
import { useTranslation } from "react-i18next";

/**
 * UI component to add a menu with personalized actions.
 *
 * @returns {JSX.Element}
 *
 */
const Menu = ({ actions, className }) =>
{
    const { t } = useTranslation("misc")

    const [openMenu, setOpenMenu] = useState(false);
    const [menuButtonIcon, setMenuButtonIcon] = useState(faBars);
    const [menuButtonLabel, setMenuButtonLabel] = useState(t("menu"));

    const toggleMenu = () =>
    {
        setOpenMenu(prev => {
            const isMenuOpen = !prev;

            setMenuButtonIcon(isMenuOpen ? faXmark : faBars);
            setMenuButtonLabel(isMenuOpen ? t("close") : t("menu"));

            return isMenuOpen;
        });
    }

    return (
        <div className={`flex flex-col gap-2 w-full p-2 bg-blue-light rounded-[28px] ${className}`}>
            {openMenu &&
                actions.map(action => (
                    <Button
                        key={action.label}
                        icon={action.icon}
                        label={action.label}
                        keepLabel={true}
                        onClickFunction={action.action}
                        className={"!rounded-full"}
                    />
                )
            )}

            <Button
                icon={menuButtonIcon}
                label={menuButtonLabel}
                keepLabel={openMenu}
                onClickFunction={toggleMenu}
                className={"!rounded-full"}
            />
        </div>
    )
}

export default Menu;