import Point from "./point";
class Shape
{
    #origin;
    #vectors;

    constructor()
    {
        this.#origin = new Point(0,0)
        this.#vectors = []
    }

    getVectors()
    {
        return this.#vectors
    }

    addVector(newVector)
    {
        this.#vectors.push(newVector)
    }

    addVectors(vectorArray)
    {
        vectorArray.forEach((element) => {
            this.#vectors.push(element)
        })
    }

    removeVector(vector)
    {
        let newVectors = []
        this.#vectors.forEach((element) =>
        {
            if (element != vector)
            {
                newVectors.push(element)
            }
        })
        this.#vectors = newVectors;
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
}

export default Shape