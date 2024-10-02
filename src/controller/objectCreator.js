import React, { useState } from 'react';
import Draggable from 'react-draggable';
import '../css/objectCreator.css';
import Ball from '../shapes/ball';
import ObjectWindow from '../windows/objectControllWindow';

function ObjectCreator({engineRunning, setEngineRunning, setObjects, updater,setUpdater }) {


    // Variables to be used by the creator window to allow for dynamic shape creation
    const [radius,setRadius] = useState(0)
    const [xPos,setXPos] = useState(0)
    const [yPos,setYPos] = useState(0)
    const [mass, setMass]= useState(0)

    // State to display all object trackers 
    const [trackers,setTrackers] = useState([])

    const stopEngine = async() =>
    {
        // When the creator is called the engine needs to be stopped for a second to let the new object to spawn
        let engine = false;
        if (engineRunning===true) {  
            engine= true;
            console.log(setEngineRunning.setRunning)
            await setEngineRunning.setRunning(value=>!value)
        }

        // After we made sure engine is off, we can create new object
        // setEngineRunning(value=>!value)
        createNew()
        if(engine){
            await setEngineRunning.setRunning(value=>!value)
        }
        
        
    }

    const createNew = () =>
    {
        // Converting all inputs to numbers as this is what the class accepts
        let localRadius = Number(radius)
        let localX = Number(xPos)
        let localY = Number(yPos)
        let localMass = Number(mass)

        // Check that all values given by the user were sucesfully converted, no NAN
        if (typeof localRadius === "number" && typeof localX === "number" && typeof localY === "number" && typeof localMass === "number")
        {
            // Create new ball, since we dont have other objects yet
            const ball = new Ball(localRadius)
            // Set position giver by the user
            ball.setPosition(localX,localY)
            // Set mass to the shape give by the user
            ball.setMass(mass)
            // Add the new object to the list of objects to be updated by the engine
            setObjects(objects => [...objects,ball])
            // Create new tracker window for this ball and add it to the list to display in the DOM
            setTrackers([...trackers,<ObjectWindow updater={updater} setUpdate={setUpdater} object={ball} />])
        }
    }


    return (
        <div>
            <Draggable>
                <div className='Object_Creator'>
                    <div><h3>Object Creator</h3></div>
                    <div className='Creator_Inputs'>
                        <label>Radius</label>
                        <input type='number' value={radius} onChange={(e) => setRadius(e.target.value)} className='Creator_Input'></input>
                        <label>X Position</label>
                        <input type='number' value={xPos} onChange={(e) => setXPos(e.target.value)}  className='Creator_Input'></input>
                        <label>Y Position</label>
                        <input type='number' value={yPos} onChange={(e) => setYPos(e.target.value)}  className='Creator_Input'></input>
                        <label>Mass</label>
                        <input type='number' value={mass} onChange={(e) => setMass(e.target.value)}  className='Creator_Input'></input>
                        <button onClick={() => {stopEngine()}}>Create</button>
                    </div>
                </div>
            </Draggable>
            {trackers}
        </div>
    );
}

export default ObjectCreator;
