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
import ObjectCreator from './controller/objectCreator';
import ObjectManipulation from './controller/objectManipulation';

function App() {

  // This is an array which holds all shapes which are to be ticked by the engine
  const [shapes, setShapes]= useState([])

  // This is a state that is used by the engine to call an update on the tracker windows
  const [windowUpdater, setWindowUpdater] = useState([])

  // New controll variables for the engine

  // Tick speed will determine how many ticks will be perfomed per calculation ,increasing the tick speed will speed up or slow down simulation
  const [tickSpeed,setTickSpeed] = useState(1)
  // Engine running bool determines if the engine will be ticking all registered objects
  const [engineRunning,setEngineRunning] = useState(false)
  const [runner, setRunner]=useState(null)



  // This method allows to tick the engine once, the tick speed still applies
  const [runTick,setRunTick] = useState(false)
  const moveTheCircle = () =>
  {
    setEngineRunning(value => !value)
  }

  return (
    <div className="App">
      <ShapeDrawing shapes={shapes}/>
      <Engine setRunner = {setRunner} objects={shapes} setObjects={setShapes} engineRunning={engineRunning} tickSpeed={tickSpeed} singleTick={runTick} updater={windowUpdater} />
      <ObjectCreator engineRunning={engineRunning} setEngineRunning={runner} setObjects={setShapes} updater={windowUpdater} setUpdater={setWindowUpdater} />
      <ObjectManipulation objects={shapes} tickSpeed={tickSpeed}/>
      <button onClick={() => setRunTick(value => !value)} >Run test</button>
      <button onClick={() => moveTheCircle()} >Toggle Engine</button>
    </div>
  );
}

export default App;
