import { api } from '../services/API'
import { useAppDispatch, useAppSelector } from '../store/hook'
import { selectStationName, selectStationVal } from '../store/baseSlice'
import { getToday } from '../utils/dataprocessor'

const SelectStation = () => {
  const dispatch = useAppDispatch()
  const { getStationList } = useAppSelector((state) => state.base)
  const { selectStation } = useAppSelector((state) => state.base)

  const getSelectTrain = (e: any) => {
    const ChangeSelectVal = { StationID: e.target.value, TrainDate: getToday() }
    dispatch(selectStationVal(ChangeSelectVal))

    // like RTK refetch()
    dispatch(api.endpoints.getDesignatedStation.initiate(ChangeSelectVal, { forceRefetch: true }))

    // select Station Name
    dispatch(selectStationName(getStationList[e.target.selectedIndex].StationName.Zh_tw))
  }
  return (
    <select value={selectStation.StationID} onChange={getSelectTrain}>
      {getStationList.map((TrainName: StationType, idx) => {
        return (
          <option key={idx} value={TrainName.StationID}>
            {TrainName.StationName.Zh_tw}
          </option>
        )
      })}
    </select>
  )
}

export default SelectStation
