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
            let percent = (Math.round((count / pAequor._dna.length) * 10000)/100);
            console.log(`specimen #${this._specimenNum} and specimen #${pAequor._specimenNum} have ${percent}% DNA in common`);
        },
        willLikelySurvive() {
            let count = 0;
            for (const base of this._dna) {
                if (base === 'C' || base === 'G') {
                    count++;
                }
            } 
            let percent = count / this._dna.length;
            return (percent >= 0.6)
        }
    }
}



const creatingPAequors = (numberOfAequors) => {
    let pAequors = [];
    let i = 1;
    do {
        const strand = mockUpStrand();
        const pAequor = pAequorFactory(i, strand);
        do {
            pAequor.mutate()
        } while (!pAequor.willLikelySurvive());
        i++;
        pAequors.push(pAequor);
    } while (i < numberOfAequors);
    return pAequors
}

pAqueors = creatingPAequors(30);
console.log(pAqueors);


