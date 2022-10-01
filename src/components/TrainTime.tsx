import React from "react";
import { useSelector } from "react-redux";
import { TrainInfoTitle } from "../constants/Messages";
import { RootState } from "../store";

const TrainTime = () => {
   const StationList = useSelector((state: RootState) => state.base.getStationList);

   return (
      <div id="TrainTime">
         <div className="TrainInfo">
            {Object.keys(TrainInfoTitle).map((title: string, idx: number) => {
               return (
                  <div key={idx}>
                     <label>{TrainInfoTitle[title]}</label>
                     <span>123</span>
                  </div>
               );
            })}
         </div>
         <ul className="TrainStation">
            {StationList.map((TrainName: StationType, idx) => {
               return <li key={idx}> {TrainName.StationName.Zh_tw}</li>;
            })}
         </ul>
      </div>
   );
};

export default TrainTime;
