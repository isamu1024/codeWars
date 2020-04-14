/** 
dig_pow(89, 1) should return 1 since 8¹ + 9² = 89 = 89 * 1
dig_pow(92, 1) should return -1 since there is no k such as 9¹ + 2² equals 92 * k
dig_pow(695, 2) should return 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2
dig_pow(46288, 3) should return 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
*/

export class G964 {
  public static digPow = (n: number, p: number) => {
    let calc: number = 0;
    let v: string[] = n.toString().split("");

    v.forEach((element) => {
      calc += Math.pow(Number(element), p);
      p++;
    });

    return calc % n == 0 ? calc / n : -1;
  };
}

let test: number = G964.digPow(114, 3);
