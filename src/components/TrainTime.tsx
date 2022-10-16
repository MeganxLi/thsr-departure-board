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

interface props {
  Direction: boolean;
  DirectionStationVal: DesignatedStationType;
}

const TrainTime = ({ Direction, DirectionStationVal }: props) => {
  const selectStationNameVal = useSelector((state: RootState) => state.base.selectStationName);
  const ApiStationList = useSelector((state: RootState) => state.base.getStationList);
  const { data } = useGetTrainNoInfoQuery({
    TrainNo: DirectionStationVal !== undefined ? DirectionStationVal.TrainNo : "",
  });
  const [StopStation, setStopStation] = useState<string[]>([]);
  const getStationsList = Direction ? [...ApiStationList].reverse() : ApiStationList; //北上車站清單要倒序

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

  useEffect(() => {
    if (data) {
      let newDataStopStation: string[] = [];
      data[0].StopTimes.map((item: StopTimesType) => {
        return (newDataStopStation = [...newDataStopStation, item.StationName.Zh_tw]);
      });

      setStopStation(newDataStopStation);
    }
  }, [data]);
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
        <StyleUl className="train-station" ListLength={getStationsList.length}>
          {StopStation.length !== 0 &&
            getStationsList.map((TrainName: StationType, idx) => {
              const HaveStopStation = StopStation.indexOf(TrainName.StationName.Zh_tw) === -1;
              const SelectStation = selectStationNameVal === TrainName.StationName.Zh_tw;
              return (
                <StyleStationItem
                  key={idx}
                  $direction={Direction}
                  $hiddenStation={HaveStopStation}
                  $sameStation={SelectStation}
                  className={SelectStation ? "select-station" : undefined}
                >
                  <div className="station-name">{TrainName.StationName.Zh_tw}</div>
                  <StyledStationRote className="station-route">
                    <StyleStationRoteSpan
                      opacity={idx === 0 ? 0 : 1}
                      className="station-route-left"
                    ></StyleStationRoteSpan>
                    <StyleStationRoteSpan
                      opacity={idx === getStationsList.length - 1 ? 0 : 1}
                      className="station-route-right"
                    ></StyleStationRoteSpan>
                  </StyledStationRote>
                </StyleStationItem>
              );
            })}
        </StyleUl>}
    </div>
  );
};

export default TrainTime;
