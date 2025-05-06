import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Event from "../modules/Event";
import ItemInfo from "../modules/ItemCommonEvent.jsx";
import { getEvents } from "../services/api/events";

const EventHistory = () => {
    const { t } = useTranslation("item");
    const [events, setEvents] = useState([]);
    const [itemInfo, setItemInfo] = useState({});

    useEffect(() => {
        const fetchEvents = async () => {
            const fetchedEvents = await getEvents();
            fetchedEvents.events
                .sort((a, b) => new Date(a.date) - new Date(b.date))
                .reverse();
            setEvents(fetchedEvents);
            fetchedEvents.events.pop();
            setItemInfo(fetchedEvents);
            console.log("Fetched events", fetchEvents);
        };
        fetchEvents();
    }, []);

    return (
        <>
            <ItemInfo events={itemInfo} />;
            <Event events={events} />;
        </>
    );
};

export default EventHistory;
