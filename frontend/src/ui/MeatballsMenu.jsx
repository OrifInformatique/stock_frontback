import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

import Button from "./Button";
import { useTranslation } from "react-i18next";

/**
 * UI component to add a meatballs menu with personalized actions.
 *
 * @returns {JSX.Element}
 *
 */
const MeatballsMenu = ({ actions, className }) =>
{
    const [openMeatballsMenu, setOpenMeatballsMenu] = useState(false);

    const toggleMeatballsMenu = () =>
    {
        setOpenMeatballsMenu(prev => !prev);
    }

    return (
        <div className={`relative w-fit`}>
            <FontAwesomeIcon
                icon={faEllipsis}
                size="2xl"
                onClick={toggleMeatballsMenu}
                className="hover:cursor-pointer"
            />

            {openMeatballsMenu && (
                <div className="absolute top-8 right-0 flex flex-col min-w-max gap-2 p-2 bg-gray-300 rounded-md">
                    {actions.map(action => (
                        <Button
                            key={action.label}
                            icon={action.icon}
                            label={action.label}
                            keepLabel={true}
                            onClickFunction={action.action}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}

export default MeatballsMenu;