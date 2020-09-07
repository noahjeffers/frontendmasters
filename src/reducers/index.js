import { combineReducers } from "redux";
import location from "./location.js";
import theme from "./theme";

export default combineReducers({
    location,
    theme,
});
