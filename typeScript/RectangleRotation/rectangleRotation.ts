export function rectangleRotation(a: number, b: number) {
  let origine: number[][] = [
    [-a / 2, b / 2],
    [a / 2, b / 2],
    [a / 2, -b / 2],
    [-a / 2, -b / 2],
  ];
  // rotation trigo

  // Transformation rad / deg
t angle = 45 * (Math.PI / 180);
  const origineX: number[] = [-a / 2, a / 2, a / 2, -a / 2];
  const origineY: number[] = [b / 2, b / 2, -b / 2, -b / 2];

  let transformX = (x: number, y: number) =>
    x * Math.cos(angle) - y * Math.sin(angle);

  let transformY = (x: number, y: number) =>
    x * Math.sin(angle) + y * Math.cos(angle);

  let testX = transformX(origineX[0], origineY[0]);
  let testY = transformY(origineX[0], origineY[0]);
}

rectangleRotation(4, 6);
