import { useEffect, useState } from "react";
import { Counter } from "./features/counter/Counter";
import DepartureBoard from "./pages/DepartureBoard";
import "./styles/App.scss";
import { useGetAuthorizationMutation } from "./services/API";
import { TokenType } from "./utils/Type";

function App() {
    const [getAuthorization, { isError, error }] = useGetAuthorizationMutation();

    useEffect(() => {
        getAuthorization(null);
    }, []);

    return (
        <div className="App">
            <DepartureBoard />
        </div>
    );
}

export default App;
