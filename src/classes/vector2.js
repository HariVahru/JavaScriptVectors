
class Vector2
{
    #value;
    #x;
    #y;
    #theta;
    #rad;

    constructor (value, theta)
    {
        this.setValue(value)
        this.setTheta(theta)
        this.#rad = this.#theta * Math.PI / 180
        this.componentCalculator()
    }

    componentCalculator()
    {
        if (90 <= this.#theta >= 0 )
        {
            // first quadrant, positive x and y
            this.#x = this.#value * Math.sin(this.#rad)
            this.#y = this.#value * Math.cos(this.#rad)
        }
        else if (180 <= this.#theta > 90 )
        {
            // second quadrant, positve x and negative y
            this.#x = this.#value * Math.sin(this.#rad-(0.5 * Math.PI))
            this.#y = -1 * (this.#value * Math.cos(this.#rad-(0.5 * Math.PI)))
        }
        else if (270 <= this.#theta > 180)
        {
            // third quadrant, negative x and y
            this.#x = -1 * (this.#value * Math.sin(this.#rad-(Math.PI)))
            this.#y = -1 * (this.#value * Math.cos(this.#rad-(Math.PI)))
        }
        else if (360 <= this.#theta > 270 )
        {
            // fourth quadrant, negative x and positive y
            this.#x = -1 * (this.#value * Math.sin(this.#rad-(1.5 * Math.PI)))
            this.#y = this.#value * Math.cos(this.#rad-(1.5 * Math.PI))
        }
    }

    setValue (value)
    {
        // If the value of the vector is set to 0 or anything below, it will default to 1
        if (value > 0)
        {
            this.#value = value
        }
        else
        {
            this.#value = 1
        }
    }

    setTheta (theta)
    {
        // If bearing is anything below 0 or above 360 it will be set within the limit
        if (theta >= 0)
        {
            this.#theta = theta % 360
        }
        else
        {
            this.#theta = 360 + (theta % 360)
        }
        
    }

    getValue()
    {
        return this.#value
    }

    getTheta()
    {
        return this.#theta
    }

    getRad()
    {
        return this.#rad
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

export default Vector2