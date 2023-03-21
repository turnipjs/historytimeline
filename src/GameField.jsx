import React, {useState} from "react";
import {
    closestCenter,
    DndContext,
    KeyboardSensor,
    PointerSensor,
    useDroppable,
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

export default function GameField(props) {
    const [givenItems, setGivenItems] = useState(props.items);
    const [solutionItems, setSolutionItems] = useState([]);
    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );
    const {setNodeRef: setGivenDroppableRef} = useDroppable({
        id: 'droppable-given',
    });
    const {setNodeRef: setSolutionDroppableRef} = useDroppable({
        id: 'droppable-solution',
    });

    const sortAreaBaseStyle = {
        width: "100%",
        height: "20em",
    }
    const givenAreaStyle = {
        ...sortAreaBaseStyle,
        background: "#ddd",
    }
    const solutionAreaStyle = {
        ...sortAreaBaseStyle,
        background: "#eee",
    }

    return (<DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
        onDragOver={handleDragOver}
    >
        <div ref={setGivenDroppableRef}>
            <SortableContext
                items={givenItems}
                strategy={horizontalListSortingStrategy}
            >
                {givenItems.map(idToCard)}
            </SortableContext>
        </div>
        <div ref={setSolutionDroppableRef}>
            <SortableContext
                items={solutionItems}
                strategy={horizontalListSortingStrategy}
            >
                {solutionItems.map(idToCard)}
            </SortableContext>
        </div>
    </DndContext>)

    function idToCard(eventId) {
        return <EventCard key={eventId} id={eventId} name={props.dict[eventId].name} description={props.dict[eventId].description}/>;
    }

    function handleDragOver(event) {

    }

    function handleDragEnd(event) {
        console.dir(event);
        return;
        const {active, over} = event;

        if (active.id !== over.id) {
            setItems((items) => {
                const oldIndex = items.indexOf(active.id);
                const newIndex = items.indexOf(over.id);

                return arrayMove(items, oldIndex, newIndex);
            });
        }
    }
}
