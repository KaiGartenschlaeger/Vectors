import { Vector2 } from "./Vector2";

let v1 = new Vector2(10, 10);
let v2 = new Vector2(20, 10);
console.log(Vector2.add(v1, v2));
console.log(v1.added(v2));

console.log(v1.angleToPoint(v2));
