import { selectStationVal, selectStationName } from '../store/baseSlice'
import { useAppDispatch, useAppSelector } from '../store/hook'
import { api, useGetDesignatedStationQuery } from '../services/API'
import AnalogClock from '../components/AnalogClock'
import DirectionStation from './DirectionStation'
import { getNowTime, getToday } from '../utils/dataprocessor'

const DepartureBoard = () => {
  const dispatch = useAppDispatch()
  const { getStationList } = useAppSelector((state) => state.base)
  const { selectStation } = useAppSelector((state) => state.base)

  // get station schedule
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { data } = useGetDesignatedStationQuery(selectStation, {
    pollingInterval: 60000, // 1 minute update data
    refetchOnMountOrArgChange: true
  })

  const getSelectTrain = (e: any) => {
    const ChangeSelectVal = { StationID: e.target.value, TrainDate: getToday() }
    dispatch(selectStationVal(ChangeSelectVal))

    // like RTK refetch()
    dispatch(api.endpoints.getDesignatedStation.initiate(ChangeSelectVal, { forceRefetch: true }))

    // select Station Name
    dispatch(selectStationName(getStationList[e.target.selectedIndex].StationName.Zh_tw))
  }

  return (
    <>
      <select value={selectStation.StationID} onChange={getSelectTrain}>
        {getStationList.map((TrainName: StationType, idx) => {
          return (
            <option key={idx} value={TrainName.StationID}>
              {TrainName.StationName.Zh_tw}
            </option>
          )
        })}
      </select>
      <div className="departure-board">
        {/* NorthDirection 行車方向, true: 北, false: 南 */}
        <DirectionStation NorthDirection={false} />

        <div className="now-time">
          <AnalogClock />
          <div className="digital-clock">
            <p>現在時刻</p>
            <p>{getNowTime()}</p>
          </div>
        </div>

        <DirectionStation NorthDirection={true} />
      </div>
    </>
  )
}

export default DepartureBoard
