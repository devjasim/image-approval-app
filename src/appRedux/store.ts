import rootReducer from "./reducers";
import { createStore } from "redux";

const saveToLocalStorage = (state: any) => {
  try {
    localStorage.setItem("state", JSON.stringify(state));
  } catch (e) {
    console.error(e);
  }
};

const loadFromLocalStorage = () => {
  try {
    const stateStr = localStorage.getItem("state");
    return stateStr ? JSON.parse(stateStr) : undefined;
  } catch (e) {
    console.error("e", e);
    return undefined;
  }
};

const persistedStore = loadFromLocalStorage();

const store = createStore(rootReducer, persistedStore);

store.subscribe(() => {
  saveToLocalStorage(store.getState());
});

export default store;
