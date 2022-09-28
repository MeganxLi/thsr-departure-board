import React from "react";
import { TrainInfoTitle } from "../constants/Messages";

const text = ["南港", "台中"];
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
         <ul className="TrainStation">
            {text.map((TrainName: string, idx) => {
               return <li key={idx}> {TrainName}</li>;
            })}
         </ul>
      </div>
   );
};

export default TrainTime;
