import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import qs from "qs";
import { RootState } from "../store";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "",
    prepareHeaders: (headers, api) => {
      const token = (api.getState() as RootState).base.getToken;
      if (token) headers.set("authorization", `Bearer ${token}`);
      headers.set("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8");
      return headers;
    },
  }),
  tagTypes: ["Token", "Query"],
  endpoints: (builder) => ({
    // 獲取token
    getAuthorization: builder.mutation<TokenType, any>({
      query: () => {
        return {
          url: "https://tdx.transportdata.tw/auth/realms/TDXConnect/protocol/openid-connect/token",
          method: "POST",
          body: qs.stringify({
            grant_type: "client_credentials",
            client_id: process.env.REACT_APP_CLIENT_ID,
            client_secret: process.env.REACT_APP_CLIENT_SECRET,
          }),
        };
      },
      invalidatesTags: ["Token"],
    }),
    getStation: builder.query<StationType[], any>({
      // 取得高鐵車站基本資料
      query: () => {
        return {
          url: "https://tdx.transportdata.tw/api/basic/v2/Rail/THSR/Station",
          method: "GET",
        };
      },
      providesTags: ["Query"],
    }),
    getDesignatedStation: builder.query<DesignatedStationType[], selectStationType>({
      // 取得指定車站時刻表
      query: ({ StationID, TrainDate }) => {
        return {
          url: `https://tdx.transportdata.tw/api/basic/v2/Rail/THSR/DailyTimetable/Station/${StationID}/${TrainDate}`,
          method: "GET",
          params: { $select: "TrainDate,TrainNo,DepartureTime,EndingStationName", $format: "JSON" },
        };
      },
      providesTags: ["Query"],
    }),
    getTrainNoInfo: builder.query<TrainNoInfoType[], { TrainNo: string }>({
      // 取得指定列車號資訊
      query: ({ TrainNo }) => {
        return {
          url: `https://tdx.transportdata.tw/api/basic/v2/Rail/THSR/DailyTimetable/Today/TrainNo/${TrainNo}`,
          method: "GET",
          params: { $format: "JSON" },
        };
      },
    }),
  }),
});

export const { useGetAuthorizationMutation, useGetStationQuery, useGetDesignatedStationQuery, useGetTrainNoInfoQuery } =
  api;
