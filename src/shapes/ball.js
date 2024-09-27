import Shape from "../classes/shape";

class Ball extends Shape{
 
    #ballRadius

    constructor(ballRadius)
    {
        super();
        this.#ballRadius = ballRadius
    }
 
    reDraw()
    {
        return(<circle cx={this.getPosition().getX()} cy={this.getPosition().getY()} r={this.#ballRadius} stroke="red" fill="red" />);
    }

    

}

export default Ball