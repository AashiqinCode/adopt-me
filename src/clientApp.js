import React from "react";
import { hydrate } from "react-dom";
import App from "./App.js";

// any other browser only things -like google analytics ..

hydrate(<App />, document.getElementById("root"));
