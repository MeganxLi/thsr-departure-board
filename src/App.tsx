import "./styles/App.scss";
import { api, useGetAuthorizationQuery, useGetStationQuery } from "./services/API";
import DepartureBoard from "./pages";
import { useEffect } from "react";
import { useAppDispatch } from "./store/hook";

function App() {
  const dispatch = useAppDispatch();
  const { data } = useGetAuthorizationQuery(); // load page get token

  useEffect(() => {
    // get station list
    dispatch(api.endpoints.getStation.initiate());
  }, [data]);

  return <div className="App">{data ? <DepartureBoard /> : null}</div>;
}

export default App;
