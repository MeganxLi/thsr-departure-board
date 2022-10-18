import { createSlice } from "@reduxjs/toolkit";
import { api } from "../services/API";
import { getNowTime, getToday } from "../utils/dataprocessor";

const initialState: baseStateType = {
  getToken: "",
  getStationList: [],
  selectStation: {
    StationID: "0990",
    TrainDate: getToday,
  },
  selectStationName: "南港",
  getSouthDesignatedStation: [],
  getNorthDesignatedStation: [],
};

export const baseSlice = createSlice({
  name: "base",
  initialState,
  reducers: {
    selectStation: (state, action) => {
      state.selectStation = action.payload;
    },
    selectStationName: (state, action) => {
      state.selectStationName = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(api.endpoints.getAuthorization.matchFulfilled, (state, { payload }) => {
      console.log("payload.access_token", payload.access_token);
      state.getToken = payload.access_token;
    });
    builder.addMatcher(api.endpoints.getStation.matchFulfilled, (state, { payload }) => {
      state.getStationList = payload;
    });
    builder.addMatcher(api.endpoints.getDesignatedStation.matchFulfilled, (state, { payload }) => {
      // console.log("payload", payload);

      const DepartureTimeStation = (direction: number) => {
        return payload.filter(
          (StationItem: DesignatedStationType) =>
            StationItem.DepartureTime > getNowTime && StationItem.Direction === direction
        );
      };
      console.log(DepartureTimeStation(0)[0], DepartureTimeStation(1)[0]);

      state.getSouthDesignatedStation = DepartureTimeStation(0); // 南下
      state.getNorthDesignatedStation = DepartureTimeStation(1); // 北上
    });
  },
});

export const { selectStation, selectStationName } = baseSlice.actions;

export default baseSlice.reducer;
