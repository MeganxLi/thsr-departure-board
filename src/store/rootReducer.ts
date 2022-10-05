import { combineReducers } from "@reduxjs/toolkit";

import { api } from "../services/API";
import baseReducer from "./baseSlice";

const rootReducer = combineReducers({
    [api.reducerPath]: api.reducer,
    base: baseReducer,
});

export default rootReducer;
