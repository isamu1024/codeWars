export function rectangleRotation(a: number, b: number) {
  let angle: number = (45 * Math.PI) / 180;
  let count: number = 0;
  let max = Math.floor(
    Math.abs((-a / 2) * Math.cos(angle) - (b / 2) * Math.sin(angle))
  );

  for (let x: number = 0; x <= max; x++) {
    for (let y: number = -max; y <= max; y++) {
      let rotateX: number = x * Math.cos(angle) - y * Math.sin(angle);
      let rotateY: number = y * Math.cos(angle) + x * Math.sin(angle);
      if (
        rotateX >= -a / 2 &&
        rotateX <= a / 2 &&
        rotateY >= -b / 2 &&
        rotateY <= b / 2
      ) {
        count++;
      }
    }
  }
  return count * 2 - 3;
}
