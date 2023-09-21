import { applyMiddleware, createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import reducer from "./slice";

const KEY = "root";

const persistConfig = {
  key: KEY,
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(persistedReducer, applyMiddleware(thunk));

const persistor = persistStore(store);

const handleStateChange = () => {
  const currentState = store.getState();
};
store.subscribe(handleStateChange);

export { store, persistor };
