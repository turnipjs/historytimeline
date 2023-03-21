import {useSortable} from "@dnd-kit/sortable";
import {CSS} from "@dnd-kit/utilities";
import React from "react";

export default function EventCard({id, name, description}) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
    } = useSortable({id: id});

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        minWidth: "75px",
        width: "7vw",
        minHeight: "100px",
        padding: "1em",
        margin: ".5em",
        textAlign: "center",
        background: "#fff",
        display: "inline-block",
        fontSize: ".75em",
    };

    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
            <h3>{name}</h3>
            <p>{description}</p>
            <input type="date"/>
        </div>
    );
}
