import rootReducer from "./reducers";
import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";

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

// const store = createStore(rootReducer, persistedStore);
const store = createStore(
  rootReducer,
  persistedStore,
  compose(applyMiddleware(thunk))
);

store.subscribe(() => {
  saveToLocalStorage({ list: store.getState().list });
});

export default store;
