import React, { useState, useRef } from 'react';
import Draggable from 'react-draggable';
import '../css/objectTracker.css';
import pinIcon from "../pin-icon.png";

function ObjectWindow({updater, setUpdate, object}) {

  // All the state variables displayed by the window
  const [shapeId,setShapeId] = useState(object.getId())
  const [shapeRadius,setShapeRadius] = useState(object.getRadius())
  const [shapeX,setShapeX] = useState(object.getPosition().getX())
  const [shapeY,setShapeY] = useState(object.getPosition().getY())

  const [pin,setPin] = useState(false)
  const pinRef = useRef()

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
      <Draggable
        disabled={pin}
      >
        <div className='Object_Tracker' ref={pinRef}>
          <div><h3>Shape - {shapeId}</h3></div>
          <div className='Tracker_Values'>
            <table>
              <td className='Tracker_Heading'>
                <tr>Radius</tr>
                <tr>Position</tr>
                <tr>Mass</tr>
                <tr>Velocity</tr>
                <tr>Acceleration</tr>
              </td>
              <td className='Tracker_Data'>
                <tr>[ {shapeRadius.toPrecision(6)} ]</tr>
                <tr>[ {shapeX.toPrecision(5)},{shapeY.toPrecision(5)} ]</tr>
              </td>
            </table>
          </div>
          <img onClick={() => {setPin(value => !value);if(!pin){pinRef.current.style.backgroundColor = "#7c7c7cbf"}else{pinRef.current.style.backgroundColor = "#ffffff"}}} src={pinIcon}></img>
        </div>
      </Draggable>
    </div>
  );
}

export default ObjectWindow;
