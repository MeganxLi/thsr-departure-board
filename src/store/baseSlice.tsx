import { createSlice } from "@reduxjs/toolkit";
import { api } from "../services/API";

const initialState = {
   getStationList: [] as StationType[],
   selectStation: {
      StationID: "1035",
      TrainDate: "2022-10-01",
   },
   getDesignatedStation: [] as DesignatedStationType[],
};

export const baseSlice = createSlice({
   name: "base",
   initialState,
   reducers: {
      stationList: (state, action) => {},
      selectStation: (state, action) => {
         console.log("selectStation", state, action);
      },
   },
   extraReducers: (builder) => {
      builder.addMatcher(api.endpoints.getStation.matchFulfilled, (state, { payload }) => {
         state.getStationList = payload;
      });
      builder.addMatcher(api.endpoints.getDesignatedStation.matchFulfilled, (state, { payload }) => {
         state.getDesignatedStation = payload;
      });
   },
});

export const { stationList } = baseSlice.actions;

export default baseSlice.reducer;
