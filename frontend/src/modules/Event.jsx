import React from "react";
import { useTranslation } from "react-i18next";

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
            <p>{loan.borrower_email}</p>
            <p className="font-bold">{t("loan_location")}</p>
            <p>{loan.item_localisation}</p>
            <p className="font-bold">{t("remarks")}</p>
            <p>{loan.remarks}</p>
        </>
    );
};

const Event = ({ events }) => {
    const { t } = useTranslation("event");

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
        <section className="flex justify-center">
            <div className="divide-y-2 divide-zinc-600">
                {events?.map((event, index) => (
                    <details
                        key={`${event.type}-${event.inventory_control_id ?? ""}${event.loan_id ?? ""}`}
                        className="w-96 bg-zinc-300"
                    >
                        <summary className="bg-zinc-500 pt-2 pb-2 list-none flex select-none content-center">
                            <span className="bg-zinc-300 rounded-2xl ml-2 px-2 py-0.4 content-center">
                                {event.date}
                            </span>
                            <span className="text-xl text-white pl-2 content-center">
                                {t(event.type)}
                            </span>
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
