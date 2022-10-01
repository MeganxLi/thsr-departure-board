import { createSlice } from "@reduxjs/toolkit";
import { api } from "../services/API";

const initialState = {
   getStationList: [] as StationType[],
};

export const baseSlice = createSlice({
   name: "base",
   initialState,
   reducers: {
      stationList: (state, action) => {
         console.log(state, action);
      },
   },
   extraReducers: (builder) => {
      builder.addMatcher(api.endpoints.getStation.matchFulfilled, (state, { payload }) => {
         state.getStationList = payload;
      });
   },
});

export const { stationList } = baseSlice.actions;

export default baseSlice.reducer;
