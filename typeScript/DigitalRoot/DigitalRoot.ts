
const digitalRoot = (n:number):number => {

if (n <= 9)
  return n;

let nString: string = String(n);
let nArray : number[] = [];
let calc: number = 0;

for (let i:number = 0; i < n.toString().length; i++) {
  nArray.push(Number(nString.charAt(i)));
  calc += nArray[i];
}

return digitalRoot(calc);

};



console.log(digitalRoot(132189));