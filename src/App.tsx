import { useEffect, useState } from "react";
import { Counter } from "./features/counter/Counter";
import DepartureBoard from "./pages/DepartureBoard";
import "./styles/App.scss";
import { getAuthorization } from "./utils/API";
import { TokenType } from "./utils/Type";

function App() {
   const getToken = () => {
      getAuthorization()
         .then((res) => {
            console.log("getToken", res);
         })
         .catch();
   };

   useEffect(() => {
      getToken();
   }, []);
   return (
      <div className="App">
         <DepartureBoard />
      </div>
   );
}

export default App;
