type MoveDirection = "left" | "right";
type Direction = "N" | "S" | "E" | "W";

export function turn(current: Direction, target: Direction): MoveDirection {
  let cap: string[] = ["N", "E", "S", "W"];

  cap.indexOf(current) == 0
    ? cap.unshift(cap.pop())
    : cap.indexOf(current) == 3
    ? cap.push(cap.shift())
    : cap;

  return cap.indexOf(current) < cap.indexOf(target) ? "right" : "left";
}

console.log(turn("W", "N"));
