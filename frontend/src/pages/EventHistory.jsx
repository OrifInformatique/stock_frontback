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
            <div className="flex justify-center flex-row">
                <div className="flex flex-col content-center">
                    <h1 className="text-4xl text-center">
                        Historique des évènements
                    </h1>
                    <div className="p-3 bg-zinc-300">
                        <Image
                            src={`/images/${info.image_url}`}
                            alt={`Image of ${info.name}`}
                            size={150}
                        />
                    </div>
                    <h2 className="text-2xl">Liste des évènements</h2>
                </div>
            </div>
            {/* <Button label={"test"} />; */}
            <Event events={events} />
        </>
    );
};

export default EventHistory;
