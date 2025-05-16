import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Event from "../modules/Event";
import { getEvents } from "../services/api/events";
import Button from "../ui/Button.jsx";
import Image from "../ui/Image.jsx";

const EventHistory = () => {
    const { t } = useTranslation("item");
    const [events, setEvents] = useState([]);
    const [info, setInfo] = useState({});

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
            <h1>Historique des évènements</h1>
            <div>
                <Image src={"0046_picture.png"} size={100} />
            </div>
            {/* <Button label={"test"} />; */}
            <Event events={events} />
        </>
    );
};

export default EventHistory;
