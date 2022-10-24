import AnalogClock from '../../components/AnalogClock'
import { getNowTime } from '../../utils/dataprocessor'
import DirectionStation from './DirectionStation'

const NewDepartureBoard = () => {
  return (
    <div id="NewDepartureBoard">
      <p>
        <span>南下 Southbound</span>
        <span>Northbound 北上</span>
      </p>
      <DirectionStation Direction={false} />

      <div className="now-time">
        <AnalogClock />
        <div className="digital-clock">
          <p>現在時刻</p>
          <p>{getNowTime()}</p>
        </div>
      </div>

      <DirectionStation Direction={true} />
    </div>
  )
}

export default NewDepartureBoard
