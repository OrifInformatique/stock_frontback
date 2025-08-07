import React from "react";
import { useTranslation } from "react-i18next";
import Button from "../ui/Button";
import InputDate from "../ui/InputDate";
import Textarea from "../ui/Textarea";
import { createPortal } from "react-dom";
import Label from "../ui/Label";

/**
 * Handles the submit of the control form.
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

    try {
        const response = fetch("/api/controls", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });
        console.log("Control form submitted successfully:", response);
    } catch (error) {
        console.error("Error submitting control form:", error);
    }

    // ============================================== //
    // Future POST request to backend will go here... //
    // ============================================== //
};

const AddControlForm = ({ open, onClose, controlFormData }) => {
    const { t } = useTranslation(["buttons", "item", "event"]);
    if (!open) return null;
    return createPortal(
        <section className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <form
                className="bg-background p-6 rounded-lg shadow-lg min-w-80 min-h-64"
                onSubmit={handleNewControlSubmit}
            >
                <fieldset className="flex flex-row">
                    <div className="flex flex-col">
                        <p>{t("controller", { ns: "event" })}</p>
                        <p>
                            {/* TODO: Insert user name here*/}
                            {controlFormData?.controller ||
                                t("unknown", { ns: "event" })}
                        </p>
                    </div>
                    <div className="ml-auto">
                        <Label
                            forInput="control_date"
                            label={t("control_date", { ns: "event" })}
                        />
                        <InputDate
                            name="control_date"
                            defaultValue={controlFormData?.date}
                        />
                    </div>
                </fieldset>

                <Label
                    forInput="remarks_field"
                    label={t("remarks", { ns: "item" })}
                />
                <Textarea
                    name="remarks_field"
                    className="mb-4 h-28 min-w-80 min-h-6 max-w-full max-h-full resize"
                    defaultValue={controlFormData?.remarks}
                />
                <fieldset className="flex flex-row">
                    <Button
                        label={t("cancel", { ns: "buttons" })}
                        onClickFunction={onClose}
                        className="w-fit h-fit mr-3 ml-auto"
                    />
                    <Button
                        label={t("add", { ns: "buttons" })}
                        type="submit"
                        className="w-fit h-fit"
                    />
                </fieldset>
            </form>
        </section>,
        document.body,
    );
};

export default AddControlForm;
