import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";

import baseAPI from "./api/baseApi";

import rootReducer from "../redux/rootReducer";
import storage from "redux-persist/lib/storage";

const middlewares = [baseAPI.middleware];

const persistConfig = {
  key: "smvs",
  storage,
  whitelist: ["auth"],
};

const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),
  devTools: process.env.NODE_ENV === "development",
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({ serializableCheck: false }).concat(
      middlewares
    );
  },
});

export default store;
