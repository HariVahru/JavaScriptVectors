class Point
{
    #x;
    #y;

    constructor(x,y)
    {
        this.#x = x;
        this.#y = y;
    }

    setX(value)
    {
        this.#x = value
    }

    setY(value)
    {
        this.#y = value
    }

    setPos(x,y)
    {
        this.#x = x;
        this.#y = y;
    }

    getPos()
    {
        return [this.#x,this.#y]
    }

    getX()
    {
        return this.#x
    }

    getY()
    {
        return this.#y
    }
}

export default Point