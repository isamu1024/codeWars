export function order(words: string){
  
  
  let re = new RegExp(/\w*[0-9]\w*/gm);

  let strArray :string[] = [];
  strArray.push(re.test(words));

  strArray.forEach(element => { console.log(element)});

}

order(`fear th3 r3pear`);

