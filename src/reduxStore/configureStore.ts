import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import AsyncStorage from "@react-native-async-storage/async-storage";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";

const persistConfig = {
  key: "root",
  version: 1,
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
};

const persistedReducer = persistReducer<any, any>(persistConfig, rootReducer);
export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
export const configureStore = () => {
  return { store, persistor };
};

// store.ts
export type RootState = ReturnType<typeof store.getState>;
