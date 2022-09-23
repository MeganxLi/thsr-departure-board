import React from "react";
import { TrainInfoTitle } from "../constants/Messages";

const TrainTime = () => {
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
         <div className="TrainStation"></div>
      </div>
   );
};

export default TrainTime;
