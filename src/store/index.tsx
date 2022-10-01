import { configureStore } from "@reduxjs/toolkit";
import baseReducer from "./baseSlice";

export const store = configureStore({
   reducer: {
      base: baseReducer,
   },
});

export type RootState = ReturnType<typeof store.getState>;
