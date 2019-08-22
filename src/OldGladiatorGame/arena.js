class Arena {
    constructor(aName) {
        this.aName = aName
        if (this.aName === this.aName.toLowerCase()) {
            let switched = this.aName.split('')
            switched[0] = switched[0].toUpperCase()
            this.aName = switched.join('')
        }
        this.gladiators = []


    }
    addGladiator(x) {
        if (this.gladiators.length > 2) {
            console.log("Only Two men enter! One man leaves!")
            this.gladiators.pop()
        } else {
            this.gladiators.push(x)
        }
    }
    fight() {
        //Salute the fighters
        console.log(`Fighters ${this.gladiators[0].name} with ${this.gladiators[0].weapon} and ${this.gladiators[1].name} with ${this.gladiators[1].weapon} are ready to fight to the death! Gladiators... I salute you! `)
        console.log('\n\n\n\n\nAt my signal, 🔥🔥🔥unleash hell! 🔥🔥🔥🔥\n\n\n\n\n\n\n\n\n\n\n HELL!🔥🔥🔥')
            //defeated message function

        function commentary(looser, winner) {
            console.log(`${looser.name} with a ${looser.weapon} is dead all hail ${winner.name} with a ${winner.weapon} as the victor!`)
            console.log(`Who will enter the arena with ${winner.name}?!💪`)
        }


        //if they have the same weapons
        if (this.gladiators[0].weaponIndex === this.gladiators[1].weaponIndex) {
            console.log(`${this.gladiators[0].name} and ${this.gladiators[1].name} have the same weapons, they both perish on each other's weapons`)
            this.gladiators.length = 0
        } else if (this.gladiators[0].weapon == 'trident') {
            //checking if gladiator 2 has a spear
            if (this.gladiators[1].weapon == 'spear') {
                commentary(this.gladiators[1], this.gladiators[0])
                this.gladiators.pop()
            } else { //this is if gladiator 2 has a club
                commentary(this.gladiators[0], this.gladiators[1])
                this.gladiators.shift()
            }
        } else if (this.gladiators[0].weapon == 'spear') {
            //checking if gladiator 2 has a club
            if (this.gladiators[1].weapon == 'club') {
                commentary(this.gladiators[1], this.gladiators[0])
                this.gladiators.pop()
            } else { //this is if gladiator 2 has a trident
                commentary(this.gladiators[0], this.gladiators[1])
                this.gladiators.shift()
            }
        } else if (this.gladiators[0].weapon == 'club') {
            //checking if gladiator 2 has a trident
            if (this.gladiators[1].weapon == 'trident') {
                commentary(this.gladiators[1], this.gladiators[0])
                this.gladiators.pop()
            } else { //this is if gladiator 2 has a spear
                commentary(this.gladiators[0], this.gladiators[1])
                this.gladiators.shift()
            }
        }
        //When gladiator 1 has a trident





    }
}
var colosseum = new Arena("megalopolis")
colosseum.addGladiator(max)
colosseum.addGladiator(titus)