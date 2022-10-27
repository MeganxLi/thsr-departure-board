import React, { useEffect, useState } from 'react'
import { useGetTrainNoInfoQuery } from '../../services/API'
import { useAppSelector } from '../../store/hook'
import { StyleNewStepper } from '../../styled/Stepper'
import { handleStopStationArray } from '../../utils/dataprocessor'

interface props {
  Direction: boolean
  getStationsList: StationType[]
  TrainNo: string

}

const Stepper = ({ Direction, getStationsList, TrainNo }: props) => {
  const { selectStationName } = useAppSelector((state) => state.base)
  const { data } = useGetTrainNoInfoQuery({ TrainNo })
  const [StopStation, setStopStation] = useState<string[]>([])

  useEffect(() => {
    if (data != null) {
      setStopStation(handleStopStationArray(data[0].StopTimes))
    }
  }, [data])

  return (
    <div id="New_Stepper" className='new-stop-station'>
      {getStationsList.map((item: StationType, idx: number) => {
        const SelectStation = selectStationName === item.StationName.Zh_tw
        const LastStation = StopStation[StopStation.length - 1] === item.StationName.Zh_tw

        return (
          <StyleNewStepper
            key={idx}
            idx={idx}
            $direction={Direction}
            $hiddenStation={!StopStation.includes(item.StationName.Zh_tw)}
            $sameStation={SelectStation}
            className={`${SelectStation ? 'select-station' : ''} ${LastStation ? 'last-station' : ''}`}
            listLength={getStationsList.length}
          >
            <span className='new-station-route-left'></span>
            <span className='new-station-route-right'></span>
          </StyleNewStepper>
        )
      })}

    </div >
  )
}

export default Stepper
