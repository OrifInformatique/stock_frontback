import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import clsx from "clsx";

import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

import { Button } from "@orif-informatique/react-components-library";
import "../style.css"
/**
 * UI component to add a menu with personalized actions.
 *
 * @param {Array<any>} actions List of objects with a label, an icon, and an action. \
 * label: Text of the action. \
 * icon: Icon (FontAwesome) of the action. \
 * action: Function to execute when the action is clicked.
 *
 * @param {string} [className=null] Additional and specific styles for the button. Null by default.
 *
 * @returns {JSX.Element}
 *
 */
const Menu = ({
    actions,
    className = null
}) =>
{
    if(!actions || actions.length < 1)
    {
        console.error("Menu must have at least one action");
        return;
    }

    const { t } = useTranslation("buttons")

    const [openMenu, setOpenMenu] = useState(false);
    const [menuButtonIcon, setMenuButtonIcon] = useState(faBars);
    const [menuButtonLabel, setMenuButtonLabel] = useState(t("menu"));

    /**
     * Toggles the menu options and the text of the menu button.
     *
     * @returns {void}
     *
     */
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
        <div className={`absolute flex flex-col p-2 bg-blue-light ${className}`}>
            {openMenu && <div className="flex flex-col justify-center bg-[#005ba9] p-1 rounded-b-md appear">
            {openMenu &&
                actions.map(action => (
                    <Button
                        key={action.label}
                        icon={action.icon}
                        label={action.label}
                        keepLabel={true}
                        variant="secondary"
                        onClick={action.action}
                        className={clsx(
                            "!rounded-full !min-w-max appear"
                        )}
                    />
                )
            )}
            </div>}

            <Button
                icon={menuButtonIcon}
                label={menuButtonLabel}
                keepLabel={openMenu}
                onClick={toggleMenu}
                className={clsx(
                    "w-37",
                    openMenu && "rounded-b-[0]"
                )}
            />
        </div>
    )
}

export default Menu;