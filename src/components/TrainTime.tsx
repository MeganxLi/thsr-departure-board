import React from "react";
import { useSelector } from "react-redux";
import { TrainInfoTitle } from "../constants/Messages";
import { RootState } from "../store";
import { StyledStationRote, StyleStationItem, StyleStationRoteSpan, StyleUl } from "../styled/TrainTime";

const TrainTime = () => {
   const StationList = useSelector((state: RootState) => state.base.getStationList);

   return (
      <div id="TrainTime">
         <div className="train-info">
            {Object.keys(TrainInfoTitle).map((title: string, idx: number) => {
               return (
                  <div key={idx}>
                     <label>{TrainInfoTitle[title]}</label>
                     <span>123</span>
                  </div>
               );
            })}
         </div>
         <StyleUl className="train-station" ListLength={StationList.length}>
            {StationList.map((TrainName: StationType, idx) => {
               return (
                  <StyleStationItem key={idx}>
                     <div className="station-name">{TrainName.StationName.Zh_tw}</div>
                     <StyledStationRote className="station-route">
                        <StyleStationRoteSpan
                           opacity={idx === 0 ? 0 : 1}
                           className="station-route-left"
                        ></StyleStationRoteSpan>
                        <StyleStationRoteSpan
                           opacity={idx === StationList.length - 1 ? 0 : 1}
                           className="station-route-right"
                        ></StyleStationRoteSpan>
                     </StyledStationRote>
                  </StyleStationItem>
               );
            })}
         </StyleUl>
      </div>
   );
};

export default TrainTime;
