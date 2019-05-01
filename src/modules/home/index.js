import ContainerComponent from "./components/ContainerComponent";
import { combineReducers } from "redux";

// Import all reducers
import * as reducers from "./reducers";

// This module should also do one named export
// of a combined reducer of all the reducers of this module
// Name of the combined reducer should same as that of the module
export const home = combineReducers(reducers);

// This module should export default only the container component
export default ContainerComponent;
