import React, { useState } from "react";

const App = () => {
  const increment = () => {
    setCounter(counter + 1);
  };
  return (
    <div>
      This was made from Scratch! Also hello world!
      <button onClick={increment}>Increment</button>
      {counter}
    </div>
  );
};

export default App;
