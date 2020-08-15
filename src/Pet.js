import React from 'react';
// Your script goes here.....
// A function component
export default function Pet(props) {
    // Destructuring the props
    const {
        name,
        animal,
        breed
    } = props;

    // Always maintain a div at the root of the element
    return React.createElement("div", {}, [
        React.createElement("h1", null, name),
        React.createElement("h2", {}, animal),
        React.createElement("h2", {}, breed),
    ]);
};