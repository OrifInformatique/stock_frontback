import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom";
import { createPortal } from "react-dom";
import Event from "../modules/Event";
import { getEvents } from "../services/api/events";
import Link from "../ui/HTMLLink.jsx";
import Image from "../ui/Image.jsx";
import Button from "../ui/Button.jsx";
import AddControlForm from "../modules/AddControlForm.jsx";

const EventHistory = () => {
    const { t } = useTranslation(["event", "item"]);
    const [events, setEvents] = useState([]);
    const [info, setInfo] = useState({});
    const navigate = useNavigate();
    const location = useLocation();
    const [showControl, setShowControl] = useState(false);

    const [displayLoanForm, setDisplayLoanForm] = useState(false);

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

    return (
        <>
            <div className="flex justify-center flex-row">
                <div className="flex flex-col content-center">
                    <h1 className="text-4xl text-center">
                        {t("event_history", { ns: "event" })}
                    </h1>
                    <Link
                        to={location.state?.from?.pathname}
                        styleAsButton={true}
                        className="block w-fit mx-auto my-4"
                    >
                        {t("return_to_item", { ns: "event" })}
                    </Link>
                    <div className="p-3 bg-background mb-5 mt-0 rounded-md flex flex-row">
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
                    <h2 className="text-2xl text-center">
                        {t("event_list", { ns: "event" })}
                    </h2>
                    <div className="flex flex-row">
                        <Button
                            label={t("add_loan", { ns: "item" })}
                            onClickFunction={() => setDisplayLoanForm(true)}
                            className="block w-fit mx-auto my-4"
                        />
                        <Button
                            label={t("add_control", { ns: "item" })}
                            onClickFunction={() => setShowControl(true)}
                            className="w-fit h-fit mx-auto my-4"
                        />
                        {showControl &&
                            createPortal(
                                <AddControlForm
                                    onClose={() => setShowControl(false)}
                                />,
                                document.body,
                            )}
                    </div>
                </div>
            </div>
            <Event events={events} />
        </>
    );
};

export default EventHistory;
