import React, { useState } from 'react';
import Draggable from 'react-draggable';
import '../css/objectCreator.css';
import Ball from '../shapes/ball';

function ObjectCreator({ objects, setObjects }) {

    const [radius,setRadius] = useState(0)
    const [xPos,setXPos] = useState(0)
    const [yPos,setYPos] = useState(0)

    const createNew = () =>
    {
        let localRadius = Number(radius)
        let localX = Number(xPos)
        let localY = Number(yPos)
        if (typeof localRadius === "number" && typeof localX === "number" && typeof localY === "number")
        {
            const ball = new Ball(localRadius)
            ball.setPosition(localX,localY)
            setObjects([...objects,ball])
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
                        <button onClick={() => createNew()}>Create</button>
                    </div>
                </div>
            </Draggable>
        </div>
    );
}

export default ObjectCreator;
