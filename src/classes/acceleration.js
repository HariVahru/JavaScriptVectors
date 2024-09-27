import Vector2 from "./vector2";

class Acceleration extends Vector2
{

    #type;

    constructor(value, theta)
    {
        super(value, theta)
        this.#type = "Acceleration"
    }

    getType()
    {
        return this.#type
    }
}

export default Acceleration