import React from "react";
import { render } from "react-dom";

// import Pet from "./Pet.jsx";
import SearchParams from "./SearchParams";

const App = () => {
  // throw new Error("lol");

  // return React.createElement(

  //createElement(type,[props],[...children])
  //     "div",
  //     null,
  //     [
  //         React.createElement("h1", null, "Adopt Me!"),
  //         React.createElement(Pet, {
  //             name: "Luna",
  //             animal: "Dog",
  //             breed: "Havanese",
  //         }),
  //         React.createElement(Pet, {
  //             name: "Pepper",
  //             animal: "Bird",
  //             breed: "Cockatiel",
  //         }),
  //         React.createElement(Pet, {
  //             name: "Doink",
  //             animal: "Cat",
  //             breed: "Mix",
  //         }),
  //     ]
  // );

  return (
    <React.StrictMode>
      <div>
        <h1> Adopt Me! </h1>
        {/* <Pet name="Luna" animal="Dog" breed="Havanese" />
      <Pet name="Pepper" animal="Bird" breed="Cockatiel" />
      <Pet name="Doink" animal="Cat" breed="Mix" /> */}

        <SearchParams />
      </div>
    </React.StrictMode>
  );
};

// render(React.createElement(App), document.getElementById("root"));
render(<App />, document.getElementById("root"));
