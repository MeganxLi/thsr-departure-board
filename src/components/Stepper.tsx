import React, { useEffect, useState } from 'react'
import { useGetTrainNoInfoQuery } from '../services/API'
import { useAppSelector } from '../store/hook'
import { StyledStationRote, StyleStationItem, StyleStationRoteSpan, StyleUl } from '../styled/TrainTime'

interface props {
  Direction: boolean
  DirectionStationVal: DesignatedStationType
}

const Stepper = ({ Direction, DirectionStationVal }: props) => {
  const { selectStationName } = useAppSelector((state) => state.base)
  const { getStationList } = useAppSelector((state) => state.base)
  const { data } = useGetTrainNoInfoQuery({
    TrainNo: DirectionStationVal !== undefined ? DirectionStationVal.TrainNo : ''
  })
  const [StopStation, setStopStation] = useState<string[]>([])
  const getStationsList = Direction ? [...getStationList].reverse() : getStationList // 北上車站清單要倒序

  useEffect(() => {
    if (data != null) {
      let newDataStopStation: string[] = []
      data[0].StopTimes.map((item: StopTimesType) => {
        return (newDataStopStation = [...newDataStopStation, item.StationName.Zh_tw])
      })

      setStopStation(newDataStopStation)
    }
  }, [data])

  return (
    <StyleUl className="train-station" ListLength={getStationsList.length}>
      {StopStation.length !== 0 &&
        getStationsList.map((TrainName: StationType, idx) => {
          const HaveStopStation = !StopStation.includes(TrainName.StationName.Zh_tw)
          const SelectStation = selectStationName === TrainName.StationName.Zh_tw
          return (
            <StyleStationItem
              key={idx}
              $direction={Direction}
              $hiddenStation={HaveStopStation}
              $sameStation={SelectStation}
              className={SelectStation ? 'select-station' : undefined}
            >
              <div className="station-name">{TrainName.StationName.Zh_tw}</div>
              <StyledStationRote className="station-route">
                <StyleStationRoteSpan opacity={idx === 0 ? 0 : 1} className="station-route-left"></StyleStationRoteSpan>
                <StyleStationRoteSpan
                  opacity={idx === getStationsList.length - 1 ? 0 : 1}
                  className="station-route-right"
                ></StyleStationRoteSpan>
              </StyledStationRote>
            </StyleStationItem>
          )
        })}
    </StyleUl>
  )
}

export default Stepper
