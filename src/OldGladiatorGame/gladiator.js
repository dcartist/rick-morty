class Gladiator {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;

        if (this.weapon.toLowerCase() == 'spear') {
            this.weaponIndex = 2
            this.weapon = weapon.toLowerCase()
        } else if (this.weapon.toLowerCase() == 'trident') {
            this.weaponIndex = 1
            this.weapon = weapon.toLowerCase()
        } else if (this.weapon.toLowerCase() == 'club') {
            this.weaponIndex = 3
            this.weapon = weapon.toLowerCase()
        } else {
            console.log('You have an invalid weapon. You shall be assigned a Spear')
            this.weapon = 'spear'
            this.weaponIndex = 2
        }
        // if (this.weapon.toLowerCase() !== "spear" || this.weapon.toLowercase() !== "club" || this.weapon.toLowercase() !== "trident") {
        //     console.log("Sorry but you can't enter the area")
        // } //just realizing I was suppose to complete part two first
    }
}

var max = new Gladiator("Maximus", "Club")
var titus = new Gladiator("Titus", "Trident")
console.log(max.name)
console.log(max.weapon)