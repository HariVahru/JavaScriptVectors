import Vector2 from "./vector2";

class Velocity extends Vector2
{

    #type;

    constructor(value, theta)
    {
        super(value, theta)
        this.#type = "Velocity"
    }

    getType()
    {
        return this.#type
    }
}

export default Velocity