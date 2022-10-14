import { useSelector } from 'react-redux';
import Marquee from '../components/Marquee';
import TrainTime from '../components/TrainTime';
import { Direction } from '../constants/Messages';
import { RootState } from '../store';
import { StyleDirectionPlatform } from '../styled/DirectionStation';

const DirectionStation = (props: any) => {
  const North: boolean = props.Direction === Direction.North; // 行車方向 true: 北, false: 南
  const NorthStationVal = useSelector((state: RootState) => state.base.getNorthDesignatedStation);
  const SouthStationVal = useSelector((state: RootState) => state.base.getSouthDesignatedStation);

  return (
    <div>
      <button onClick={() => console.log(NorthStationVal)}> click</button>
      <StyleDirectionPlatform $direction={North}>
        {North ? "北上月台" : "南下月台"}
      </StyleDirectionPlatform>
      <TrainTime Direction={North} DirectionStationVal={NorthStationVal[0]} />
      <Marquee />
      <TrainTime Direction={North} DirectionStationVal={NorthStationVal[1]} />
    </div>

  )
}

export default DirectionStation
