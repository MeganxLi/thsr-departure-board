import { useDispatch, useSelector } from "react-redux";
import Marquee from "../components/Marquee";
import TrainTime from "../components/TrainTime";
import { useGetDesignatedStationQuery } from "../services/API";
import { RootState } from "../store";
import AnalogClock from "../components/AnalogClock";

const DepartureBoard = () => {
   const dispatch = useDispatch();
   const stationList = useSelector((state: RootState) => state.base.getStationList);
   const selectStation = useSelector((state: RootState) => state.base.selectStation);
   // const { data } = useGetDesignatedStationQuery(selectStation);

   const getSelectTrain = (e: any) => {
      console.log(e.target.value);
   };

   return (
      <div>
         <select onChange={getSelectTrain}>
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
