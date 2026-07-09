import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import { getAllObjectTypes } from "../services/api/item_tags";
import { getAllGroups } from "../services/api/groups";
import PopUpContainer from "../ui/PopUpContainer";
import "../style.css"
import {
    Textarea, Button, InputFile, InputFileImage,
    Label, MultiSelect, SingleSelect, InputText
} from "@orif-informatique/react-components-library";
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
    cancelButtonOnClickFunction = null,
    title = "",
    setDisplayObjectForm = ()=>{}
}) => {
    const { t } = useTranslation(["buttons", "item", "misc"]);

    const [objectTypes, setObjectTypes] = useState([]);
    const [groups, setGroups] = useState([]);

    const handleObjectEditFormSubmit = (event) => {
        event.preventDefault();

        const formData = Object.fromEntries(new FormData(event.target).entries());
        console.log(formData);

        // ============================================== //
        // Future POST request to backend will go here... //
        // ============================================== //

        setDisplayObjectForm(false);
    }

    /**
     * Fetch data from the API.
     */
    useEffect(() => {
        const fetchData = async () => {
            setObjectTypes(await getAllObjectTypes());
            setGroups(await getAllGroups());
        }

        fetchData();
    }, []);

    return (
        <form onSubmit={handleObjectEditFormSubmit}>
            <PopUpContainer width="15rem" height="5rem" title={title} >
                <div className="appear">
                    {startCancelButton &&
                        <Button
                            label={t("cancel", { ns: "buttons" })}
                            onClick={cancelButtonOnClickFunction}
                            variant="secondary"
                            className={"block w-fit mx-auto"}
                        />
                    }

                    <div className="sm:flex sm:gap-8">
                        <InputFileImage
                            name={"image"}
                            imagePreviewSize={325}
                            labelText={t("upload_image", { ns: "buttons" })}
                        />

                        <div>
                            <Label
                                htmlFor={"name"}
                            >{t("name", { ns: "item" })}</Label>

                            <InputText
                                name={"name"}
                                defaultValue={itemCommon?.name}
                                className={"mb-2"}
                            />

                            <Label
                                htmlFor={"description"}
                            >{t("description", { ns: "item" })}</Label>

                            <Textarea
                                name={"description"}
                                defaultValue={itemCommon?.description}
                                rows={5}
                                className={"mb-2"}
                            />

                            {groups.length > 0 && (
                                <>
                                    <Label
                                        htmlFor={"group"}
                                    >{t("group", { ns: "item" })}</Label>

                                    <SingleSelect
                                        name={"group"}
                                        options={groups?.map(group => (
                                            {
                                                value: group.name,
                                                label: group.name
                                            }))
                                        }
                                        defaultValue={itemCommon?.group}
                                        className={"mb-2"}
                                    />
                                </>
                            )}

                            <Label
                                htmlFor={"object-type"}
                            >{t("object_type", { ns: "item" })}</Label>

                            <MultiSelect
                                name={"object-type"}
                                options={objectTypes?.map(objectType => objectType.name)}
                                defaultValues={itemCommon?.item_tags}
                                className={"mb-2"}
                            />

                            <Label
                                htmlFor={"linked-file"}
                            >{t("linked_file", { ns: "misc" })}</Label>

                            <InputFile
                                name={"linked-file"}
                                className={"mb-2"}
                                buttonLabel={t("link_file", { ns: "buttons" })}
                            />

                            {(endCancelButton || submitButton) &&
                                <div className="flex gap-2 mt-4">
                                    {endCancelButton &&
                                        <Button
                                            variant="secondary"
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
            </PopUpContainer>
        </form>
    )
}

export default ItemCommonForm;