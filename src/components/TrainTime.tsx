import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { TrainInfoTitle } from "../constants/Messages";
import { useGetTrainNoInfoQuery } from "../services/API";
import { RootState } from "../store";
import {
  StyledStationRote,
  StyleStationItem,
  StyleStationRoteSpan,
  StyleTrainInfoText,
  StyleUl,
} from "../styled/TrainTime";
import Stepper from "./Stepper";

interface props {
  Direction: boolean;
  DirectionStationVal: DesignatedStationType;
}

const TrainTime = ({ Direction, DirectionStationVal }: props) => {

  const TrainInfoText = (idx: number, title: string): string | number => {
    switch (idx) {
      case 0:
        return parseInt(DirectionStationVal.TrainNo);
      case 1:
        return DirectionStationVal.EndingStationName.Zh_tw;

      case 3:
        return "9-12車";

      default:
        return (DirectionStationVal as MapType)[title];
    }
  };

  return (
    <div id="TrainTime">
      <div className="train-info">
        {Object.keys(TrainInfoTitle).map((title: string, idx: number) => {
          return (
            <div key={idx}>
              <label>{TrainInfoTitle[title]}</label>
              {DirectionStationVal && (
                <StyleTrainInfoText $idx={idx} $direction={Direction}>
                  {TrainInfoText(idx, title)}
                </StyleTrainInfoText>
              )}
            </div>
          );
        })}
      </div>
      {DirectionStationVal &&
        <Stepper Direction={Direction} DirectionStationVal={DirectionStationVal} />
      }
    </div>
  );
};

export default TrainTime;
