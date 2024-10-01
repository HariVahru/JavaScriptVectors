# Vector Implementation in React JS

This is a project developed in pair by Daniels and Harry

## Goals

- Build a web display of different shapes
- Build logic to simulate physics 
    - Gravity
    - Colission
- Build a UI to allow for easy controll and manipulation of the shapes

## Objectives

- Build vector and shapes classes
- Build engine to move shapes and alter the vectors
- Build display to see the movement
- Build windows to track and manipulate shapes

## Updates

### 01.10.24

#### Implemented up to

- Created vector class (using Acceleration and Velocity as sub classes)
- Created shape class (the only class implementing shape is ball at the moment)
- Created engine component 
    - Applies the velocity vector to each shape in the array
    - Applies the acceleration vector to each shape in the array
    - Can be turned on or off and support single tick
    - (Changed from using setInterval tick approach to requestAnimationFrame method)
- Created DrawControllers
    - ShapeDrawing calls the shape method to retrieve the jsx element to reporesent the shape, this is displayed within the SVG
    - VectorDrawing for each shape determines it's position and the draws an arrow representing the vector
- Created ObjectController 
    - A dragable window using 'react-draggable' to create new shapes and add them to the shapes array
    - Creates a tracker window for each shape, so that it's parameters and position can be easily tracked

#### Current Plans

1. Implement force vector and add mass to shapes to alter acceleration
2. Implement inputs and controllers in the tracker to change the state of the shape
3. Implement gravity for shapes with ability to turn it on and off
4. Implement other shapes
5. Add support for custom objects using images

