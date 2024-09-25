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

  const [vectorData2, setVectorData2] = useState({
    x: null,
    y: null,
    rad: null,
    theta: null,
    value: null,
  });

  const vectors = [
    {...vectorData},
    {...vectorData2},
  ]


  const runTest = () =>
  {
    let v1 = new Vector2(150,0);
    let v2 = new Vector2(100,90);
    
    setVectorData({
      x: v1.getX(),
      y: v1.getY(),
      rad: v1.getRad(),
      theta: v1.getTheta(),
      value: v1.getValue(),
    });

    setVectorData2({
      x: v2.getX(),
      y: v2.getY(),
      rad: v2.getRad(),
      theta: v2.getTheta(),
      value: v2.getValue(),
    });

  }

  return (
    <div className="App">
      <VectorDrawing vectors={vectors}/>
      <button onClick={() => runTest()} >Run test</button>
    </div>
  );
}

export default App;
