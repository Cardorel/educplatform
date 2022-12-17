import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import userIDReducer from "../reducers/getIDSlice";
import userReducer from "../reducers/getCurrentUserSlice";
import videoReducer from "../reducers/getVideoSlice";

const rootReducer = combineReducers({
  user: userReducer,
  userId: userIDReducer,
  video: videoReducer,
});

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["user", "video"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);