import {
  configureStore,
  combineReducers,
} from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import appSlice from "./slices/appSlice";

const persistConfig = {
  key: "appSlice", // key is a unique identifier for the persisted data
  storage,
};

const persistedAppReducer = persistReducer(persistConfig, appSlice);

const rootReducer = combineReducers({
  appSlice: persistedAppReducer,
  // Add other slices or reducers here if needed
});

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);
export default store;
