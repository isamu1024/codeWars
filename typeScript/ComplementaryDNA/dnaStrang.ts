export class Kata {

    public dnaC: string; 

    constructor(dna: string) {
        this.dnaC = this.dnaStrand(dna);
    } 

    dnaStrand(dna: string) : string {

        for (let i: number = 0; i < dna.length; i++) {
            switch (dna.charAt(i)) {
                case "A":
                    dna.charAt(i).replace("A", "T");
                    break;
                case "T":
                    dna.charAt(i).replace("T", "A");
                    break;
                case "C":
                    dna.charAt(i).replace("C", "G");
                    break;
                case "G" :
                    dna.charAt(i).replace("G","C");   
            }
        }

        return dna;

    }
}

let toto = new Kata("ATCG");
console.log(toto.dnaC);



