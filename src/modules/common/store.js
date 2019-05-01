import { combineReducers, createStore } from "redux";

// Notice the import here,
// We are not referring to the reducer file inside the modules folder here
// This makes the internals of the module opaque to the user of the module
import { home } from "../home";

const createRootReducer = () => {
  return combineReducers({
    home
  });
};

// This function is named export as well as default exported at the bottom
// Named exported => So that it can be used as a part of the common module
// Default exported => So that it can be used as a separate module.
export const configureStore = () => {
  const rootReducer = createRootReducer();

  // Add your middleware and redux dev tools enhancer here
  const store = createStore(rootReducer);
  return store;
};

export default configureStore;
