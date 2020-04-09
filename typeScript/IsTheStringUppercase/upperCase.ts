export function isUpperCase(str: string) {

  let re = new RegExp(/[A-Z]/);

  for (let index = 0; index < str.length; index++) {

    re.test(str.charAt(index)) ? str.toLowerCase: str.toUpperCase;

      }

    console.log(str);
}

isUpperCase(`TotO`);

