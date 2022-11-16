// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
}
  
  // Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
}
  
  // create a function to factory a object
function pAequorFactory(number, array) {
    return {
        _specimenNum: number,
        _dna: array,
        mutate() {
            const index = (Math.floor(Math.random() * this._dna.length));
            console.log(index);
            let newBase = '';
            do {
                newBase = returnRandBase();
            } while (this._dna[index] === newBase);
            this._dna[index] = newBase;
            return this._dna;
        },
        compareDNA(pAequor) {
            let count = 0;
            for (let i = 0; i < pAequor._dna.length; i++) {
                if (pAequor._dna[i] === this._dna[i]) {
                    count++
                }
            }
            let percent = (count / pAequor.length) * 100;
            console.log(`specimen #${this._specimenNum} and specimen #${pAequor._specimenNum} have ${percent}% DNA in common`);
        }
    }
}


let test = mockUpStrand();
console.log(test);
let test2 = pAequorFactory(1, test);
console.log(test2);
console.log(test2.mutate());