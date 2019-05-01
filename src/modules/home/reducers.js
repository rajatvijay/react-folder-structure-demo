import { TOGGLE_SIDEBAR } from "./actionsTypes";

// Have all the reducers here
export const sidebarVisibility = (state = false, { type, payload }) => {
  switch (type) {
    case TOGGLE_SIDEBAR:
      return payload;
    default:
      return state;
  }
};
