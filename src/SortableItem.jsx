
import React from 'react';
import {useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';

export function SortableItem(props) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
    } = useSortable({id: props.id});

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        minWidth: "75px",
        width: "7vw",
        minHeight: "100px",
        padding: "1em",
        margin: ".5em",
        textAlign: "center",
        background: "#eee",
        display: "inline-block",
        fontSize: ".75em",
    };

    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
            {props.children}
        </div>
    );
}
