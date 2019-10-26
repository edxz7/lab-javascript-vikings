// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack(){
        return this.strength
    }
    receiveDamage(damage){
        this.health -= damage;
    }
}


// Viking
class Viking extends Soldier { 
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }
    receiveDamage(damage){
        this.health -= damage;
        if(this.health>0){
            return `${this.name} has received ${damage} points of damage`
        }
        if(this.health  <= 0){
            return `${this.name} has died in act of combat` 
        }
    }
    battleCry(){
        return "Odin Owns You All!";
    }
}
// let ericksen = new Viking('Ericksen', 100,10)
// console.log(ericksen.attack())

// Saxon
class Saxon extends Soldier {
    constructor(health, strength){
        super(health, strength);
    }
    receiveDamage(damage){
        this.health -= damage;
        if(this.health>0){
            return `A Saxon has received ${damage} points of damage`;
        }
        if(this.health  <= 0){
            return `A Saxon has died in combat`; 
        }
    }
}

// War
class War {
    constructor(){
        this.vikingArmy = []
        this.saxonArmy = []
    }
    addViking(viking) {
        this.vikingArmy.push(viking)
    }
    addSaxon(saxon) {
        this.saxonArmy.push(saxon)
    }
    vikingAttack() {
        if(this.saxonArmy.length===0) return 0
        let saxon = this.saxonArmy[Math.floor(Math.random(this.saxonArmy.length))]
        let damage = this.vikingArmy[0].attack()
        let result = saxon.receiveDamage(damage)
        this.saxonArmy = this.saxonArmy.filter((saxon) => {
            if(saxon.health<=0) return false
        })

        return result
    }
    saxonAttack() {
        if(this.vikingArmy.length===0) return 0
        let viking = this.vikingArmy[Math.floor(Math.random(this.vikingArmy.length))]
        let damage = this.saxonArmy[0].attack()
        
        let result = viking.receiveDamage(damage)
        this.vikingArmy = this.vikingArmy.filter((viking) => {
            if(viking.health<=0) return false
        })
        return result
    }
    showStatus(){
        if(this.saxonArmy.length ===0){
            return "Vikings have won the war of the century!"
        }
        else if(this.vikingArmy.length ===0){
            return "Saxons have fought for their lives and survive another day..."
        }
        else return "Vikings and Saxons are still in the thick of battle.";
    }
}
