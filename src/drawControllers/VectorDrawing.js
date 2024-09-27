import React from 'react';

// Helper function to convert degrees to radians because react math. function uses readians and not angles which is just another way to save angle data in 
const toRadians = (degrees) => (degrees * Math.PI) / 180;

//Create an arrow function with parameters of all the data we need to create a visualization of the Vector Danik has created
const VectorDrawing = ({ shapes }) => {
    return (
        <>
            {shapes.map((shape, shapeIndex) => {
                let shapeX = shape.getPosition().getX();
                let shapeY = shape.getPosition().getY();

                return (
                    <React.Fragment key={shapeIndex}>
                        {shape.getVectors().map((vector, vectorIndex) => {
                             // Now using getters to get the values rather than using JSON attributes

                            // Getting every single one of the properties from the vector object
                            const x = vector.getX();
                            const y = vector.getY();

                            const endX = shapeX + x;
                            const endY = shapeY + y;

                            return (
                                // React fragment is a thing that basically allows the line to be stacked on top of one another allowing us no need to create a new div for every line 
                                <React.Fragment key={vectorIndex}>
                                    <line
                                        x1={shapeX}
                                        y1={shapeY}
                                        x2={endX}
                                        y2={endY}
                                        stroke='blue'
                                        strokeWidth="2"
                                        markerEnd="url(#arrowhead)"
                                    />
                                </React.Fragment>
                            );
                        })}
                    </React.Fragment>
                );
            })}

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
        </>
    );
}

export default VectorDrawing;