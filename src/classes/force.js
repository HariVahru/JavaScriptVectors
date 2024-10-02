import Vector2 from "./vector2";

class Force extends Vector2
{

    #type;

    constructor(value, theta)
    {
        super(value, theta)
        this.#type = "Force"
    }

    getType()
    {
        return this.#type
    }
}

export default Force