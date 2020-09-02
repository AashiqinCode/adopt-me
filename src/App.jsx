import React, { useState, lazy, Suspense } from "react";
import { render } from "react-dom";
// import Pet from "./Pet.jsx";
import SearchParams from "./SearchParams";
import { Router, Link } from "@reach/router";
// import Details from "./Details";
import ThemeContext from "./ThemeContext";
import Navbar from "./Navbar";

// import moment from "moment";
// import _ from "lodash";

// console.log(moment, _);

// Details component is not needed for the first time of the render so its lazy loaded whenever we want to called
const Details = lazy(() => import("./Details"));

// Hooks Components

// import StateComponent from "./Hooks/State";
// import EffectComponent from "./Hooks/Effect";
// import ContextComponent from "./Hooks/Context";
// import RefComponent from "./Hooks/Ref";
// import ReducerComponent from "./Hooks/Reducer";
// import MemoCommponent from "./Hooks/Memo";
// import CallbackComponent from "./Hooks/Callback";
// import LayoutEffectComponent from "./Hooks/Layout";
// import ImperativeHandleComponent from "./Hooks/ImperativeHandler";

const App = () => {
  const themeHook = useState("darkblue");

  return (
    <>
      <React.StrictMode>
        <ThemeContext.Provider value={themeHook}>
          <div>
            {/* <header>
            <Link to="/">Adopt Me!</Link>
          </header> */}
            <Navbar />
            <Suspense fallback={<h1>loading route...</h1>}>
              <Router>
                <SearchParams path="/" />
                <Details path="/details/:id" />
              </Router>
            </Suspense>
          </div>
        </ThemeContext.Provider>
      </React.StrictMode>
    </>
  );
};
// render(<App />, document.getElementById("root"));
// hydrate(<App />, document.getElementById("root"));

export default App;

