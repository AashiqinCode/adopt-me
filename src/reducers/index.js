// Reducers are synchronous: they cannot be async. They also must be pure with no side-effects. If you call a reducer 10,000,000 times with the same state and action, you should get the same answer on the 10,000,001st time.
import { combineReducers } from "redux";

import location from "./location";
import theme from "./theme";

export default combineReducers({
  location,
  theme,
});
