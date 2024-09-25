import React from 'react';

// Helper function to convert degrees to radians because react math. function uses readians and not angles which is just another way to save angle data in 
const toRadians = (degrees) => (degrees * Math.PI) / 180;


// Helper function to calculate the endpoint of the vector
const calculateEndPoint = (magnitude, angle) => {
    const angleInRadians = toRadians(angle); // Convert to radians if angle is in degrees
    //We return an object that contains the endpoint data of x and y
    return {
        x: magnitude * Math.cos(angleInRadians),
        y: magnitude * Math.sin(angleInRadians),
    };
};

//Create an arrow function with parameters of all the data we need to create a visualization of the Vector Danik has created
const VectorDrawing = ({ value, theta, rad, x, y }) => {
    //We define the starting point of an svg box (its center)
    const startX = 250;
    const startY = 250;

    //these look complicated but are just a very convoluted way to write an if in react js
    //basically all it does if we have the x data of an vector we just add it on top of start to calculate otherwise if we dont we get the enpoint from value(witch is lengh) and theta witch is angle in radians
    const endX = startX + (x != undefined ? x : calculateEndPoint(value, theta).x)

    //bellow you can see an example of how its done with a basic if for my peace of mind
    // let endX;
    // if (x!==undefined){
    //     endX=startX+x;
    // }else{
    //     const calculatedPoint = calculateEndPoint(value, theta);
    //     endX = startX + calculatedPoint.x;
    // }

    //in SVG the y axis is inverted because the start point is not from the bottom left but the top left cornet instead
    const endY = startY - (y != undefined ? x : calculateEndPoint(value, theta).y);

    //i wanted to draw a circle with the line being the radius of the circle, here we get the radius
    const radius = Math.sqrt(Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2));



    return (
        <svg width="500" height="500" style={{ border: '1px solid black' }}>
            {/* svg has component line with all these parameters in it to create the line itself */}
            <line
                x1={startX}
                y1={startY}
                x2={endX}
                y2={endY}
                stroke='blue'
                strokeWidth="2"
                markerEnd="url(#arrowhead)"
            />

            <defs>
                <marker
                    id="arrowhead"
                    markerWidth="10"
                    markerHeight="7"
                    refX="0"
                    refY="3.5"
                    orient="auto"
                    fill="blue"
                >
                    <polygon points="0 0, 10 3.5, 0 7" />
                </marker>
            </defs>
            
            <circle cx={startX} cy={startY} r={radius} stroke="red" fill="none" />

        </svg>
    );


}

export default VectorDrawing;