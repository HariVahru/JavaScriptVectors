import Acceleration from "./acceleration";
import Point from "./point";
import Velocity from "./velocity";
import Vector2 from "./vector2";
class Shape
{
    #origin;
    #velocity;
    #acceleration;
    #id;
    static #tracker = 0;

    constructor()
    {
        this.#origin = new Point(0,0)
        this.#velocity = new Velocity(0,0)
        this.#acceleration = new Acceleration(0,0)
        this.#id = Shape.#getId()
    }

    getId()
    {
        return this.#id
    }

    static #getId()
    {
        let id = Shape.#tracker
        Shape.#tracker += 1
        return id
    }

    applyAcceleration(tick)
    {
        // Same as with moveShape need to check that the value of the acceleration is more than 0
        if (this.getAcceleration().getValue() > 0)
        {
            // Copy the acceleration by creating a new one, so as to not reference the actual one
            let acceleration = new Acceleration(this.getAcceleration().getValue(),this.getAcceleration().getTheta())

            // Ofset the value by 50 because engine doing 50 ticks per second and multiply by the tick speed
            let newValue = acceleration.getValue()*tick/50
            acceleration.setValue(newValue)

            // Apply the acceleration to the velocity of the object
            this.#velocity = Vector2.addVectors(this.getVelocity(),acceleration)
        }
    }

    setAcceleration(acceleration)
    {
        this.#acceleration = acceleration
    }

    getAcceleration()
    {
        return this.#acceleration
    }

    // We will assume engine with 50 ticks per second 
    moveShape(tick)
    {
        // Need to check that the update needs to happen, for this value of the velocity needs to be more than 0
        if (this.getVelocity().getValue() > 0)
        {
            // Add the velocity to the position to get new position, however take into account 50 ticks per second and tickspeed
            this.setPosition(this.getPosition().getX()+((this.getVelocity().getX()*tick)/50), this.getPosition().getY()+((this.getVelocity().getY()*tick)/50))
        }
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
        return [this.#velocity,this.#acceleration]
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