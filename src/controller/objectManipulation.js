import React, { useState } from 'react';
import Draggable from 'react-draggable';
import '../css/objectCreator.css';

function ObjectManipulation({ objects, tickSpeed }) {

    //here we will have the current id selected from the drop down
    const [id, setId] = useState(0)
    const [forceTime, setForceTime]= useState(0)

    let executeOnceFlag = false;
    let frames = 0;


    function runOneFrame() {   
        console.log("Running this logic for one frame!");
        if(objects[id]!=undefined){
            objects[id].applyForce(tickSpeed);
        }
        
    }

    function triggerOneFrameLogic() {
        requestAnimationFrame(runOneFrame);
    }

    function triggerMultipleFrameLogic(){
        if(forceTime>frames){
            runOneFrame();
            requestAnimationFrame(triggerMultipleFrameLogic);
            frames++;
        }
    }

    return (
        <div>
            <Draggable>
                <div className='Object_Creator'>
                    <label>Select Which object to manipulate: </label>
                    <div className='Creator_Inputs'>
                        <select id='template-select' onMouseDown={(e) => e.stopPropagation()} onChange={(e) => setId(e.target.value)}>
                            {objects.map(object => <option key={object.getId()} value={object.getId()}>{object.getId()}</option>)}
                        </select>
                        <button onClick={() => triggerOneFrameLogic()}>Add force for 1 frame</button>
                        <label>select for how many frames we will apply force:</label>
                        <input type='number' value={forceTime} onChange={(e) => setForceTime(e.target.value)} className='Creator_Input'></input>
                        <button onClick={() => triggerMultipleFrameLogic()}>Add force for however many frames we set it too</button>
                    </div>
                </div>
            </Draggable>
        </div>
    );
}

export default ObjectManipulation;
