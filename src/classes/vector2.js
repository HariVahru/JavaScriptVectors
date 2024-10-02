
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
        // If the value of the vector is set to anything below 0, it will default to 1
        if (value >= 0)
        {
            this.#value = value
        }
        else
        {
            this.#value = 1
        }
        this.componentCalculator()
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
        this.componentCalculator()
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

    // Adding static method which can add two vectors
    static addVectors(v1, v2)
    {
        // work out new x and y
        let newX = v1.getX() + v2.getX()
        let newY = v1.getY() + v2.getY()


        // work out new value 
        let newValue = Math.sqrt(Math.pow(newX,2)+Math.pow(newY,2))

        // work out new theta
        let newRad;
        if (newX >= 0 && newY >= 0)
        {
            newRad = Math.asin(newX / newValue)
        }
        else if (newX >= 0 && newY < 0)
        {
            newRad = Math.abs(Math.asin(newY / newValue)) + (0.5 * Math.PI)
        }
        else if (newX < 0 && newY < 0)
        {
            newRad = Math.abs(Math.asin(newX / newValue)) + (Math.PI)
        }
        else if (newX < 0 && newY >= 0)
        {
            newRad = Math.abs(Math.asin(newY / newValue)) + (1.5 * Math.PI)
        }
        let newTheta = newRad * 180 / Math.PI
        return new Vector2(newValue,newTheta)
    }

    static addBunchOfVectors(v)
    {
        // work out new x and y
        let newX = v.reduce((accumulator, currentValue) => accumulator + currentValue.getX(), 0)
        let newY = v.reduce((accumulator, currentValue) => accumulator + currentValue.getY(), 0)
        // let newX = v1.getX() + v2.getX()
        // let newY = v1.getY() + v2.getY()


        // work out new value 
        let newValue = Math.sqrt(Math.pow(newX,2)+Math.pow(newY,2))

        // work out new theta
        let newRad;
        if (newX >= 0 && newY >= 0)
        {
            newRad = Math.asin(newX / newValue)
        }
        else if (newX >= 0 && newY < 0)
        {
            newRad = Math.abs(Math.asin(newY / newValue)) + (0.5 * Math.PI)
        }
        else if (newX < 0 && newY < 0)
        {
            newRad = Math.abs(Math.asin(newX / newValue)) + (Math.PI)
        }
        else if (newX < 0 && newY >= 0)
        {
            newRad = Math.abs(Math.asin(newY / newValue)) + (1.5 * Math.PI)
        }
        let newTheta = newRad * 180 / Math.PI
        return new Vector2(newValue,newTheta)
    }
}

export default Vector2