export const digitalRoot = (n: number): number => {

    let strNumber = String(n);
    

    while (strNumber.length == 1) {

        return digitalRoot(Number(strNumber[strNumber.length]) + Number(strNumber[strNumber.length - 1]));

    }

    return Number(digitalRoot);
}

console.log(digitalRoot(123));

