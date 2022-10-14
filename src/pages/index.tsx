import { useDispatch, useSelector } from "react-redux";
import AnalogClock from "../components/AnalogClock";
import { Direction } from "../constants/Messages";
import { useGetDesignatedStationQuery } from "../services/API";
import { RootState } from "../store";
import { selectStation } from "../store/baseSlice";
import { getToday } from "../utils/dataprocessor";
import DirectionStation from "./DirectionStation";

const DepartureBoard = () => {
  const dispatch = useDispatch();
  const stationList = useSelector((state: RootState) => state.base.getStationList);
  const selectStationVal = useSelector((state: RootState) => state.base.selectStation);
  const { data } = useGetDesignatedStationQuery(selectStationVal);

  const getSelectTrain = (e: any) => {
    dispatch(selectStation({ StationID: e.target.value, TrainDate: getToday }));
  };

  return (
    <>
      <select value={selectStationVal.StationID} onChange={getSelectTrain}>
        {stationList.map((TrainName: StationType, idx) => {
          return (
            <option key={idx} value={TrainName.StationID}>
              {TrainName.StationName.Zh_tw}
            </option>
          );
        })}
      </select>
      <div className="departure-board">
        <DirectionStation Direction={Direction.South} />
        <AnalogClock />
        <DirectionStation Direction={Direction.North} />
      </div>
    </>
  );
};

export default DepartureBoard;
