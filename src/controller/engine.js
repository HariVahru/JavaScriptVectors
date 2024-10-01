import React, {useState} from 'react';

function Engine({setRunner,objects,setObjects,engineRunning,tickSpeed,singleTick,updater}) {

    // This is used to setup the interval when the engine is running
    const [running,setRunning] = useState(false)
    let animationId= null;

    // Use effect turns the interval on or off using the engineRunning bool given to the component
    React.useEffect(()=>{
        setRunner({setRunning})
    },[])
    
    React.useEffect( () => {
       setRunning(value=>!value)
    },[engineRunning])

    React.useEffect(() => {
        if (running) {
            // Start the animation when running is true
            animationId=requestAnimationFrame(mainController);
        } else if (animationId!== null) {
            // Stop the animation if running is false
            cancelAnimationFrame(animationId);
            animationId=null;  // Reset animation ID
        }

        //this is cleanup that i need to explore later

        return () => {
            if (animationId!== null) {
                cancelAnimationFrame(animationId);
                animationId=null;  // Cleanup the animation ID on unmount
            }
        };
    }, [running]);  // This triggers whenever `running` changes

    React.useEffect( () => 
    {
        mainController()
    },[singleTick])

    // This is called by the interval to complete one tick
    const mainController = () => 
    {
        
        controllerAcceleration()
        controllerVelocity()

        // Use the updater to call the update inside each tracker to update the values in the window
        updater.forEach(caller => {
            caller(value => !value)
        });
        
        if(running){
            animationId=requestAnimationFrame(mainController);
        }
        
    }

    
    // if (engineRunning){
    //     animationID=requestAnimationFrame(mainController)
    // }
    // else
    // {
    //     cancelAnimationFrame(animationID);
    // }

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
