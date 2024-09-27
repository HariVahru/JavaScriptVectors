import Point from "./point";
import Velocity from "./velocity";
class Shape
{
    #origin;
    #velocity;

    constructor()
    {
        this.#origin = new Point(0,0)
        this.#velocity = new Velocity(0,0)
    }

    // We will assume engine with 10 ticks per second 
    moveShape(tick)
    {
        this.setPosition(this.getPosition().getX()+((this.getVelocity().getX()*tick)/10), this.getPosition().getY()+((this.getVelocity().getY()*tick)/10))
    }

    setVelocity(velocity)
    {
        this.#velocity = velocity
    }

    getVelocity()
    {
        return this.#velocity
    }

    // If two points given then set them as position
    // If one argument given treat it as point object
    setPosition(x, y = undefined)
    {
        if (y === undefined)
        {
            this.#origin = x
        }
        else
        {
            this.#origin.setPos(x,y)
        }
    }

    getPosition()
    {
        return this.#origin
    }

    getVectors()
    {
        return [this.#velocity]
    }

    // Old features

    // - Removed as all vectors will have a purpose and will be each be a unique class
    // addVector(newVector)
    // {
    //     this.#vectors.push(newVector)
    // }

    // addVectors(vectorArray)
    // {
    //     vectorArray.forEach((element) => {
    //         this.#vectors.push(element)
    //     })
    // }

    // removeVector(vector)
    // {
    //     let newVectors = []
    //     this.#vectors.forEach((element) =>
    //     {
    //         if (element != vector)
    //         {
    //             newVectors.push(element)
    //         }
    //     })
    //     this.#vectors = newVectors;
    // }


}

export default Shape