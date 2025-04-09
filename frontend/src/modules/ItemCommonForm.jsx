import React from "react";

import Button from "../ui/Button";
import InputFileImage from "../ui/InputFileImage";
import { useTranslation } from "react-i18next";

/**
 * Displays the form to add or edit a item common.
 *
 * @returns {JSX.Element}
 *
 */
const ItemCommonForm = ({
    itemCommon = null,
    startCancelButton = false,
    endCancelButton = false,
    submitButton = false,
    cancelButtonOnClickFunction = null
}) =>
{
    const { t } = useTranslation("buttons");

    return (
        <div className="w-fit mx-auto my-4 space-y-2 p-4 bg-background">
            {startCancelButton &&
                <Button
                    label={t("cancel", { ns: "buttons" })}
                    onClickFunction={cancelButtonOnClickFunction}
                    className={"block w-fit mx-auto"}
                />
            }

            <div className="">
                <InputFileImage
                    name={"image"}
                />

                <div className="sm:flex sm:gap-8 sm:w-fit sm:mx-auto">
                    {(endCancelButton || submitButton) &&
                        <div className="flex gap-2 mt-4">
                            {endCancelButton &&
                                <Button
                                    label={t("cancel", { ns: "buttons" })}
                                    onClickFunction={cancelButtonOnClickFunction}
                                />
                            }

                            {submitButton &&
                                <Button
                                    type={"submit"}
                                    label={t("save", { ns: "buttons" })}
                                />
                            }
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default ItemCommonForm;