import { useEffect, useState } from "react";
import { Counter } from "./features/counter/Counter";
import DepartureBoard from "./pages/DepartureBoard";
import "./styles/App.scss";
import { getAuthorizationAxios, useGetAuthorizationMutation } from "./utils/API";
import { TokenType } from "./utils/Type";

function App() {
   const [getAuthorization, { isError, error }] = useGetAuthorizationMutation();
   useEffect(() => {
      getAuthorization(null)
         .unwrap()
         .then((res) => {
            console.log(res);
         })
         .then((error) => {
            console.log(error);
         });

      getAuthorizationAxios().then((res: any) => {
         console.log(res);
      });
   }, []);
   return (
      <div className="App">
         <DepartureBoard />
      </div>
   );
}

export default App;
