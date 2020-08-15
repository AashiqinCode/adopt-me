import React from 'react';
import {
    render
} from 'react-dom';

import
Pet
from './Pet';
const App = () => {
    // throw new Error("lol");
    return React.createElement(
        //createElement(type,[props],[...children])

        "div",
        null,
        [
            React.createElement("h1", null, "Adopt Me!"),
            React.createElement(Pet, {
                name: "Luna",
                animal: "Dog",
                breed: "Havanese",
            }),
            React.createElement(Pet, {
                name: "Pepper",
                animal: "Bird",
                breed: "Cockatiel",
            }),
            React.createElement(Pet, {
                name: "Doink",
                animal: "Cat",
                breed: "Mix",
            }),
        ]
    );
};
render(React.createElement(App), document.getElementById("root"));