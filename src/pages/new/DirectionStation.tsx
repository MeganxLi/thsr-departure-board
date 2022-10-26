import React from 'react'
import { TrainInfoTitle } from '../../constants/Messages'
import { useAppSelector } from '../../store/hook'
import Stepper from './Stepper'

interface props {
  Direction: boolean
}
const DirectionStation = ({ Direction }: props) => {
  const { getStationList } = useAppSelector((state) => state.base)
  const { getNewNorthDesignatedStation } = useAppSelector((state) => state.base)
  const { getNewSouthDesignatedStation } = useAppSelector((state) => state.base)
  const getStationsList = Direction ? [...getStationList].reverse() : getStationList // 北上車站清單要倒序

  return (
    <div id="New_DirectionStation">
      <div className='new-station new-station-title'>
        {Object.values(TrainInfoTitle).map((title: string, idx: number) =>
          <span key={idx}> {title}</span>
        )}
        <div className='new-stop-station-title'>
          {getStationsList.map((list: StationType, idx: number) =>
            <span key={idx}>{list.StationName.Zh_tw}</span>
          )}
        </div>
      </div>
      {(Direction ? getNewNorthDesignatedStation : getNewSouthDesignatedStation).map((station: DesignatedStationType, idx: number) => {
        return (
          <div key={idx} className='new-station'>
            <span>{station.TrainNo}</span>
            <span>{station.EndingStationName.Zh_tw}</span>
            <span>{station.DepartureTime}</span>
            <span>9-10</span>
            <Stepper TrainNo={station.TrainNo} />
          </div>
        )
      })}

    </div>
  )
}

export default DirectionStation
