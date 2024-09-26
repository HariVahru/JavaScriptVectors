import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import Vector2 from "../src/classes/vector2"
import Shape from "../src/classes/shape"
import Point from "../src/classes/point"
import VectorDrawing from './drawControllers/VectorDrawing';
import Ball from './shapes/ball';
import ShapeDrawing from './drawControllers/ShapeDrawing';

function App() {

  // Changed each vector JSON to just one state for vectors to display
  const [vectors,setVectors] = useState([])
  const [shapes, setShapes]= useState([])
  

  const runTest = () =>
  {
    let v1 = new Vector2(200,270);
    let v2 = new Vector2(100,350);
    let v3 = Vector2.addVectors(v1,v2)
    let circle1= new Ball(90)
    circle1.setPosition(5, 0)
    circle1.addVectors([v1, v2])
    setShapes([circle1])
    // // Run test will now set the state of vectors to all vectors we have created
    // setVectors([v1,v2,v3])

    // let shape = new Shape()
    // shape.addVector(v1)
    // shape.addVector(v2)
    // shape.addVector(v3)
    // shape.addVectors([v1,v2,v3])
    // shape.setPosition(100,-60)
    // shape.setPosition(new Point(200,1000))
    // console.log(shape.getPosition().getPos())
    // console.log(shape.getVectors())
    
  }

  const moveTheCircle = () =>
  {
    let shape= shapes[0]
    shape.setPosition(shape.getPosition().getX()+shape.getVectors()[1].getX(), shape.getPosition().getY()+shape.getVectors()[1].getY())
    setShapes([shape])
  }

  return (
    <div className="App">
      <ShapeDrawing shapes={shapes}/>
      <button onClick={() => runTest()} >Run test</button>
      <button onClick={() => moveTheCircle()} >Move the Circle</button>
    </div>
  );
}

export default App;
