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
            this._dna[Math.floor(Math.random() * this._dna.length)] = returnRandBase();
        }
    }
  }