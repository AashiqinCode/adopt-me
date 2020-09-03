import { createStore } from "redux";
import pReducer from "./reducers/index"; //'reducer' is the root reducer

// redux-persist
import { persistStore } from "redux-persist";

export const store = createStore(
  pReducer,
  typeof window === "object" &&
    typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined"
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : (f) => f
); //'store' is the central repository which accepts a reducer

export const persistor = persistStore(store);
