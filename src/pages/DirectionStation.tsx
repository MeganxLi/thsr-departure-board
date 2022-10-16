import { useSelector } from "react-redux";
import Marquee from "../components/Marquee";
import TrainTime from "../components/TrainTime";
import { DirectionMsg } from "../constants/Messages";
import { RootState } from "../store";
import { StyleDirectionPlatform } from "../styled/DirectionStation";

interface props {
  NorthDirection: boolean;
}

const DirectionStation = ({ NorthDirection }: props) => {
  const NorthStationVal = useSelector((state: RootState) => state.base.getNorthDesignatedStation);
  const SouthStationVal = useSelector((state: RootState) => state.base.getSouthDesignatedStation);

  return (
    <div>
      <StyleDirectionPlatform $direction={NorthDirection}>{NorthDirection ? "北上月台" : "南下月台"}</StyleDirectionPlatform>
      <TrainTime Direction={NorthDirection} DirectionStationVal={NorthDirection ? NorthStationVal[0] : SouthStationVal[0]} />
      <Marquee />
      <TrainTime Direction={NorthDirection} DirectionStationVal={NorthDirection ? NorthStationVal[1] : SouthStationVal[1]} />
    </div>
  );
};

export default DirectionStation;
