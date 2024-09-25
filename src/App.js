import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import Vector2 from "../src/classes/vector2"
import VectorDrawing from './classes/VectorDrawing';

function App() {

  // Changed each vector JSON to just one state for vectors to display
  const [vectors,setVectors] = useState([])


  const runTest = () =>
  {
    let v1 = new Vector2(100,270);
    let v2 = new Vector2(100,360);
    let v3 = Vector2.addVectors(v1,v2)
    // Run test will now set the state of vectors to all vectors we have created
    setVectors([v1,v2,v3])
  }

  return (
    <div className="App">
      <VectorDrawing vectors={vectors}/>
      <button onClick={() => runTest()} >Run test</button>
    </div>
  );
}

export default App;
