import logo from './logo.svg';
import './App.css';
import Vector2 from "../src/classes/vector2"

function App() {

  const runTest = () =>
  {
    let v = new Vector2(20,405);
    console.log(v.getValue())
    console.log(v.getTheta())
    console.log(v.getRad())
    console.log(v.getX())
    console.log(v.getY())
  }

  return (
    <div className="App">
      <button onClick={() => runTest()} >Run test</button>
    </div>
  );
}

export default App;
