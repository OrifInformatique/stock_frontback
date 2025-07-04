import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom";
import Event from "../modules/Event";
import { getEvents } from "../services/api/events";
import Link from "../ui/HTMLLink.jsx";
import Image from "../ui/Image.jsx";
import LoanForm from "../modules/LoanForm.jsx";
import Heading from "../ui/Heading.jsx";

const EventHistory = () => {
    const { t } = useTranslation(["event", "item"]);
    const [events, setEvents] = useState([]);
    const [info, setInfo] = useState({});
    const navigate = useNavigate();
    const location = useLocation();
    const [displayLoanForm, setDisplayLoanForm] = useState(false);
    const [loanFormData, setLoanFormData] = useState({});
    const [isReturn, setIsReturn] = useState(false);
    const [controlFormData, setControlFormData] = useState({});

    useEffect(() => {
        const fetchEvents = async () => {
            const fetchedEvents = await getEvents();
            const { events, ...info } = fetchedEvents;
            setEvents(
                events.sort((a, b) => new Date(b.date) - new Date(a.date)),
            );
            setInfo(info);
            console.log("Fetched events", events, info);
        };
        fetchEvents();
    }, []);

    const combineLoanAndReturn = (input, events) => {
        const loan = events.find(
            (event) => event.loan_id === input && event.type === "loan",
        );
        const return_data = events.find(
            (event) => event.loan_id === input && event.type === "return",
        );
        if (return_data) {
            loan["return_date"] = return_data.date;
        }
        return loan;
    };

    return (
        <>
            <div className="flex justify-center flex-row">
                <div className="flex flex-col justify-center items-center ">
                    <Heading
                        headingLevel={1}
                        title={t("event_history", { ns: "event" })}
                    />
                    <Link
                        to={location.state?.from?.pathname}
                        styleAsButton={true}
                        className="block w-fit mx-auto my-4"
                    >
                        {t("return_to_item", { ns: "event" })}
                    </Link>
                    <div className="p-3 bg-background mb-5 mt-0 rounded-md flex flex-row w-96">
                        <Image
                            src={`/images/${info.image_url}`}
                            alt={`Image of ${info.name}`}
                            size={150}
                        />
                        <div className="ml-4 w-full flex flex-col justify-center">
                            <p className="text-xl">{info.inventory_prefix}</p>
                            <p>{info.name}</p>
                        </div>
                    </div>
                    {displayLoanForm ? (
                        <LoanForm
                            setDisplayLoanForm={setDisplayLoanForm}
                            loanFormData={loanFormData}
                            isReturn={isReturn}
                        />
                    ) : (
                        <Event
                            events={events}
                            setDisplayLoanForm={setDisplayLoanForm}
                            setLoanFormData={setLoanFormData}
                            combineLoanAndReturn={combineLoanAndReturn}
                            setIsReturn={setIsReturn}
                            setControlFormData={setControlFormData}
                            isReturn={isReturn}
                            controlFormData={controlFormData}
                        />
                    )}
                </div>
            </div>
        </>
    );
};

export default EventHistory;
