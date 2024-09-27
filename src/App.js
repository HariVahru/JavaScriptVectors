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
import Acceleration from './classes/acceleration';

function App() {

  const [shapes, setShapes]= useState([])

  // New controll variables for the engine
  const [tickSpeed,setTickSpeed] = useState(1)
  const [engineRunning,setEngineRunning] = useState(false)
  

  const runTest = () =>
  {
    let circle1= new Ball(90)
    circle1.setPosition(100, 0)
    circle1.setVelocity(new Velocity(30,340))
    circle1.setAcceleration(new Acceleration(1.5,180))

    let circle2= new Ball(90)
    circle2.setPosition(-200, -400)
    circle2.setVelocity(new Velocity(30,45))
    circle2.setAcceleration(new Acceleration(1.5,270))
    setShapes([circle1,circle2])
    
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
