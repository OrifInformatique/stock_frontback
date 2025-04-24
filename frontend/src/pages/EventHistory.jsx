import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Event from "../modules/Event";
import { getEvents } from "../services/api/events";

const EventHistory = () => {
    const { t } = useTranslation("item");
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            const fetchedEvents = await getEvents();
            setEvents(fetchedEvents);
            console.log("Fetched events", fetchedEvents);
        };
        fetchEvents();
    }, []);
    return <Event events={events} />;
};

export default EventHistory;
