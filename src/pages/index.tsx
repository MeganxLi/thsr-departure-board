import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AnalogClock from "../components/AnalogClock";
import { useGetDesignatedStationQuery } from "../services/API";
import { RootState } from "../store";
import { selectStation, selectStationName } from "../store/baseSlice";
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

  useEffect(() => {
    if (stationList.length === 0) return;

    const stationListIndex = stationList
      .map((item: StationType) => {
        return item.StationID;
      })
      .indexOf(selectStationVal.StationID);

    dispatch(selectStationName(stationList[stationListIndex].StationName.Zh_tw));
  }, [selectStationVal]);

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
        {/* NorthDirection 行車方向, true: 北, false: 南 */}
        <DirectionStation NorthDirection={false} />
        <AnalogClock />
        <DirectionStation NorthDirection={true} />
      </div>
    </>
  );
};

export default DepartureBoard;
