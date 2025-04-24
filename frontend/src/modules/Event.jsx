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
            <p>
                <strong>{t("controlled_by")}</strong>
            </p>
            <p>{control.controller}</p>
            <p>
                <strong>Remarques</strong>
            </p>
            <p>{control.remarks}</p>
        </>
    );
};

const RetourDePret = ({ loanReturn }) => {
    const { t } = useTranslation("event");
    return (
        <>
            <p>
                <strong>Date du prêt</strong>
            </p>
            <p>{loanReturn.date}</p>
        </>
    );
};

const MiseEnPret = ({ loan }) => {
    const { t } = useTranslation("event");
    return (
        <>
            <p>
                <strong>Date de retour prévue</strong>
            </p>
            <p>{loan.planned_return_date}</p>
            <p>
                <strong>Prêté par</strong>
            </p>
            <p>{loan.loaner}</p>
            <p>
                <strong>Bénéficiaire du prêt</strong>
            </p>
            <p>{loan.borrower_email}</p>
            <p>
                <strong>Lieu du prêt</strong>
            </p>
            <p>{loan.item_localisation}</p>
            <p>
                <strong>Remarques</strong>
            </p>
            <p>{loan.remarks}</p>
        </>
    );
};

//TODO: Add components for the 3 case

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
        <div>
            {events.events?.map((event) => (
                <details open>
                    <summary>
                        {event.date} {t(event.type)}
                    </summary>
                    <ChooseComponent event={event} />
                </details>
            ))}
        </div>
    );
};

export default Event;
