import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import qs from 'qs'
import { RootState } from '../store'

const TdxUrl: string = 'https://tdx.transportdata.tw'
const TdxTHSR: string = '/api/basic/v2/Rail/THSR'

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: '',
    prepareHeaders: (headers, api) => {
      const token = (api.getState() as RootState).base.getToken
      if (token != null) headers.set('authorization', `Bearer ${token}`)
      headers.set('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8')
      return headers
    }
  }),
  tagTypes: ['Token', 'Query', 'Station'],
  endpoints: (builder) => ({
    // 獲取token
    getAuthorization: builder.query<TokenType, void>({
      query: () => {
        return {
          url: `${TdxUrl}/auth/realms/TDXConnect/protocol/openid-connect/token`,
          method: 'POST',
          body: qs.stringify({
            grant_type: process.env.REACT_APP_GRANT_TYPE,
            client_id: process.env.REACT_APP_CLIENT_ID,
            client_secret: process.env.REACT_APP_CLIENT_SECRET
          })
        }
      },
      providesTags: ['Token']
    }),
    getStation: builder.query<StationType[], void>({
      // 取得高鐵車站基本資料
      query: () => {
        return {
          url: `${TdxUrl}${TdxTHSR}/Station`,
          method: 'GET'
        }
      },
      providesTags: ['Query']
    }),
    getDesignatedStation: builder.query<DesignatedStationType[], selectStationType>({
      // 取得指定車站時刻表
      query: ({ StationID, TrainDate }) => {
        return {
          url: `${TdxUrl}${TdxTHSR}/DailyTimetable/Station/${StationID}/${TrainDate}`,
          method: 'GET',
          params: { $select: 'TrainDate,TrainNo,DepartureTime,EndingStationName', $format: 'JSON' }
        }
      },
      providesTags: ['Station']
    }),
    getTrainNoInfo: builder.query<TrainNoInfoType[], { TrainNo: string }>({
      // 取得指定列車號資訊
      query: ({ TrainNo }) => {
        return {
          url: `${TdxUrl}${TdxTHSR}/DailyTimetable/Today/TrainNo/${TrainNo}`,
          method: 'GET',
          params: { $format: 'JSON' }
        }
      }
    })
  })
})

export const { useGetAuthorizationQuery, useGetStationQuery, useGetDesignatedStationQuery, useGetTrainNoInfoQuery } =
  api
