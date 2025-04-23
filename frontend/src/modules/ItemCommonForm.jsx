import React from "react";
import { useTranslation } from "react-i18next";

import Button from "../ui/Button";
import InputFile from "../ui/InputFile";
import InputFileImage from "../ui/InputFileImage";
import InputText from "../ui/InputText";
import Label from "../ui/Label";
import MultiSelect from "../ui/MultiSelect";
import SingleSelect from "../ui/SingleSelect";
import Textarea from "../ui/Textarea";

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
    const { t } = useTranslation(["buttons", "item", "misc"]);

    return (
        <div className="w-fit mx-auto my-4 space-y-2 sm:p-4 bg-background">
            {startCancelButton &&
                <Button
                    label={t("cancel", { ns: "buttons" })}
                    onClickFunction={cancelButtonOnClickFunction}
                    className={"block w-fit mx-auto"}
                />
            }

            <div className="sm:flex sm:gap-8 p-4">
                <InputFileImage
                    name={"image"}
                    imagePreviewSize={275}
                />

                <div className="">
                    <Label
                        forInput={"name"}
                        label={t("name", { ns: "item" })}
                    />

                    <InputText
                        name={"name"}
                        defaultValue={itemCommon?.name ?? ""}
                    />

                    <Label
                        forInput={"description"}
                        label={t("description", { ns: "item" })}
                    />

                    <Textarea
                        name={"description"}
                        defaultValue={itemCommon?.description ?? ""}
                        rows={5}
                    />

                    <Label
                        forInput={"group"}
                        label={t("group", { ns: "item" })}
                    />

                    <SingleSelect
                        name={"group"}
                        selectedValue={itemCommon?.group ?? ""}
                    />

                    <Label
                        forInput={"object-type"}
                        label={t("object_type", { ns: "item" })}
                    />

                    <MultiSelect
                        name={"object-type"}
                        selectedValues={itemCommon?.object_types ?? ""}
                    />

                    <Label
                        forInput={"linked-file"}
                        label={t("linked_file", { ns: "misc" })}
                    />

                    <InputFile
                        name={"linked-file"}
                    />

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