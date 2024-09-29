import React, {useState} from 'react';

function Engine({objects,setObjects,engineRunning,tickSpeed,singleTick}) {

    // This is used to setup the interval when the engine is running
    const [running,setRunning] = useState(null)

    // Use effect turns the interval on or off using the engineRunning bool given to the component
    React.useEffect( () => {
        if (engineRunning)
        {
            // The interval is set to 20 ms so 50 ticks per second at 1 tickSpeed
            setRunning(setInterval(() => mainController(), 20));
        }
        else
        {
            // Stop the engine if bool is false
            clearInterval(running)
        }
    },[engineRunning])

    React.useEffect( () => 
    {
        mainController()
    },[singleTick])

    // This is called by the interval to complete one tick
    const mainController = () => 
    {
        controllerAcceleration()
        controllerVelocity()
    }

    // Acceleration is called before velocity to find the new velocity before it is applied
    const controllerAcceleration = () =>
        {
            let newShapes = []
            objects.forEach(shape => {
                shape.applyAcceleration(tickSpeed)
                newShapes.push(shape)
            });
            setObjects(newShapes)
        }

    // Velocity applied to each object to move them based on the velocity vector
    const controllerVelocity = () =>
    {
        let newShapes = []
        objects.forEach(shape => {
            shape.moveShape(tickSpeed)
            newShapes.push(shape)
        });
        setObjects(newShapes)
    }

  return (
    <></>
  );
}

export default Engine;
