import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";
import qs from "qs";
import { ParameterType, TokenType } from "./Type";

export async function getAuthorizationAxios() {
   const res = await axios({
      method: "POST",
      url: `https://tdx.transportdata.tw/auth/realms/TDXConnect/protocol/openid-connect/token`,
      headers: { "content-type": "application/x-www-form-urlencoded" },
      data: qs.stringify({
         grant_type: process.env.REACT_APP_GRANT_TYPE!,
         client_id: process.env.REACT_APP_CLIENT_ID!,
         client_secret: process.env.REACT_APP_CLIENT_SECRET!,
      }),
   });
   return res.data;
}

const parameter = {
   grant_type: "client_credentials",
   client_id: "aa147b258tw-101800a9-2ba1-4051",
   client_secret: "6249cf42-79c7-4fc6-8598-c63d4281c883",
};

export const apiSlice = createApi({
   reducerPath: "apiSlice",
   // baseQuery: fetchBaseQuery({ baseUrl: "/" }),
   baseQuery: fetchBaseQuery(),
   endpoints: (builder) => ({
      // 獲取token
      getAuthorization: builder.mutation<TokenType, null>({
         query: () => ({
            method: "POST",
            url: `https://tdx.transportdata.tw/auth/realms/TDXConnect/protocol/openid-connect/token`,
            headers: { "content-type": "application/x-www-form-urlencoded" },
            data: qs.stringify(parameter),
         }),
      }),
   }),
});

export const { useGetAuthorizationMutation } = apiSlice;
