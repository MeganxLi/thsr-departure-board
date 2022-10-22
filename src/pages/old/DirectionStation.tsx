import { useAppSelector } from '../../store/hook'
import Marquee from '../../components/Marquee'
import TrainTime from '../../components/TrainTime'
import { StyleDirectionPlatform } from '../../styled/DirectionStation'

interface props {
  NorthDirection: boolean
}

const DirectionStation = ({ NorthDirection }: props) => {
  const { getNorthDesignatedStation } = useAppSelector((state) => state.base)
  const { getSouthDesignatedStation } = useAppSelector((state) => state.base)

  return (
    <div>
      <StyleDirectionPlatform $direction={NorthDirection}>
        {NorthDirection ? '北上月台' : '南下月台'}
      </StyleDirectionPlatform>
      <TrainTime
        Direction={NorthDirection}
        DirectionStationVal={NorthDirection ? getNorthDesignatedStation[0] : getSouthDesignatedStation[0]}
      />
      <Marquee />
      <TrainTime
        Direction={NorthDirection}
        DirectionStationVal={NorthDirection ? getNorthDesignatedStation[1] : getSouthDesignatedStation[1]}
      />
    </div>
  )
}

export default DirectionStation
