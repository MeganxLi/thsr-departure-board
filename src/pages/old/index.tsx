
import AnalogClock from '../../components/AnalogClock'
import DirectionStation from './DirectionStation'
import { getNowTime } from '../../utils/dataprocessor'

const OldDepartureBoard = () => {
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
