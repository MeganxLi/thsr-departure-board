import { useEffect, useState } from "react";
import { Counter } from "./features/counter/Counter";
import "./styles/App.scss";
import { useGetAuthorizationMutation, useGetStationQuery } from "./services/API";
import DepartureBoard from "./pages";

function App() {
  const [getAuthorization, { isError, error }] = useGetAuthorizationMutation();
  const { data } = useGetStationQuery({});

  return (
    <div className="App">
      <DepartureBoard />
    </div>
  );
}

export default App;
