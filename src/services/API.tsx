import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";
import qs from "qs";

export const api = createApi({
   baseQuery: fetchBaseQuery({
      baseUrl: "https://tdx.transportdata.tw/auth/realms/TDXConnect/protocol/openid-connect/token",
      prepareHeaders: (headers, api) => {
         headers.set("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8");
         return headers;
      },
   }),
   endpoints: () => ({}),
});

//分離 API
const noStoreApi = api.injectEndpoints({
   endpoints: (builder) => ({
      // 獲取token
      getAuthorization: builder.mutation<TokenType, any>({
         query: () => {
            return {
               url: "",
               method: "POST",
               // body: {
               //     grant_type: "client_credentials",
               //     client_id: "aa147b258tw-101800a9-2ba1-4051",
               //     client_secret: "6249cf42-79c7-4fc6-8598-c63d4281c883",
               // },
               body: qs.stringify({
                  grant_type: "client_credentials",
                  client_id: "aa147b258tw-101800a9-2ba1-4051",
                  client_secret: "6249cf42-79c7-4fc6-8598-c63d4281c883",
               }),
            };
         },
      }),
   }),
});

export const { useGetAuthorizationMutation } = noStoreApi;
