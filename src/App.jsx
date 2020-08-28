import React, { useState } from "react";
import { render } from "react-dom";
// import Pet from "./Pet.jsx";
import SearchParams from "./SearchParams";
import { Router, Link } from "@reach/router";
import Details from "./Details";
import ThemeContext from "./ThemeContext";

// Hooks Components

// import StateComponent from "./Hooks/State";
// import EffectComponent from "./Hooks/Effect";
// import ContextComponent from "./Hooks/Context";
// import RefComponent from "./Hooks/Ref";
// import ReducerComponent from "./Hooks/Reducer";
// import MemoCommponent from "./Hooks/Memo";
// import CallbackComponent from "./Hooks/Callback";
// import LayoutEffectComponent from "./Hooks/Layout";
import ImperativeHandleComponent from "./Hooks/ImperativeHandler";

const App = () => {
  const themeHook = useState("darkblue");

  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <div>
          <header>
            <Link to="/">Adopt Me!</Link>
          </header>

          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};
render(<ImperativeHandleComponent />, document.getElementById("root"));
