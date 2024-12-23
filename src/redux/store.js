import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contacts/slice";
import filterReducer from "./filters/slice";
import authReducer from "./auth/slice";
import modalReducer from "./modal/slice";
import themeReducer from "./theme/slice";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};
const persistTheme = {
  key: "theme",
  version: 1,
  storage,
  whitelist: ["darkTheme"],
};
const persistedReducerToken = persistReducer(authPersistConfig, authReducer);
const persistedReducerTheme = persistReducer(persistTheme, themeReducer);
export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    auth: persistedReducerToken,
    modal: modalReducer,
    theme: persistedReducerTheme,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        ignoredPaths: ["register"],
      },
    }),
});
export const persistor = persistStore(store);
