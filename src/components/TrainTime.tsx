import { TrainInfoTitle } from '../constants/Messages'
import { StyleTrainInfoText } from '../styled/TrainTime'
import Stepper from './Stepper'

interface props {
  Direction: boolean
  DirectionStationVal: DesignatedStationType | null
}

const TrainTime = ({ Direction, DirectionStationVal = null }: props) => {
  const TrainInfoText = (idx: number, title: string, DirectionStation: DesignatedStationType): string | number => {
    switch (idx) {
      case 0:
        return parseInt(DirectionStation.TrainNo)
      case 1:
        return DirectionStation.EndingStationName.Zh_tw

      case 3:
        return '9-12車'

      default:
        return (DirectionStation as MapType)[title]
    }
  }

  return (
    <div id="TrainTime">
      <div className="train-info">
        {Object.keys(TrainInfoTitle).map((title: string, idx: number) => {
          return (
            <div key={idx}>
              <label>{TrainInfoTitle[title]}</label>
              {(DirectionStationVal != null) && (
                <StyleTrainInfoText $idx={idx} $direction={Direction}>
                  {TrainInfoText(idx, title, DirectionStationVal)}
                </StyleTrainInfoText>
              )}
            </div>
          )
        })}
      </div>
      {(DirectionStationVal != null) && <Stepper Direction={Direction} DirectionStationVal={DirectionStationVal} />}
    </div>
  )
}

export default TrainTime
