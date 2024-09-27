import React, {useState} from 'react';

function Engine({objects,setObjects,engineRunning,tickSpeed}) {

    const [running,setRunning] = useState(null)

    React.useEffect( () => {
        if (engineRunning)
        {
            setRunning(setInterval(() => controllerVelocity(), 100));
        }
        else
        {
            clearInterval(running)
        }
    },[engineRunning])

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
