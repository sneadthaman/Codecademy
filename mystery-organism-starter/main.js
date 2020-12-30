const demoInstances = []

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

const pAequorFactory = (number, dnaArray) => {
  return {
    specimenNum: number,
    dna: dnaArray,
    mutate() {
      console.log("Specimen #"+this.specimenNum)
      console.log("Original DNA Strand: \t"+this.dna)
      const randomBaseIndex = Math.floor(Math.random()*15)
      
      let newBase = mockUpStrand();
      
      while(newBase[0] == this.dna[randomBaseIndex]) {
        newBase = mockUpStrand()
      }
      this.dna[randomBaseIndex] = newBase[0]
      console.log("New DNA Strand: \t"+this.dna)
      return this.dna
    },
    compareDNA(specNum) {
      let thisDNA = this.dna
      let compDNA = sampleDna1.dna
      let match = 0

      console.log(`Specimen #${this.specimenNum}: \t\t`+thisDNA)
      console.log(`Specimen #${specNum}: \t\t`+compDNA)

      for(let i=0; i<thisDNA.length; i++) {
        if(thisDNA[i] == compDNA[i]) {
          match ++
        }
      }
      console.log("Matches: "+match)
        let sum = ((match / thisDNA.length) * 100).toFixed(2)
        //let perc = sum.toFixed(2)
        console.log(`Specimen #${this.specimenNum} and Specimen #${specNum} have ${sum}% DNA in common`)
        return sum
    },
    willLikelySurvive() {
      let survivability = 0

      for(let i=0; i<this.dna.length; i++) {
        if (this.dna[i] == 'C' || this.dna[i] == 'G') {
          survivability++
        }
      }
      let chances = (survivability / this.dna.length).toFixed(2)
      if (chances >= 0.6) {
        console.log(`Specimen #${this.specimenNum}'s chances are ${chances*100}% and will likely survive.`)
        return true
      } else {
        console.log(`Specimen #${this.specimenNum}'s chances are ${chances*100}% and will likely NOT survive.`)
        return false
      }
    }
  }
}

const createInstances = () => {
  let orgNum = 10;
  for(let i=0; i<30; i++) {
    demoInstances.push(pAequorFactory(orgNum, mockUpStrand()))
    orgNum++
  }
}

const sampleDna1 = pAequorFactory(3, mockUpStrand())
sampleDna1.mutate()

console.log("-----------------------")

const sampleDna2 = pAequorFactory(4, mockUpStrand())
sampleDna2.mutate()

console.log("-----------------------")

const sampleDna3 = pAequorFactory(5, mockUpStrand())
sampleDna3.mutate()

console.log("-----------------------")

sampleDna2.compareDNA(3);

console.log("-----------------------")

sampleDna3.willLikelySurvive()

createInstances()

console.log(demoInstances)





