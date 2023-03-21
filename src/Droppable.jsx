import {useDroppable} from "@dnd-kit/core";

export default function Droppable(props) {
    const {setNodeRef} = useDroppable({
        id: props.id,
    });

    return (
        <div id={props.id} ref={setNodeRef} style={props.style}>
            {props.children}
        </div>
    );
}
