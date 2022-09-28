interface TitleType {
    [index: string]: string;
}

interface ParameterType {
    grant_type: string;
    client_id: string;
    client_secret: string;
}

interface TokenType {
    access_token: string;
    expires_in: number;
    refresh_expires_in: number;
    token_type: string;
    "not-before-policy": number;
    scope: string;
}

type StationType = {
    StationUID: string;
    StationID: string;
    StationCode: string;
    StationName: {
        Zh_tw: string;
        En: string;
    };
    StationAddress: string;
    OperatorID: string;
    UpdateTime: string;
    VersionID: number;
    StationPosition: {
        PositionLon: number;
        PositionLat: number;
        GeoHash: string;
    };
    LocationCity: string;
    LocationCityCode: string;
    LocationTown: string;
    LocationTownCode: string;
};
