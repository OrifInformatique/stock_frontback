import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import Button from "../ui/Button";
import Heading from "../ui/Heading";
import InputDate from "../ui/InputDate";
import InputNumber from "../ui/InputNumber";
import InputText from "../ui/InputText";
import Label from "../ui/Label";
import SingleSelect from "../ui/SingleSelect";
import Textarea from "../ui/Textarea";
import SegmentedControl from "../ui/SegmentedControl";

const LoanForm = () => {
    const { t } = useTranslation(["event", "buttons", "titles"]);

    const [displayExternalUserSelect, setDisplayExternalUserSelect] =
        useState(false);

    return (
        <section className="flex justify-center">
            <form className="flex-col gap">
                {/*Loan times*/}
                <fieldset className="flex flex-col">
                    <legend>
                        <Heading
                            headingLevel={3}
                            title={t("loan_time", { ns: "titles" })}
                        />
                    </legend>
                    <div className="flex flex-row">
                        <div>
                            <Label
                                forInput="loan_date"
                                label={t("loan_date", { ns: "event" })}
                            />
                            <InputDate name={"loan_date"} />
                        </div>
                        <div className="flex flex-col">
                            <div>
                                <Label
                                    forInput="planned_return_date"
                                    label={t("planned_return_date", {
                                        ns: "event",
                                    })}
                                />
                                <InputDate name={"planned_return_date"} />
                            </div>
                            <div>
                                <Label
                                    forInput="actual_return_date"
                                    label={t("actual_return_date", {
                                        ns: "event",
                                    })}
                                />
                                <InputDate name={"actual_return_date"} />
                            </div>
                        </div>
                    </div>
                </fieldset>
                {/* Loaner and place of loan */}
                <fieldset>
                    <legend>
                        <Heading
                            headingLevel={3}
                            title={t("place_and_borrower", { ns: "titles" })}
                        />
                    </legend>
                    <div className="flex flex-col">
                        <div>
                            <Label
                                forInput="loan_location"
                                label={t("loan_location", { ns: "event" })}
                            />
                            <InputText name="loan_location" />
                        </div>
                        <div>
                            <Label
                                forInput="user_type_select"
                                label={t("loaned_to", { ns: "event" })}
                            />
                            <SegmentedControl
                                name="user_type_select"
                                options={[
                                    t("site_user", { ns: "event" }),
                                    t("external_person", { ns: "event" }),
                                ]}
                                onChangeFunction={(value) => {
                                    setDisplayExternalUserSelect(
                                        value ===
                                            t("external_person", {
                                                ns: "event",
                                            }),
                                    );
                                }} // Show external user select if "external_person" is selected
                            />
                            {/*TODO: add segmented control */}
                        </div>
                        {!displayExternalUserSelect && (
                            <div>
                                <Label
                                    forInput="select_user"
                                    label={t("site_user", { ns: "event" })}
                                />
                                <SingleSelect
                                    options={[
                                        { label: "test", value: "test" },
                                        { label: "test2", value: "test2" },
                                    ]}
                                    name="select_user"
                                    // options={["test", "test2"]}
                                />
                            </div>
                        )}
                        {displayExternalUserSelect && (
                            <div>
                                <Label
                                    forInput="external_email"
                                    label={t("external_email", { ns: "event" })}
                                />
                                <InputText name="external_email" />
                                {/* TODO: Input text */}
                            </div>
                        )}
                        <div>
                            <Label
                                forInput="remarks"
                                label={t("remarks", { ns: "event" })}
                            />
                            <Textarea name="remarks" />
                        </div>
                    </div>
                </fieldset>
                <fieldset className="flex flex-row justify-evenly">
                    <Button
                        label={t("cancel", { ns: "buttons" })}
                        className="w-28 h-fit my-4"
                    />
                    <Button
                        label={t("save", { ns: "buttons" })}
                        className="w-28 h-fit my-4 px-0"
                    />
                </fieldset>
            </form>
        </section>
    );
};

export default LoanForm;
