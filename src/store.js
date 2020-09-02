import { createStore } from "redux";

import reducer from "./reducers/index"; //'reducer' is the root reducer

const store = createStore(
  reducer,
  typeof window === "object" &&
    typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined"
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : (f) => f
); //'store' is the central repository which accepts a reducer

export default store;
