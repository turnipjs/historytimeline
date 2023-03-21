import React from 'react';
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
};
const sampleItemIds = [4,3,7];

export default function App() {
    return <div id="app"><GameField items={sampleItemIds} dict={sampleDict}></GameField></div>
}
