import NewTime from '../../components/NowTime'
import DirectionStation from './DirectionStation'

const OldDepartureBoard = () => {
  return (
    <div className="departure-board">
      {/* NorthDirection 行車方向, true: 北, false: 南 */}
      <DirectionStation NorthDirection={false} />
      <NewTime />
      <DirectionStation NorthDirection={true} />
    </div>
  )
}

export default OldDepartureBoard
