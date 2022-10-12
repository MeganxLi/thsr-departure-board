import React from 'react';
import Marquee from '../components/Marquee';
import TrainTime from '../components/TrainTime';
import { Direction } from '../constants/Messages';
import { StyleDirectionPlatform } from '../styled/DirectionStation';

const DirectionStation = (props: any) => {
  const North: boolean = props.direction === Direction.North; // 行車方向 true: 北, false: 南

  return (
    <div>
      <StyleDirectionPlatform $direction={North}>
        {North ? "北上月台" : "南下月台"}
      </StyleDirectionPlatform>
      <TrainTime direction={North} />
      <Marquee />
      <TrainTime direction={North} />
    </div>

  )
}

export default DirectionStation
