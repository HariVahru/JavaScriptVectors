import React, { useState } from 'react';
import Draggable from 'react-draggable';
import '../css/objectTracker.css';

function ObjectWindow({updater, setUpdate, object}) {

  // All the state variables displayed by the window
  const [shapeId,setShapeId] = useState(object.getId())
  const [shapeRadius,setShapeRadius] = useState(object.getRadius())
  const [shapeX,setShapeX] = useState(object.getPosition().getX())
  const [shapeY,setShapeY] = useState(object.getPosition().getY())

  // Local variable which is updated by the engine for the window to pull changes
  const [update,setLocalUpdate] = useState(false)

  // Attach local update to an external update mechanism
  React.useEffect(() => {
    setUpdate([...updater,setLocalUpdate])
  }, [])

  // Each time the engine updates the positions the trackers will be called to update the values in the states
  React.useEffect(() => {
    setShapeRadius(object.getRadius())
    setShapeX(object.getPosition().getX())
    setShapeY(object.getPosition().getY())
  }, [update])


  return (
    <div>
      <Draggable>
        <div className='Object_Tracker'>
          <div><h3>Shape - ID_{shapeId}</h3></div>
          <div className='Tracker Values'>
            <div>Radius - [{shapeRadius.toPrecision(6)}] </div>
            <div>Position - [{shapeX.toPrecision(5)},{shapeY.toPrecision(5)}]</div>

          </div>
        </div>
      </Draggable>
    </div>
  );
}

export default ObjectWindow;
