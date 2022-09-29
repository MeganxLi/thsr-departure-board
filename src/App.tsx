import { useEffect, useState } from "react";
import { Counter } from "./features/counter/Counter";
import DepartureBoard from "./pages/DepartureBoard";
import "./styles/App.scss";
import { useGetAuthorizationMutation, useGetStationQuery } from "./services/API";

function App() {
    const [getAuthorization, { isError, error }] = useGetAuthorizationMutation();
    const { data } = useGetStationQuery({});

    useEffect(() => {
        getAuthorization(null);
        console.log(data);
    }, []);

    return (
        <div className="App">
            <DepartureBoard />
        </div>
    );
}

export default App;
