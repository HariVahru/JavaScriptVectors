import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import Vector2 from "../src/classes/vector2"
import VectorDrawing from './classes/VectorDrawing';

function App() {

  const [vectorData, setVectorData] = useState({
    x: null,
    y: null,
    rad: null,
    theta: null,
    value: null,
  });


  const runTest = () =>
  {
    let v = new Vector2(50,105);
    console.log(v.getValue())
    console.log(v.getTheta())
    console.log(v.getRad())
    console.log(v.getX())
    console.log(v.getY())
    setVectorData({
      x: v.getX(),
      y: v.getY(),
      rad: v.getRad(),
      theta: v.getTheta(),
      value: v.getValue(),
    });
  }

  return (
    <div className="App">
      <VectorDrawing value={vectorData.value} theta={vectorData.theta} rad={vectorData.rad} x={vectorData.x} y={vectorData.y}/>
      <button onClick={() => runTest()} >Run test</button>
    </div>
  );
}

export default App;
