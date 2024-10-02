import React, {useState, useRef} from 'react';

function Engine({setRunner,objects,setObjects,engineRunning,tickSpeed,singleTick,updater}) {

    // This is used to setup the interval when the engine is running
    const [running,setRunning] = useState(false)
    let animationId= null;

    // Use effect turns the interval on or off using the engineRunning bool given to the component
    React.useEffect(()=>{
        setRunner({setRunning})
    },[])
    
    //CHAT GPT code snip bit that allow us to get fps
    // const [fps, setFps] = useState(0);  // Store the FPS
    // const frameCountRef = useRef(0);    // Track the number of frames
    // const lastTimeRef = useRef(performance.now());  // Track the last frame's timestamp

    // const calculateFPS = (currentTime) => {
    //     frameCountRef.current += 1;  // Increment frame count
    //     const delta = currentTime - lastTimeRef.current;  // Time since the last frame

    //     // If one second has passed, calculate FPS
    //     if (delta >= 1000) {
    //         const fps = (frameCountRef.current * 1000) / delta;  // Frames per second
    //         setFps(Math.round(fps));  // Update the FPS state
    //         frameCountRef.current = 0;  // Reset frame count
    //         lastTimeRef.current = currentTime;  // Reset the last time
    //     }
    // };
    
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
    const mainController = (currentTime) => 
    {
        
        
        controllerAcceleration()
        // controllerForce()
        controllerVelocity()
        

        // Use the updater to call the update inside each tracker to update the values in the window
        updater.forEach(caller => {
            caller(value => !value)
        });
        
        // calculateFPS(currentTime);
        
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

    // Force is called before acceleration to find the new acceleration before it is applied
    const controllerForce = () =>
        {
            let newShapes = []
            objects.forEach(shape => {
                shape.applyForce(tickSpeed)
                newShapes.push(shape)
            });
            setObjects(newShapes)
        }

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
