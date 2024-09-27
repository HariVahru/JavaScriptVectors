import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import Vector2 from "../src/classes/vector2"
import Shape from "../src/classes/shape"
import Point from "../src/classes/point"
import VectorDrawing from './drawControllers/VectorDrawing';
import Ball from './shapes/ball';
import ShapeDrawing from './drawControllers/ShapeDrawing';
import Velocity from './classes/velocity';
import Engine from './controller/engine';

function App() {

  const [shapes, setShapes]= useState([])

  // New controll variables for the engine
  const [tickSpeed,setTickSpeed] = useState(1)
  const [engineRunning,setEngineRunning] = useState(false)
  

  const runTest = () =>
  {
    let circle1= new Ball(90)
    circle1.setPosition(5, 0)
    circle1.setVelocity(new Velocity(10,330))
    setShapes([circle1])
    
  }

  const moveTheCircle = () =>
  {
    setEngineRunning(value => !value)
  }

  return (
    <div className="App">
      <ShapeDrawing shapes={shapes}/>
      <Engine objects={shapes} setObjects={setShapes} engineRunning={engineRunning} tickSpeed={tickSpeed} />
      <button onClick={() => runTest()} >Run test</button>
      <button onClick={() => moveTheCircle()} >Toggle Engine</button>
    </div>
  );
}

export default App;
