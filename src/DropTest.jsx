import Droppable from "./Droppable.jsx";
import Draggable from "./Draggable.jsx";
import {DndContext} from "@dnd-kit/core";

export default function DropTest(props) {
    return (
        <DndContext onDragOver={handleDragOver} onDragEnd={handleDragEnd}>
            <Droppable id="1" style={{width: "20em", height: "20em", background: "green"}}>
                <Draggable id="A" style={{width: "10em", height: "10em", background: "purple"}}>Drag A</Draggable>
            </Droppable>
            <Droppable id="2" style={{width: "20em", height: "20em", background: "orange"}}>
                <Draggable id="B" style={{width: "10em", height: "10em", background: "blue"}}>Drag B</Draggable>
            </Droppable>
        </DndContext>
    )

    function handleDragOver(event) {
        console.log("dragOver: ");
        console.dir(event);
    }

    function handleDragEnd(event) {
        console.log("dragEnd: ");
        console.dir(event);
        document.getElementById(event.over.id).appendChild(document.getElementById(event.active.id))
    }
}
