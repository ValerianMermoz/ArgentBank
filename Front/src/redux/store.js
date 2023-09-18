import { applyMiddleware, createStore } from "redux";
import reducer from "./slice";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(persistedReducer, applyMiddleware(thunk));

const persistor = persistStore(store);

const handleStateChange = () => {
  const currentState = store.getState();
  console.log("state updated", currentState);
};
store.subscribe(handleStateChange);

export { store, persistor };
