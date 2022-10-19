import { useSelector } from "react-redux";
import AnalogClock from "../components/AnalogClock";
import { api, useGetAuthorizationQuery, useGetDesignatedStationQuery, useGetStationQuery } from "../services/API";
import { RootState, useAppDispatch } from "../store";
import { selectStation, selectStationName } from "../store/baseSlice";
import { getNowTime, getToday } from "../utils/dataprocessor";
import DirectionStation from "./DirectionStation";

const DepartureBoard = () => {
  const dispatch = useAppDispatch();
  //get token
  const {} = useGetAuthorizationQuery();
  const token = useSelector((state: RootState) => state.base.getToken);

  // get station list
  const {} = useGetStationQuery();
  const stationList = useSelector((state: RootState) => state.base.getStationList);
  const selectStationVal = useSelector((state: RootState) => state.base.selectStation);

  // get station schedule
  const { data, refetch } = useGetDesignatedStationQuery(selectStationVal, {
    pollingInterval: 60000, // 1 minute update data
    refetchOnMountOrArgChange: true,
  });

  const getSelectTrain = (e: any) => {
    const ChangeSelectVal = { StationID: e.target.value, TrainDate: getToday };
    dispatch(selectStation(ChangeSelectVal));

    // like RTK refetch()
    dispatch(api.endpoints.getDesignatedStation.initiate(ChangeSelectVal, { forceRefetch: true }));

    // select Station Name
    dispatch(selectStationName(stationList[e.target.selectedIndex].StationName.Zh_tw));
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
        {/* NorthDirection 行車方向, true: 北, false: 南 */}
        <DirectionStation NorthDirection={false} />

        <div className="now-time">
          <AnalogClock />
          <div className="digital-clock">
            <p>現在時刻</p>
            <p>{getNowTime}</p>
          </div>
        </div>

        <DirectionStation NorthDirection={true} />
      </div>
    </>
  );
};

export default DepartureBoard;
