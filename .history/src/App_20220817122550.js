import React from "react";
import './styles.css'
function App() {
  return (
    // <div className="border">
      <div className="calculator">
      <div className="calculator-top">
        <button className="button1"></button>
        <button className="button2"></button>
        <button className="button3"></button>
      </div>
      <div className="calculator-middle">
        0
      </div>
      <div className="calculator-bottom">
        <button className="button-one-boldgrey">AC</button>
        <button className="button-one-boldgrey">+/-</button>
        <button className="button-one-boldgrey">%</button>
        <button className="button-one-orange">÷</button>
        <button className="button-one-lightgrey">7</button>
        <button className="button-one-lightgrey">8</button>
        <button className="button-one-lightgrey">9</button>
        <button className="button-one-orange">×</button>
        <button className="button-one-lightgrey">4</button>
        <button className="button-one-lightgrey">5</button>
        <button className="button-one-lightgrey">6</button>
        <button className="button-one-orange">-</button>
        <button className="button-one-lightgrey">1</button>
        <button className="button-one-lightgrey">2</button>
        <button className="button-one-lightgrey">3</button>
        <button className="button-one-orange">+</button>
        <button className="button-two">0</button>
        <button className="button-one-lightgrey">,</button>
        <button className="button-one-orange">=</button>
      </div>
    </div>
  </div>
  );
}

export default App;