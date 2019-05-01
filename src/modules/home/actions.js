import { TOGGLE_SIDEBAR } from "./actionsTypes";

const actionCreator = type => payload => ({ type, payload });

// All Actions should have same signature
// They will take only one argument called payload
// Payload can have any data type
// Name of the action should be the same as the name of the actionType but in lowerCamelCase
export const toggleSidebar = actionCreator(TOGGLE_SIDEBAR);
