import { TrainInfoTitle } from '../../constants/Messages'
import { StationArrayLength } from '../../constants/NormType'
import { useAppSelector } from '../../store/hook'
import { StyledNewTrainTime } from '../../styled/DirectionStation'
import { getNowTime } from '../../utils/dataprocessor'
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
        <div className='new-stop-station'>
          {getStationsList.map((list: StationType, idx: number) =>
            <span key={idx}>{list.StationName.Zh_tw}</span>
          )}
        </div>
      </div>
      {(Direction ? getNewNorthDesignatedStation : getNewSouthDesignatedStation).map((station: DesignatedStationType, idx: number) => {
        let comingSoonTime: boolean = false // 是否即將到站時間

        // 即將到時間接近2分鐘才變色
        comingSoonTime = (parseInt(getNowTime().replace(':', '')) - parseInt(station.DepartureTime.replace(':', '')) >= -2)
        console.log(parseInt(getNowTime().replace(':', '')) - parseInt(station.DepartureTime.replace(':', '')), comingSoonTime)

        return (
          <StyledNewTrainTime
            key={idx}
            className='new-station'
            $direction={Direction}
            $comingSoon={comingSoonTime}
          >
            <span>{station.TrainNo}</span>
            <span>{station.EndingStationName.Zh_tw}</span>
            <span>{station.DepartureTime}</span>
            <span>9-10</span>
            <Stepper Direction={Direction} getStationsList={getStationsList} TrainNo={station.TrainNo} />
          </StyledNewTrainTime>
        )
      })}
      { // 補齊剩餘陣列
        Array(StationArrayLength.new - (Direction ? getNewNorthDesignatedStation.length : getNewSouthDesignatedStation.length))
          .fill('')
          .map((item: any, idx: number) =>
            <StyledNewTrainTime
              key={idx}
              className='new-station'
              $direction={Direction}
              $comingSoon={false}
            >
            </StyledNewTrainTime>
          )
      }

    </div>
  )
}

export default DirectionStation
