import rootReducer from "./reducers";
import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";

/**
 * @name saveToLocalStorage
 * @description method that updates the state to local storage for persistence
 * @param {*} state
 * @returns none
 */
const saveToLocalStorage = (state: any) => {
  try {
    localStorage.setItem("state", JSON.stringify(state));
  } catch (e) {
    console.error("Error on write localstorage");
  }
};

/**
 * @name loadFromLocalStorage
 * @description method that fetches the state from local storage to maintain persistence
 * @param none
 * @returns pre loaded state from local storage if present
 */
const loadFromLocalStorage = () => {
  try {
    const stateStr = localStorage.getItem("state");
    return stateStr ? JSON.parse(stateStr) : undefined;
  } catch (e) {
    console.error("e", e);
    return undefined;
  }
};

// Pre loaded state from state
const persistedStore = loadFromLocalStorage();

// const store = createStore(rootReducer, persistedStore);
const store = createStore(
  rootReducer,
  persistedStore,
  compose(applyMiddleware(thunk))
);

// When state will change the store will publish again to localstorage
store.subscribe(() => {
  saveToLocalStorage({ list: store.getState().list });
});

export default store;
