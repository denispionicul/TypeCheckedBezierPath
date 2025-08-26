declare namespace BezierPath {
    interface Constructor {
        /**
		 * Constructs a new Path.
		 */
        new (Position: Vector3[], CurveSize: number | number[]): Path
    }
}

interface Path {
	/**
	 * Takes in a T value from 0-1 and returns a uniform cframe across the path object.
	 */
    CalculateUniformCFrame(T: number): CFrame,

	/**
	 * Takes in a T value from 0-1 and returns a uniform position across the path object.
	 */
    CalculateUniformPosition(T: number): Vector3,

    /**
	 * Returns the path objects length.
	 */
    GetPathLength(): number,

    /**
	 * Takes in a T value from 0-1 and returns the derivative of that T value.
	 */
    CalculateDerivative(T: number): Vector3,

    /**
	 * Takes in a Vector3 position and returns the closest cframe and the closest T value on the path to the inputted position.
	 */
    CalculateClosestPoint(Position : Vector3): LuaTuple<[CFrame, number]>,

    /**
	 * Visualizes the path. Used for debug purposes.
	 */
    VisualizePath(): void
}