let re = new RegExp(/[A-Z | 9]/);

let toto : string = `toto`;

if (!re.test(toto)) {

toto = toto.toUpperCase();
    
    
};


console.log(toto);
