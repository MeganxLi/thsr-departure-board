import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { api } from "../services/API";
import rootReducer from "./rootReducer";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
