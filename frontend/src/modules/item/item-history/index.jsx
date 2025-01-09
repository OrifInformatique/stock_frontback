import React from "react";
import { useParams } from "react-router-dom";

const ItemHistory = () => {
    const { id } = useParams();

    return (
        <h1>History for item {id}</h1>
    );
}

export default ItemHistory;