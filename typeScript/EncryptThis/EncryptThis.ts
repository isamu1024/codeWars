export const encryptThis = (str: string): string => {
  // str.length == 0 ? str : [suite du programme...] ;

  let encrypt = (x: string) =>
    x
      .split("")
      .map((val, idx, arr) =>
        idx == 0
          ? val.charCodeAt(0)
          : idx == 1
          ? arr[arr.length - 1]
          : idx == arr.length - 1
          ? arr[1]
          : val
      )
      .join("");

  return str
    .split(" ")
    .map((x) => encrypt(x))
    .join(" ");
};

console.log(encryptThis(" "));
