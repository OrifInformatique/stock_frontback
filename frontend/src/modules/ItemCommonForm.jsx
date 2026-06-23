import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import { getAllObjectTypes } from "../services/api/item_tags";
import { getAllGroups } from "../services/api/groups";
import { Textarea, Button, InputFile, InputFileImage,
Label, MultiSelect, SingleSelect, InputText} from "@orif-informatique/react-components-library";
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

    const [objectTypes, setObjectTypes] = useState([]);
    const [groups, setGroups] = useState([]);

    /**
     * Fetch data from the API.
     */
    useEffect(() =>
    {
        const fetchData = async () =>
        {
            setObjectTypes(await getAllObjectTypes());
            setGroups(await getAllGroups());
        }

        fetchData();
    }, []);

    return (
        <div className="w-fit mx-auto my-4 space-y-2 sm:p-4 bg-background">
            {startCancelButton &&
                <Button
                    label={t("cancel", { ns: "buttons" })}
                    onClick={cancelButtonOnClickFunction}
                    className={"block w-fit mx-auto"}
                />
            }

            <div className="sm:flex sm:gap-8 p-4">
                <InputFileImage
                    name={"image"}
                    imagePreviewSize={275}
                />

                <div>
                    <Label
                        forInput={"name"}
                        label={t("name", { ns: "item" })}
                    />

                    <InputText
                        name={"name"}
                        defaultValue={itemCommon?.name}
                    />

                    <Label
                        forInput={"description"}
                        label={t("description", { ns: "item" })}
                    />

                    <Textarea
                        name={"description"}
                        defaultValue={itemCommon?.description}
                        rows={5}
                    />

                    {groups.length > 0 && (
                        <>
                            <Label
                                forInput={"group"}
                                label={t("group", { ns: "item" })}
                            />

                            <SingleSelect
                                name={"group"}
                                options={groups?.map(group => (
                                    {
                                        value: group.name,
                                        label: group.name
                                    }))
                                }
                                defaultValue={itemCommon?.group}
                            />
                        </>
                    )}

                    <Label
                        forInput={"object-type"}
                        label={t("object_type", { ns: "item" })}
                    />

                    <MultiSelect
                        name={"object-type"}
                        options={objectTypes?.map(objectType => objectType.name)}
                        defaultValues={itemCommon?.item_tags}
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