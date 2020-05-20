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

    public add(other: Vector2) {
        this.x += other.x;
        this.y += other.y;
    }

    public added(other: Vector2) {
        return Vector2.add(this, other);
    }

    public static add(a: Vector2, b: Vector2): Vector2 {
        return new Vector2(a.x + b.x, a.y + b.y);
    }

    public subtract(other: Vector2) {
        this.x -= other.x;
        this.y -= other.y;
    }

    public subtracted(other: Vector2): Vector2 {
        return Vector2.subtract(this, other);
    }

    public static subtract(a: Vector2, b: Vector2): Vector2 {
        return new Vector2(a.x - b.x, a.y - b.y);
    }

    public multiply(scale: number) {
        this.x *= scale;
        this.y *= scale;
    }

    public multiplied(scalar: number): Vector2 {
        return Vector2.multiply(this, scalar);
    }

    public static multiply(a: Vector2, scalar: number): Vector2 {
        return new Vector2(a.x * scalar, a.y * scalar);
    }

    public devide(other: Vector2) {
        this.x /= other.x;
        this.y /= other.y;
    }

    public devided(other: Vector2): Vector2 {
        return Vector2.devide(this, other);
    }

    public static devide(a: Vector2, b: Vector2): Vector2 {
        return new Vector2(a.x / b.x, a.y / b.y);
    }

    /**
     * Returns a new vector with all components in absolute values (i.e. positive).
     */
    public absoluted(): Vector2 {
        return new Vector2(Math.abs(this.x), Math.abs(this.y));
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
     * Returns the angle in radians to the vector other.
     */
    public angleTo(other: Vector2): number {
        return Math.atan2(this.cross(other), this.dot(other));
    }

    /**
     * Returns the angle in radians between the line connecting the two points and the X coordinate.
     */
    public angleToPoint(other: Vector2): number {
        return Math.atan2(this.y - other.y, this.x - other.x);
    }

    public negate() {
        this.x = -this.x;
        this.y = -this.y;
    }

    public negated(): Vector2 {
        return new Vector2(-this.x, -this.y);
    }

    /**
     * Returns the 2-dimensional analog of the cross product with the given vector.
     */
    public cross(other: Vector2): number {
        return this.x * other.y - this.y * other.x;
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

    /**
     * Returns the distance to vector other.
     */
    public distanceTo(other: Vector2): number {
        return Math.sqrt((this.x - other.x) * (this.x - other.x) + (this.y - other.y) * (this.y - other.y));
    }

    /**
     * Returns the squared distance to vector other.
     * Prefer this function over distanceTo if you need to sort vectors or need the squared distance for some formula.
     */
    public distanceSquaredTo(other: Vector2): number {
        return (this.x - other.x) * (this.x - other.x) + (this.y - other.y) * (this.y - other.y);
    }

    /**
     * Returns the dot product with vector other.
     */
    public dot(other: Vector2): number {
        return this.x * other.x + this.y * other.y;
    }

    /**
     * Normalizes the vector.
     * The vector scales to unit length. Equivalent to v / v.length().
     */
    public normalize() {
        let squaredLength = this.lengthSquared();
        if (squaredLength == 0) {
            this.x = 0;
            this.y = 0;
        } else {
            let length = Math.sqrt(squaredLength);
            this.x /= length;
            this.y /= length;
        }
    }

    /**
     * Returns a normalized vector.
     * The vector scales to unit length. Equivalent to v / v.length().
     */
    public normalized(): Vector2 {
        let tmp = new Vector2(this.x, this.y);
        tmp.normalize();

        return tmp;
    }

    public equals(other: Vector2): boolean {
        return this.x == other.x && this.y == other.y;
    }

    public toString = (): string => {
        return `{ x: ${this.x}, y: ${this.y} }`;
    };
}
