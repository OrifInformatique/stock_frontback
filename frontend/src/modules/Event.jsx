import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Button from "../ui/Button";
import AddControlForm from "./AddControlForm";
import Heading from "../ui/Heading";
import { faPen } from "@fortawesome/free-solid-svg-icons";

/**
 * Item common card.
 *
 * @returns {JSX.Element}
 *
 */

const Controle = ({ control }) => {
    const { t } = useTranslation("event");
    return (
        <>
            <p className="font-bold">{t("controlled_by")}</p>
            <p>{control.controller}</p>
            <p className="font-bold">{t("remarks")}</p>
            <p>{control.remarks}</p>
        </>
    );
};

const RetourDePret = ({ loanReturn }) => {
    const { t } = useTranslation("event");
    return (
        <>
            <p className="font-bold">{t("loan_date")}</p>
            <p>{loanReturn.loan_date}</p>
        </>
    );
};

const MiseEnPret = ({ loan }) => {
    const { t } = useTranslation("event");
    return (
        <>
            <div className="w-44 inline-block">
                <p className="font-bold w-full">{t("planned_return_date")}</p>
                <p className="w-full">{loan.planned_return_date}</p>
            </div>
            <div className="w-40 inline-block ml-5">
                <p className="font-bold w-full">{t("loaned_by")}</p>
                <p className="w-full">{loan.loaner}</p>
            </div>
            <p className="font-bold">{t("loaned_to")}</p>
            <p>
                {loan.borrower_email
                    ? loan.borrower_email
                    : loan.borrower_user.username}
            </p>
            <p className="font-bold">{t("loan_location")}</p>
            <p>{loan.item_localisation}</p>
            <p className="font-bold">{t("remarks")}</p>
            <p>{loan.remarks}</p>
        </>
    );
};

const Event = ({
    events,
    setDisplayLoanForm,
    setLoanFormData,
    combineLoanAndReturn,
    setIsReturn,
    setControlFormData,
    controlFormData,
}) => {
    const { t } = useTranslation("event");
    const [showControl, setShowControl] = useState(false);
    const [latestEventIsReturn, setLatestEventIsReturn] = useState(false);
    const [latestLoanData, setLatestLoanData] = useState({});

    useEffect(() => {
        const removed_controls = events.filter(
            (event) => event.type != "return" || event.type != "loan",
        );
        if (removed_controls[0]?.type == "return") {
            setLatestEventIsReturn(true);
        } else {
            setLatestEventIsReturn(false);
            setLatestLoanData(removed_controls[0]);
        }
    }, [events]);

    useEffect(() => {
        console.log(latestEventIsReturn);
    }, [latestEventIsReturn]);

    const ChooseComponent = ({ event }) => {
        switch (event.type) {
            case "control":
                return <Controle control={event} />;
            case "return":
                return <RetourDePret loanReturn={event} />;
            case "loan":
                return <MiseEnPret loan={event} />;
        }
    };

    return (
        <section>
            <header className="w-full content-center text-center">
                <Heading
                    headingLevel={3}
                    title={t("event_list", { ns: "event" })}
                    className="my-0"
                />
            </header>
            <div className="flex flex-row justify-evenly">
                {latestEventIsReturn ? (
                    <Button
                        label={t("add_loan", { ns: "item" })}
                        onClickFunction={() => {
                            setLoanFormData(null);
                            setIsReturn(false);
                            setDisplayLoanForm(true);
                        }}
                        className="w-44 h-fit my-4"
                    />
                ) : (
                    <Button
                        label={t("return_loan", { ns: "item" })}
                        onClickFunction={() => {
                            setLoanFormData(latestLoanData);
                            setIsReturn(true);
                            setDisplayLoanForm(true);
                        }}
                        className="w-44 h-fit my-4"
                    />
                )}

                <Button
                    label={t("add_control", { ns: "item" })}
                    onClickFunction={() => {
                        setShowControl(true);
                        setControlFormData(null);
                    }}
                    className="w-44 h-fit my-4 px-0"
                />
                {showControl && (
                    <AddControlForm
                        open={showControl}
                        onClose={() => setShowControl(false)}
                        controlFormData={controlFormData}
                    />
                )}
            </div>

            <div className="divide-y-2 divide-white w-full sm:w-fit">
                {events?.map((event, index) => (
                    <details
                        key={`${event.type}-${event.inventory_control_id ?? ""}${event.loan_id ?? ""}`}
                        className="w-full sm:w-96 bg-background"
                    >
                        <summary className="bg-blue/90 pt-2 pb-2 list-none flex select-none content-center">
                            <span className="bg-background rounded-2xl ml-2 px-2 py-0.4 content-center">
                                {event.date}
                            </span>
                            <span className="text-xl text-white pl-2 content-center">
                                {t(event.type)}
                            </span>
                            <Button
                                onClickFunction={() => {
                                    if (event.type === "loan") {
                                        setDisplayLoanForm(true);
                                        setLoanFormData(
                                            combineLoanAndReturn(
                                                event.loan_id,
                                                events,
                                            ),
                                        );
                                        setIsReturn(false);
                                    } else if (event.type === "return") {
                                        setDisplayLoanForm(true);
                                        setLoanFormData(
                                            combineLoanAndReturn(
                                                event.loan_id,
                                                events,
                                            ),
                                        );
                                        setIsReturn(true);
                                    } else {
                                        setShowControl(true);
                                        setControlFormData(event);
                                    }
                                }}
                                icon={faPen}
                                className="ml-auto mr-2 max-h-8 max-w-8"
                            />
                        </summary>
                        <div className="p-3">
                            <ChooseComponent event={event} />
                        </div>
                    </details>
                ))}
            </div>
        </section>
    );
};

export default Event;
