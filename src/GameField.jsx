import React, {useState} from "react";
import {
    closestCorners,
    DndContext,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors
} from "@dnd-kit/core";
import {
    arrayMove,
    horizontalListSortingStrategy,
    SortableContext,
    sortableKeyboardCoordinates
} from "@dnd-kit/sortable";
import EventCard from "./EventCard.jsx";
import Droppable from "./Droppable.jsx";

export default function GameField(props) {
    const [givenItems, setGivenItems] = useState(props.items);
    const [solutionItems, setSolutionItems] = useState([1]);
    const items = {
        "sortable-given": {items: givenItems, set: setGivenItems},
        "sortable-solution": {items: solutionItems, set: setSolutionItems}
    }
    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    const sortAreaBaseStyle = {
        width: "100%",
        height: "16em",
    }
    const givenAreaStyle = {
        ...sortAreaBaseStyle,
        background: "#ddd",
    }
    const solutionAreaStyle = {
        ...sortAreaBaseStyle,
        background: "#eee",
    }

    return <DndContext sensors={sensors} collisionDetection={closestCorners} onDragEnd={handleDragEnd} onDragOver={handleDragOver}>
        <SortableContext id="sortable-given" items={givenItems} strategy={horizontalListSortingStrategy}>
            <Droppable id="droppable-given" key="droppable-given" style={givenAreaStyle}>
                {givenItems.map(idToCard)}
            </Droppable>
        </SortableContext>
        <SortableContext id="sortable-solution" items={solutionItems} strategy={horizontalListSortingStrategy}>
            <Droppable id="droppable-solution" key="droppable-solution" style={solutionAreaStyle}>
                {solutionItems.map(idToCard)}
            </Droppable>
        </SortableContext>
    </DndContext>;

    function idToCard(eventId) {
        return <EventCard key={eventId} id={eventId} name={props.dict[eventId].name} description={props.dict[eventId].description}/>;
    }

    function handleDragOver(event) {
        const currentSortableId = event.active.data.current.sortable.containerId;
        const overSortableId = event.over.data.current.sortable.containerId;
        console.log("dragOver: ", overSortableId);
        console.dir(event);
        if (overSortableId !== currentSortableId) {
            const currentItems = items[currentSortableId].items;
            const currentSet = items[currentSortableId].set;
            const overItems = items[overSortableId].items;
            const overSet = items[overSortableId].set
            const draggedId = event.active.id;
            currentSet(currentItems.filter(id => id!==draggedId));
            overSet([...overItems, draggedId]);
        }
    }

    function handleDragEnd(event) {
        const targetSortableId = event.over.data.current.sortable.containerId;
        console.log("dragEnd: ", targetSortableId);
        console.dir(event);
        const targetItems = items[targetSortableId];
        const {active, over} = event;

        if (active.id !== over.id) {
            targetItems.set((items) => {
                const oldIndex = items.indexOf(active.id);
                const newIndex = items.indexOf(over.id);

                return arrayMove(items, oldIndex, newIndex);
            });
        }
    }
}
