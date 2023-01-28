import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import dataReducer from "../reducers/getusersCollection";
import userIDReducer from "../reducers/getIDSlice";
import userReducer from "../reducers/getCurrentUserSlice";
import videoReducer from "../reducers/getVideoSlice";
import ModalReducer from "../reducers/getModalSlice";
import CurrentDataReducer from "../reducers/getCurrentData";
import SetUserDataReducer from "../reducers/setUserData";
import setCourseDataReducer from "../reducers/setCourseData";
import CollectionReducer from "../reducers/setCourseContentSlice";

const rootReducer = combineReducers({
  user: userReducer,
  userId: userIDReducer,
  video: videoReducer,
  modal: ModalReducer,
  currentData: CurrentDataReducer,
  setUser: SetUserDataReducer,
  dataReducer,
  course: setCourseDataReducer,
  collection: CollectionReducer,
});

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["user", "video", "modal", "setUser", "collection"],
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
