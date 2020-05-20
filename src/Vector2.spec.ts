import { Vector2 } from "./Vector2";

describe('"Vector2 subtract', () => {
    it("should be correct", () => {
        let v1 = new Vector2(10, 10);
        let v2 = new Vector2(20, 10);
        let v3 = Vector2.subtract(v1, v2);

        expect(v3.x).toBe(-10);
        expect(v3.y).toBe(0);
    });
});

describe("Vector2 add", () => {
    it("should be correct", () => {
        let v1 = new Vector2(10, 10);
        let v2 = new Vector2(10, 15);
        let v3 = Vector2.add(v1, v2);

        expect(v3.x).toBe(20);
        expect(v3.y).toBe(25);
    });
});

describe("Vector2 distanceTo", () => {
    it("should be correct on same Y-Position", () => {
        let v1 = new Vector2(10, 10);
        let v2 = new Vector2(20, 10);

        let distance = v1.distanceTo(v2);

        expect(distance).toBe(10);
    });

    it("should be correct by different Y-Position", () => {
        let v1 = new Vector2(10, 10);
        let v2 = new Vector2(20, 20);

        let distance = v1.distanceTo(v2);

        expect(distance).toBeCloseTo(14.14);
    });
});
