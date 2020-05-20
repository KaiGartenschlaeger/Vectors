export class Vector2 {
    x: number;
    y: number;

    /**
     * Represents an vector that contains zero (0, 0).
     */
    public static readonly zero: Vector2 = new Vector2(0, 0);

    /**
     * Represents an vector thas contains one (1, 1).
     */
    public static readonly one: Vector2 = new Vector2(1, 1);

    /**
     * Represents an vector that shows up (0, -1).
     */
    public static readonly up: Vector2 = new Vector2(0, -1);

    /**
     * Represents an vector that shows down (0, 1).
     */
    public static readonly down: Vector2 = new Vector2(0, 1);

    /**
     * Represents an vector that shows left (-1, 0).
     */
    public static readonly left: Vector2 = new Vector2(-1, 0);

    /**
     * Represents an vector that shows right (1, 0).
     */
    public static readonly right: Vector2 = new Vector2(1, 0);

    constructor(x: number = 0, y: number = 0) {
        this.x = x;
        this.y = y;
    }

    public add(other: Vector2): Vector2 {
        return Vector2.add(this, other);
    }

    public static add(a: Vector2, b: Vector2): Vector2 {
        return new Vector2(a.x + b.x, a.y + b.y);
    }

    public subtract(other: Vector2): Vector2 {
        return Vector2.subtract(this, other);
    }

    public static subtract(a: Vector2, b: Vector2): Vector2 {
        return new Vector2(a.x - b.x, a.y - b.y);
    }

    public multiply(scalar: number): Vector2 {
        return Vector2.multiply(this, scalar);
    }

    public static multiply(a: Vector2, scalar: number): Vector2 {
        return new Vector2(a.x * scalar, a.y * scalar);
    }

    /**
     * Returns the vector rotated by radians.
     */
    public rotated(radian: number) {
        var rads: number = this.angle() + radian;
        return Vector2.multiply(new Vector2(Math.cos(rads), Math.sin(rads)), this.length());
    }

    /**
     * Returns the vector’s angle in radians with respect to the X axis, or (1, 0) vector.
     */
    public angle(): number {
        return Math.atan2(this.y, this.x);
    }

    /**
     * Returns the vector’s length.
     */
    public length(): number {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    /**
     * Returns the vector’s length squared.
     * Prefer this method over length if you need to sort vectors or need the squared length for some formula.
     */
    public lengthSquared(): number {
        return this.x * this.x + this.y * this.y;
    }

    public distanceTo(other: Vector2): number {
        return Math.sqrt((this.x - other.x) * (this.x - other.x) + (this.y - other.y) * (this.y - other.y));
    }

    public toString = (): string => {
        return `{ x: ${this.x}, y: ${this.y} }`;
    };
}
