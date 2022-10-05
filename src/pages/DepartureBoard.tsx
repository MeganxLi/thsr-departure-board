import { useDispatch, useSelector } from "react-redux";
import Marquee from "../components/Marquee";
import TrainTime from "../components/TrainTime";
import AnalogClock from "../components/AnalogClock";
import { useGetDesignatedStationQuery } from "../services/API";
import { RootState } from "../store";
import { selectStation } from "../store/baseSlice";
import { getToday } from "../utils/dataprocessor";

const DepartureBoard = () => {
  const dispatch = useDispatch();
  const stationList = useSelector((state: RootState) => state.base.getStationList);
  const selectStationVal = useSelector((state: RootState) => state.base.selectStation);
  const { data } = useGetDesignatedStationQuery(selectStationVal);

  const getSelectTrain = (e: any) => {
    dispatch(selectStation({ StationID: e.target.value, TrainDate: getToday }));
  };

  return (
    <div>
      <select value={selectStationVal.StationID} onChange={getSelectTrain}>
        {stationList.map((TrainName: StationType, idx) => {
          return (
            <option key={idx} value={TrainName.StationID}>
              {TrainName.StationName.Zh_tw}
            </option>
          );
        })}
      </select>
      <TrainTime />
      <Marquee />
      <AnalogClock />
    </div>
  );
};

export default DepartureBoard;
