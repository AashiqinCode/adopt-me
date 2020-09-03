// Reducers are synchronous: they cannot be async. They also must be pure with no side-effects. If you call a reducer 10,000,000 times with the same state and action, you should get the same answer on the 10,000,001st time.

import { combineReducers } from "redux";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; //Weblocal storage in browser
// import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import location from "./location";
import theme from "./theme";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  location,
  theme,
});

export default persistReducer(persistConfig, rootReducer);
