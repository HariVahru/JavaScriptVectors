import Acceleration from "../classes/acceleration";
import Shape from "../classes/shape";
import Velocity from "../classes/velocity";
import Force from "../classes/force";

class Ball extends Shape{
 
    #ballRadius

    constructor(ballRadius)
    {
        super();
        this.setRadius(ballRadius)
        // this.setVelocity(new Velocity(5,90))
        // this.setAcceleration(new Acceleration(7, 290))
        this.setForce(new Force(25, 180))
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