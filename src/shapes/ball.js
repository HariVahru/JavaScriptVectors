import Shape from "../classes/shape";
import Velocity from "../classes/velocity";

class Ball extends Shape{
 
    #ballRadius

    constructor(ballRadius)
    {
        super();
        this.setRadius(ballRadius)
        this.setVelocity(new Velocity(50,90))
    }

    setRadius(radius)
    {
        if (radius > 0)
        {
            this.#ballRadius = radius
        }
        else
        {
            this.#ballRadius = 1
        }
    }

    getRadius()
    {
        return this.#ballRadius
    }
 
    reDraw()
    {
        return(<circle cx={this.getPosition().getX()} cy={this.getPosition().getY()} r={this.#ballRadius} stroke="red" fill="red" />);
    }

    

}

export default Ball