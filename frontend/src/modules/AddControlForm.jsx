import React from "react";
import { useTranslation } from "react-i18next";
import Button from "../ui/Button";
import InputDate from "../ui/InputDate";
import TextArea from "../ui/Textarea";

/**
 * Handles the submit of the exemplar form.
 *
 * @param {Event}
 *
 * @returns {void}
 *
 */
const handleNewControlSubmit = (event) => {
    event.preventDefault();

    const formData = Object.fromEntries(new FormData(event.target).entries());
    console.log(formData);

    // ============================================== //
    // Future POST request to backend will go here... //
    // ============================================== //
};

const AddControlForm = ({ onClose }) => {
    const { t } = useTranslation(["buttons", "item", "event"]);
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <form
                className="bg-background p-6 rounded-lg shadow-lg min-w-96 min-h-64"
                onSubmit={handleNewControlSubmit}
            >
                <div className="flex flex-row">
                    <div className="flex flex-col">
                        <p>{t("controller", { ns: "event" })}</p>
                        <p>
                            {/* TODO: Insert user name here*/}
                            Undefined
                        </p>
                    </div>
                    <div className="ml-auto">
                        <p>{t("control_date", { ns: "event" })}</p>
                        <InputDate name="InputDate" />
                    </div>
                </div>
                <p>{t("remarks", { ns: "item" })}</p>
                <TextArea className="mb-4 h-28" />
                <div className="flex flex-row">
                    <Button
                        label={t("cancel", { ns: "buttons" })}
                        onClickFunction={onClose}
                        className="w-fit h-fit mr-3 ml-auto"
                    />
                    <Button
                        label={t("add", { ns: "buttons" })}
                        className="w-fit h-fit"
                    />
                </div>
            </form>
        </div>
    );
};

export default AddControlForm;
