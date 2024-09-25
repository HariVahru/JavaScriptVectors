import React from 'react';

// Helper function to convert degrees to radians because react math. function uses readians and not angles which is just another way to save angle data in 
const toRadians = (degrees) => (degrees * Math.PI) / 180;

//Create an arrow function with parameters of all the data we need to create a visualization of the Vector Danik has created
const VectorDrawing = ({vectors}) => {
    //We define the starting point of an svg box (its center)
    const startX = 250;
    const startY = 250;

    return (
        <svg width="500" height="500" style={{ border: '1px solid black' }}>
            {vectors.map((vector, index) => {
                {/* svg has component line with all these parameters in it to create the line itself */ }
                
                console.log (vector.getX() + "    "+vector.getY()) // Now using getters to get the values rather than using JSON attributes
                //getting every single one of the properties from the vector object
                
                // This has now been split to use getters as vector object are now vectors instead of JSON representation
                const value = vector.getValue()
                const theta = vector.getTheta()
                const x = vector.getX()
                const y = vector.getY()
                

                // Check if the vector has valid data
                const hasValidData =
                    (value !== null && theta !== null) || (x !== null && y !== null);

                if (!hasValidData) {
                    // If no valid data, skip this vector
                    return null;
                }

                //these look complicated but are just a very convoluted way to write an if in react js
                //basically all it does if we have the x data of an vector we just add it on top of start to calculate otherwise if we dont we get the enpoint from value(witch is lengh) and theta witch is angle in radians
                // (x !== undefined ? x : calculateEndPoint(value, theta).x
                // const endX = startX + (x !== undefined ? x : calculateEndPoint(value, theta).x)

                // const endX = startX + calculateEndPoint(value, theta).x
                const endX = startX+ x ;

                //bellow you can see an example of how its done with a basic if for my peace of mind

                // let endX;
                // if (x!==undefined){
                //     endX=startX+x;
                // }else{
                //     const calculatedPoint = calculateEndPoint(value, theta);
                //     endX = startX + calculatedPoint.x;
                // }

                //in SVG the y axis is inverted because the start point is not from the bottom left but the top left cornet instead\
                // (y !== undefined ? x : calculateEndPoint(value, theta).y)

                // const endY = startY - (y !== undefined ? x : calculateEndPoint(value, theta).y);
                // const endY = startY - calculateEndPoint(value, theta).y
                const endY= startY - y;
                

                //i wanted to draw a circle with the line being the radius of the circle, here we get the radius
                const radius = Math.sqrt(Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2));


                return (
                    //React fragment is a thing that basically allows the line to be stacked on top of one another allowing us no need to create a new div for every line 
                    <React.Fragment key={index}>
                        <line
                            x1={startX}
                            y1={startY}
                            x2={endX}
                            y2={endY}
                            stroke='blue'
                            strokeWidth="2"
                            markerEnd="url(#arrowhead)"
                        />

                        <circle cx={startX} cy={startY} r={radius} stroke="red" fill="none" />
                    </React.Fragment>
                )
            })};

            <defs>
                {/* Defines a cool little icon that looks like an arrow that points out of marker end */}
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



        </svg>
    );


}

export default VectorDrawing;