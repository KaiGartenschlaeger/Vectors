import { Vector2 } from "./Vector2";

let v1 = new Vector2(10, 10);
let v2 = new Vector2(15, 22);
console.log(v2);

console.log(v2.length());
console.log(v2.lengthSquared());

console.log(Vector2.left.angle());

let vR = new Vector2(10, 0);
console.log(vR.rotated(Math.PI));

console.log(v1.equals(v2));
