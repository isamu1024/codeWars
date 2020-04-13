class G964 {
  public static primeFactors = (n) => {
    let i: number = 2;
    let fact: number[] = [];
    let output: string = ``;

    let div = (x: number) => {
      i = 2;
      while (n % i != 0) {
        i++;
      }
      return i;
    };

    while (n != 1) {
      fact.push(div(n));
      n = n / i;
    }

    for (let i = 0; i < fact.length; i++) {
      if (fact.length == 1 || fact[i] != fact[i + 1]) {
        output += `(${fact[i]})`;
      } else {
        let n: number = i;
        let count: number = 1;
        while (fact[n] == fact[n + 1]) {
          count++;
          n++;
          i = n;
        }
        output += `(${fact[i]}**${count})`;
      }
    }
    console.log(output);
  };
}

// function div(n: number): string {
//   let i: number = 2;
//   let fact: number[] = [];
//   let output: string = ``;

//   let div = (x: number) => {
//     i = 2;
//     while (n % i != 0) {
//       i++;
//     }
//     return i;
//   };

//   while (n != 1) {
//     fact.push(div(n));
//     n = n / i;
//   }

//   for (let i = 0; i < fact.length; i++) {
//     if (fact.length == 1 || fact[i] != fact[i + 1]) {
//       output += `(${fact[i]})`;
//     } else {
//       let n: number = i;
//       let count: number = 1;
//       while (fact[n] == fact[n + 1]) {
//         count++;
//         n++;
//       }
//       output += `(${fact[i]}**${count})`;
//     }
//   }

//   return output;
// }

// console.log(div(7775460));

G964.primeFactors(7775460);
