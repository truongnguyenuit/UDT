import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { configRouter } from "./router/configRouter";
import ContextProvider1 from "./contexts/Context1";
import ContextProvider2 from "./contexts/Context2";

function App() {
  return (
    // <ContextProvider1>
    //   <ContextProvider2>
    //     <BrowserRouter>
    //       <Routes>
    //         {configRouter.map((item, index) => {
    //           return (
    //             <Route
    //               key={index}
    //               path={item.path}
    //               element={item.page}
    //             />
    //           )
    //         })}
    //       </Routes>
    //     </BrowserRouter>
    //   </ContextProvider2>
    // </ContextProvider1>
    <BrowserRouter>
      <Routes>
        <h1>awsdasdasd</h1>
      </Routes>
    </BrowserRouter>
  );
}

export default App;