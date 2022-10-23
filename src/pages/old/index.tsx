import { useAppSelector } from '../../store/hook'
import { useGetDesignatedStationQuery } from '../../services/API'
import AnalogClock from '../../components/AnalogClock'
import DirectionStation from './DirectionStation'
import { getNowTime } from '../../utils/dataprocessor'

const OldDepartureBoard = () => {
  const { selectStation } = useAppSelector((state) => state.base)

  // get station schedule
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { data } = useGetDesignatedStationQuery(selectStation, {
    pollingInterval: 60000, // 1 minute update data
    refetchOnMountOrArgChange: true
  })

  return (

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
  )
}

export default OldDepartureBoard
