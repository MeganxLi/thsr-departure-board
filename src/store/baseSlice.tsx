import { createSlice } from "@reduxjs/toolkit";
import { api } from "../services/API";
import { getNowTime, getToday } from "../utils/dataprocessor";

const initialState = {
  getStationList: [] as StationType[],
  selectStation: {
    StationID: "0990",
    TrainDate: getToday,
  },
  getSouthDesignatedStation: [] as DesignatedStationType[],
  getNorthDesignatedStation: [] as DesignatedStationType[],
};

export const baseSlice = createSlice({
  name: "base",
  initialState,
  reducers: {
    selectStation: (state, action) => {
      state.selectStation = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(api.endpoints.getStation.matchFulfilled, (state, { payload }) => {
      state.getStationList = payload;
    });
    builder.addMatcher(api.endpoints.getDesignatedStation.matchFulfilled, (state, { payload }) => {
      const DepartureTimeStation = (direction: number) => {
        return payload.filter((StationItem: DesignatedStationType) => StationItem.DepartureTime > getNowTime && StationItem.Direction === direction
        )
      };
      state.getSouthDesignatedStation = DepartureTimeStation(0); // 南下
      state.getNorthDesignatedStation = DepartureTimeStation(1); // 北上
    });
  },
});

export const { selectStation } = baseSlice.actions;

export default baseSlice.reducer;
