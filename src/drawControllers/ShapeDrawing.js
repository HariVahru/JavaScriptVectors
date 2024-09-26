import React from 'react';
import VectorDrawing from './VectorDrawing';


const ShapeDrawing = ({ shapes }) => {

    return (
        <svg width="1000" height="1000" style={{ border: '1px solid black' } } viewBox={`0 0 1000 1000`}>
            <g transform={`translate(500, 500) scale(1, -1)`}>
                
                {shapes.map((shape, index) => {
                    return (
                        //React fragment is a thing that basically allows the line to be stacked on top of one another allowing us no need to create a new div for every line 
                        <React.Fragment key={index}>
                            {shape.drawBall()}
                        </React.Fragment>
                    )
                })};
                <VectorDrawing shapes={shapes}/>
            </g>

        </svg>
    );


}

export default ShapeDrawing;