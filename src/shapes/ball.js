import Shape from "../classes/shape";

class Ball extends Shape{
 
    #ballRadius

    constructor(ballRadius)
    {
        super();
        this.setRadius(ballRadius)
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