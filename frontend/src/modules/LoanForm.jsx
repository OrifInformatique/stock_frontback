import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import Button from "../ui/Button";
import Heading from "../ui/Heading";
import InputDate from "../ui/InputDate";
import InputText from "../ui/InputText";
import Label from "../ui/Label";
import SingleSelect from "../ui/SingleSelect";
import Textarea from "../ui/Textarea";
import SegmentedControl from "../ui/SegmentedControl";
import { getUsers } from "../services/api/users";

const LoanForm = ({ setDisplayLoanForm, loanFormData, isReturn }) => {
    const { t } = useTranslation(["event", "buttons", "titles"]);
    const [users, setUsers] = useState([]);
    const [userType, setUserType] = useState(
        loanFormData?.borrower_email !== "" ? "external_person" : "site_user",
    );

    const [displayExternalUserSelect, setDisplayExternalUserSelect] = useState(
        loanFormData?.borrower_email !== "",
    );

    const [selectedUserId, setSelectedUserId] = useState(
        loanFormData?.borrower_user?.id ?? "",
    );

    useEffect(() => {
        const fetchUsers = async () => {
            const fetchedUsers = await getUsers();
            setUsers(fetchedUsers);
        };
        fetchUsers();
    }, []);

    useEffect(() => {
        setUserType(
            loanFormData?.borrower_email !== ""
                ? "external_person"
                : "site_user",
        );
        setDisplayExternalUserSelect(loanFormData?.borrower_email !== "");
    }, [loanFormData?.borrower_email]);

    return (
        <section className="flex justify-center">
            <form className="flex flex-col gap justify-center items-center">
                {/*Loan times*/}
                <fieldset className="flex flex-col">
                    <legend className="w-full">
                        <Heading
                            headingLevel={3}
                            title={t("loan_time", { ns: "titles" })}
                        />
                    </legend>
                    <div className="flex flex-row gap justify-evenly">
                        <div className="mr-1 flex flex-col">
                            <Label
                                forInput="loan_date"
                                label={t("loan_date", { ns: "event" })}
                            />
                            <InputDate
                                name={"loan_date"}
                                defaultValue={loanFormData?.date}
                                disabled={isReturn}
                            />
                        </div>
                        <div className="flex flex-col ml-1">
                            <div>
                                <Label
                                    forInput="planned_return_date"
                                    label={t("planned_return_date", {
                                        ns: "event",
                                    })}
                                />
                                <InputDate
                                    name={"planned_return_date"}
                                    defaultValue={
                                        loanFormData?.planned_return_date
                                    }
                                    disabled={isReturn}
                                />
                            </div>
                            <div>
                                <Label
                                    forInput="actual_return_date"
                                    label={t("actual_return_date", {
                                        ns: "event",
                                    })}
                                />
                                <InputDate
                                    name={"actual_return_date"}
                                    defaultValue={loanFormData?.return_date}
                                    disabled={!isReturn}
                                />
                            </div>
                        </div>
                    </div>
                </fieldset>
                {/* Loaner and place of loan */}
                <fieldset className="flex flex-col items-center">
                    <legend className="w-full text-center">
                        <Heading
                            headingLevel={3}
                            title={t("place_and_borrower", { ns: "titles" })}
                        />
                    </legend>
                    <div className="flex flex-col justify-center ">
                        <div>
                            <Label
                                forInput="loan_location"
                                label={t("loan_location", { ns: "event" })}
                            />
                            <InputText
                                name="loan_location"
                                defaultValue={loanFormData?.item_localisation}
                                disabled={isReturn}
                            />
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
                                selectedValue={
                                    userType === "external_person"
                                        ? t("external_person", { ns: "event" })
                                        : t("site_user", { ns: "event" })
                                }
                                onChangeFunction={(value) => {
                                    const isExternal =
                                        value ===
                                        t("external_person", { ns: "event" });
                                    setUserType(
                                        isExternal
                                            ? "external_person"
                                            : "site_user",
                                    );
                                    setDisplayExternalUserSelect(isExternal);
                                }} // Show external user select if "external_person" is selected
                                disabled={isReturn}
                                className="h-10"
                            />
                            {/*TODO: add segmented control */}
                        </div>
                        {displayExternalUserSelect ? (
                            <div>
                                <Label
                                    forInput="external_email"
                                    label={t("external_email", { ns: "event" })}
                                />
                                <InputText
                                    name="external_email"
                                    defaultValue={loanFormData?.borrower_email}
                                    disabled={isReturn}
                                />
                                {/* TODO: Since no mail component exists currently uses text input */}
                            </div>
                        ) : (
                            <div>
                                <Label
                                    forInput="select_user"
                                    label={t("site_user", { ns: "event" })}
                                />
                                {/* FIX: Bug where the default value is not selected */}
                                {users.length > 0 && (
                                    <SingleSelect
                                        options={users.map((user) => ({
                                            label: user.username,
                                            value: String(user.id),
                                        }))}
                                        name="select_user"
                                        selectedValue={selectedUserId}
                                        onChangeFunction={(value) =>
                                            setSelectedUserId(value)
                                        }
                                        disabled={isReturn}
                                    />
                                )}
                            </div>
                        )}
                        <div>
                            <Label
                                forInput="remarks"
                                label={t("remarks", { ns: "event" })}
                            />
                            <Textarea
                                name="remarks"
                                defaultValue={loanFormData?.remarks}
                                disabled={isReturn}
                                className="max-w-80 min-w-80 mb-4 h-28 min-h-6 sm:min-w-80 sm:max-w-full"
                            />
                        </div>
                    </div>
                </fieldset>
                <fieldset className="flex flex-row justify-evenly min-w-80 max-w-80">
                    <Button
                        label={t("cancel", { ns: "buttons" })}
                        className="w-32 h-fit my-4"
                        onClickFunction={() => setDisplayLoanForm(false)}
                    />
                    <Button
                        label={t("save", { ns: "buttons" })}
                        className="w-32 h-fit my-4 px-0"
                    />
                </fieldset>
            </form>
        </section>
    );
};

export default LoanForm;
