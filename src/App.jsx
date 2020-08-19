import React from "react";
import { render } from "react-dom";

// import Pet from "./Pet.jsx";
import SearchParams from "./SearchParams";
import { Router, Link } from "@reach/router";
import Details from "./Details";

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
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>

        <Router>
          <SearchParams path="/" />
          <Details path="/details/:id" />
        </Router>
      </div>
    </React.StrictMode>
  );
};

// render(React.createElement(App), document.getElementById("root"));
render(<App />, document.getElementById("root"));
