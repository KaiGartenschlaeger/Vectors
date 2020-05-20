import { Vector2 } from "./Vector2";

describe("Vector2 tests", () => {
    it("add", () => {
        let v1 = new Vector2(10, 10);
        let v2 = new Vector2(10, 15);
        let v3 = Vector2.add(v1, v2);

        expect(v3.x).toBe(20);
        expect(v3.y).toBe(25);
    });

    it("subtract", () => {
        let v1 = new Vector2(10, 10);
        let v2 = new Vector2(20, 10);
        let v3 = Vector2.subtract(v1, v2);

        expect(v3.x).toBe(-10);
        expect(v3.y).toBe(0);
    });
});
