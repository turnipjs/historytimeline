import React, {useState} from 'react';
import {
    DndContext,
    closestCenter,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
    useDroppable
} from '@dnd-kit/core';
import {
    arrayMove,
    SortableContext,
    sortableKeyboardCoordinates,
    horizontalListSortingStrategy,
} from '@dnd-kit/sortable';

// import {SortableItem} from './SortableItem';
import GameField from "./GameField";


const sampleDict = {
    1: {
        name: "Sample Item Number One",
        description: "This is some text for SampleItem Number One, it is just some filler text to populate the interface during development. I need one more sentence here.",
        date: new Date("-001000-03-21T16:59:56.588Z"),
    },
    3: {
        name: "Sample Item Number Three",
        description: "This is some text for SampleItem Number Three, it is just some filler text to populate the interface during development. I need one more sentence here.",
        date: new Date("001000-03-21T16:59:56.588Z"),
    },
    4: {
        name: "Sample Item Number Four",
        description: "This is some text for SampleItem Number Four, it is just some filler text to populate the interface during development. I need one more sentence here.",
        date: new Date("002000-03-21T16:59:56.588Z"),
    },
    7: {
        name: "Sample Item Number Seven",
        description: "This is some text for SampleItem Number Seven, it is just some filler text to populate the interface during development. I need one more sentence here.",
        date: new Date("003000-03-21T16:59:56.588Z"),
    },
}
const sampleItemIds = [3,1,4,7]

export default function App() {
    return <div id="app"><GameField items={sampleItemIds} dict={sampleDict}></GameField></div>
    // return <><SortableZones items={[1,2,3,4]}></SortableZones></>
}


// function SortableZones(props) {
//     const [givenItems, setGivenItems] = useState(props.items);
//     const [solutionItems, setSolutionItems] = useState([]);
//     const sensors = useSensors(
//         useSensor(PointerSensor),
//         useSensor(KeyboardSensor, {
//             coordinateGetter: sortableKeyboardCoordinates,
//         })
//     );
//
//     let contextStyleBase={
//         background: "lightgrey",
//         width: "90vw",
//         display: "block",
//         height: "250px",
//     }
//     let startContextStyle = {
//         ...contextStyleBase,
//         background: "grey",
//     }
//
//     return (
//         <DndContext
//             sensors={sensors}
//             collisionDetection={closestCenter}
//             onDragEnd={handleDragEnd}
//         >
//             <div style={contextStyleBase}>
//                 <SortableContext
//                     items={items}
//                     strategy={horizontalListSortingStrategy}
//                     style={contextStyleBase}
//                 >
//                     <div>
//                         {items.map(item => <SortableItem key={item} id={item} />)}
//                     </div>
//                 </SortableContext>
//             </div>
//             <div >
//                 <SortableContext
//                     items={[]}
//                     strategy={horizontalListSortingStrategy}
//                 >
//                     <div style={startContextStyle}>
//                         {[].map(item => <SortableItem key={item} id={item} />)}
//                     </div>
//                 </SortableContext>
//             </div>
//         </DndContext>
//     );
//
//     function handleDragEnd(event) {
//         const {active, over} = event;
//
//         if (active.id !== over.id) {
//             setItems((items) => {
//                 const oldIndex = items.indexOf(active.id);
//                 const newIndex = items.indexOf(over.id);
//
//                 return arrayMove(items, oldIndex, newIndex);
//             });
//         }
//     }
// }
