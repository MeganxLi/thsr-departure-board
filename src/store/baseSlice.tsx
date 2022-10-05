import { createSlice } from "@reduxjs/toolkit";
import { api } from "../services/API";
import { getToday } from "../utils/dataprocessor";

const initialState = {
  getStationList: [] as StationType[],
  selectStation: {
    StationID: "0990",
    TrainDate: getToday,
  },
  getDesignatedStation: [] as DesignatedStationType[],
};

export const baseSlice = createSlice({
  name: "base",
  initialState,
  reducers: {
    stationList: (state, action) => { },
    selectStation: (state, action) => {
      state.selectStation = action.payload;
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

export const { selectStation } = baseSlice.actions;

export default baseSlice.reducer;
