import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Event from "../modules/Event";
import { getEvents } from "../services/api/events";
import Button from "../ui/Button.jsx";
import Image from "../ui/Image.jsx";

const EventHistory = () => {
    const { t } = useTranslation("event");
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
            <div className="flex justify-center flex-row mb-5">
                <div className="flex flex-col content-center">
                    <h1 className="text-4xl text-center">
                        {t("event_history")}
                    </h1>
                    <Button label={t("return_to_item")} />
                    {/* TODO: check if it's item or object, add onclick link, check other changes that can be made*/}
                    <div className="p-3 bg-zinc-300 my-5 rounded-md flex flex-row">
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
                    <h2 className="text-2xl text-center">{t("events_list")}</h2>
                </div>
            </div>
            <Event events={events} />
        </>
    );
};

export default EventHistory;
