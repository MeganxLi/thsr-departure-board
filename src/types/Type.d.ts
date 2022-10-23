interface TitleType {
  [index: string]: string
}

interface MapType {
  [key: string]: any
}

interface baseStateType {
  getToken: string | null
  getStationList: StationType[]
  selectStation: selectStationType
  selectStationName: string
  getSouthDesignatedStation: DesignatedStationType[]
  getNorthDesignatedStation: DesignatedStationType[]
}

interface ParameterType {
  grant_type: string
  client_id: string
  client_secret: string
}

interface TokenType {
  access_token: string
  expires_in: number
  refresh_expires_in: number
  token_type: string
  'not-before-policy': number
  scope: string
}

interface StationType {
  StationUID: string
  StationID: string
  StationCode: string
  StationName: {
    Zh_tw: string
    En: string
  }
  StationAddress: string
  OperatorID: string
  UpdateTime: string
  VersionID: number
  StationPosition: {
    PositionLon: number
    PositionLat: number
    GeoHash: string
  }
  LocationCity: string
  LocationCityCode: string
  LocationTown: string
  LocationTownCode: string
}

interface selectStationType {
  StationID: string
  TrainDate: string
}

interface DesignatedStationType {
  TrainDate: string
  StationID?: string
  StationName?: {
    Zh_tw: string
    En: string
  }
  TrainNo: string
  Direction: number // 行駛方向 0：南下, 1: 北上
  StartingStationID?: string
  StartingStationName?: {
    Zh_tw: string
    En: string
  }
  EndingStationID?: string
  EndingStationName: {
    Zh_tw: string
    En: string
  }
  ArrivalTime?: string
  DepartureTime: string
  UpdateTime: string
  VersionID: number
}

interface StopTimesType {
  StopSequence: number
  StationID: string
  StationName: {
    Zh_tw: string
    En: string
  }
  ArrivalTime: string
  DepartureTime: string
}

interface TrainNoInfoType {
  TrainDate: string
  DailyTrainInfo: {
    TrainNo: string
    Direction: number
    StartingStationID: string
    StartingStationName: {
      Zh_tw: string
      En: string
    }
    EndingStationID: string
    EndingStationName: {
      Zh_tw: string
      En: string
    }
    Note: {}
  }
  StopTimes: StopTimesType[]
  UpdateTime: string
  VersionID: number
}

interface PageListType {
  name: string
  path: string
  element: JSX.Element
}
