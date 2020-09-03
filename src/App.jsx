import React from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";
import { Router, Link } from "@reach/router";
import Details from "./Details";

import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";

// Details component is not needed for the first time of the render so its lazy loaded whenever we want to called

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>
        ;
        <PersistGate persistor={persistor}>
          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>
        </PersistGate>
      </div>
    </Provider>
  );
};
render(<App />, document.getElementById("root"));
