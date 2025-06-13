import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Event from "../modules/Event";
import { getEvents } from "../services/api/events";
// import Link from "../ui/HTMLLink.jsx";
import Button from "../ui/Button";
import Image from "../ui/Image.jsx";

const EventHistory = () => {
    const { t } = useTranslation("event");
    const [events, setEvents] = useState([]);
    const [info, setInfo] = useState({});
    const navigate = useNavigate();

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
                    <Button
                        onClickFunction={() => {
                            if (window.history.length > 1) {
                                window.history.back();
                            } else {
                                navigate("/");
                            }
                        }} // HACK: Currently only works if comming from a previous page if comming from a link from another platform it won't be able to go anywhere
                        label={t("return_to_item")}
                    ></Button>
                    {/* <Link */}
                    {/*     to={ */}
                    {/* <Navigate to="/nextpath" state={{ from: location }} /> */}
                    {/*     } */}
                    {/*     styleAsButton={true} */}
                    {/* > */}
                    {/*     {t("return_to_item")} */}
                    {/* </Link> */}
                    {/* TODO: search if it is possible to get the last pages url
					FIX: after looking it seems it is not possible to get the last pages url whithout sending it first
					but there are ways to do it pretty easely in react-router-dom or we could use the browsers history of pages but that could create issues
					but in both versions we need to use a button and not a link as they are functions that need to be called*/}
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
                    <h2 className="text-2xl text-center">{t("event_list")}</h2>
                </div>
            </div>
            <Event events={events} />
        </>
    );
};

export default EventHistory;
