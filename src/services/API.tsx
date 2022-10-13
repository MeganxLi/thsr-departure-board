import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import qs from "qs";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "",
    prepareHeaders: (headers, api) => {
      headers.set("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8");
      return headers;
    },
  }),
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
    }),
    getStation: builder.query<StationType[], any>({
      // 取得高鐵車站基本資料
      query: () => {
        return {
          url: "https://tdx.transportdata.tw/api/basic/v2/Rail/THSR/Station",
          method: "GET",
        };
      },
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
    }),
  }),
});

export const { useGetAuthorizationMutation, useGetStationQuery, useGetDesignatedStationQuery } = api;
