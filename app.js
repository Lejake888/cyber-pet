let name = prompt("Please enter your name: ");
alert(`Hello ${name}! Welcome to Cyber Pet!`);
let petChoice = prompt("Choose a pet:");

let check = petChoice.toLowerCase();

class Pet {
    constructor() {
        this.name = petName;
        this.play = 100;
        this.feed = 100;
        this.drink = 100;
        this.energy = 100;
    }
    petPlay() {
        this.play = this.play + 20;
        this.feed = this.feed - 10;
        this.drink = this.drink - 10;
        this.energy = this.energy - 15;
        alert(`${petName} is really happy now! (Fun = ${this.play}), but now it needs a rest (Hunger = ${this.feed}) (Thirst = ${this.drink}) (Energy = ${this.energy})`);
    }

    petFeed() {
        this.play = this.play - 20;
        this.feed = 100;
        this.drink = this.drink - 5;
        alert(`${petName} is now full (Hunger = ${this.feed}) (Fun = ${this.play}) (Thirst = ${this.drink})`);
    }

    petDrink() {
        this.play = this.play - 20;
        this.feed = this.feed - 5;
        this.drink = 100;
        alert(`${petName} is now very refreshed (Thirst = ${this.drink}) (Fun = ${this.play}) (Hunger = ${this.feed})`);
    }

    petRest() {
        this.energy = 100;
        this.play = this.play - 50
        alert(`${petName} is now well rested (Energy = ${this.energy}) but now it wants to play (Fun = ${this.play})`);
    }

    check() {
        // if (this.play <= 0 || this.feed <= 0 || this.drink <= 0 || this.energy <= 0) {
        //     alert(`${petName} is not feeling so good, sort out its needs`)
        // }
        if (this.play <= 0 || this.feed <= 0 || this.drink <= 0 || this.energy <= 0) {
            alert(`${petName} ran away because it was neglected :(`)
        }
        alert(`${petName}'s statistics: (Fun = ${this.play}) (Hunger = ${this.feed}) (Thirst = ${this.drink}) (Energy = ${this.energy})`);
    }
}

class Cat extends Pet {
    constructor() {
        super()
    }
    climb() {
        this.play = this.play + 25;
        this.feed = this.feed - 15;
        this.drink = this.drink - 15;
        this.energy = this.energy - 15;
        alert(`${petName} is climbing so high up! Look at it go! (Fun = ${this.play}) but now it's used up a lot of energy (Hunger = ${this.feed}) (Thirst = ${this.drink}) (Energy = ${this.energy})`);

    }
    hunt() {
        this.play = this.play + 25;
        this.feed = this.feed + 10;
        this.drink = this.drink - 10;
        this.energy = this.energy - 25;
        alert(`${petName} found a bird! Disgusting... but well done (Fun = ${this.play}) (Hunger = ${this.feed}) but now it's very tired (Thirst = ${this.drink}) (Energy = ${this.energy})`);
    }
}

class Dog extends Pet {
    constructor() {
        super()
        this.skill = 0;
    }
    fetch() {
        this.play = this.play + 30;
        this.feed = this.feed - 20;
        this.drink = this.drink - 20;
        this.energy = this.energy - 30;
        alert(`What a good doggy! ${petName} is great at catch! (Fun = ${this.play}) but now it's tired (Hunger = ${this.feed}) (Thirst = ${this.drink}) (Energy = ${this.energy})`)
    }
    walk() {
        this.play = this.play + 10;
        this.drink = this.drink - 10;
        this.feed = this.feed - 10;
        this.energy = this.energy - 20;
        alert(`${petName} was very well behaved! (Fun = ${this.play}) but now it's tired (Hunger = ${this.feed}) (Thirst = ${this.drink}) Energy = ${this.energy})`)

    }
    train() {
        this.skill++;
        this.play = this.play - 20;
        this.feed = this.feed - 40;
        this.drink = this.drink - 40;
        this.energy = this.energy - 40;
        alert(`${petName} is so well behaved and clever! (Skill = ${this.skill}) It's now very tired though! (Fun = ${this.play} (Hunger = ${this.feed}) (Thirst = ${this.drink}) Energy = ${this.energy})`)
    
    }
    // teachNewSkill() {
    //     if (this.skill >= 5) {
    //         choice = prompt(`${petName} can learn a new skill: Sit, Roll Over, Play Dead`)
    //         let trick = choice.toLowerCase();
    //         if (trick == "sit" || trick == "roll over" || trick == "play dead") {
    //             skill = choice.push(trick)
    //         }
    //     }
    //     else {
    //         alert(`You need more skill points to learn a new skill `)
    //     }
    // }

}

class Rabbit extends Pet {
    constructor() {
        super()
        this.socialLife = 10
    }
    hop() {
        this.play = this.play + 10;
        this.drink = this.drink - 10;
        this.feed = this.feed - 10;
        this.energy = this.energy -20;
        alert(`${petName} is hopping mad! Look at it go! (Fun = ${this.play}) but now it's tired and needs food and a drink (Hunger = ${this.feed}) (Thirst = ${this.drink}) (Energy = ${this.energy})`)

    }

    // socialise() {
    //     this.socialLife = this.socialLife + 2;
    //     this.energy = this.energy -10;
    //     alert (`${petName} socialised with the other bunnies, how cute! (Social = ${this.socialLife}) but it's getting tired (Energy = ${this.energy})`)
    // }
}

if (check == "cat") {
    alert(`Good choice! What a lovely cat!`);
    petName = prompt(`What do you want to call your cat?`);
    pet1 = new Cat(petName);
    alert(`Current statistics: Watch these levels! (Fun = ${pet1.play}) (Hunger = ${pet1.feed}) (Thirst = ${pet1.drink}) (Energy = ${pet1.energy})`);
    document.getElementById('cat').style.visibility = 'visible';
    document.getElementById('dog').remove();
    document.getElementById('rabbit').remove();
}
else if (check == "dog") {
    alert(`Good choice! What a fluffy dog!`);
    petName = prompt(`What do you want to call your dog?`);
    pet1 = new Dog(petName);
    alert(`Current statistics: Watch these levels! (Fun = ${pet1.play}) (Hunger = ${pet1.feed}) (Thirst = ${pet1.drink}) (Energy = ${pet1.energy})`);
    document.getElementById('dog').style.visibility = 'visible';
    document.getElementById('cat').remove();
    document.getElementById('rabbit').remove();
}

else if (check == "rabbit") {
    alert(`Good choice! What a cute rabbit!`);
    petName = prompt(`What do you want to call your rabbit?`);
    pet1 = new Rabbit(petName);
    alert(`Current statistics: Watch these levels! (Fun = ${pet1.play}) (Hunger = ${pet1.feed}) (Thirst = ${pet1.drink}) (Energy = ${pet1.energy})`);
    document.getElementById('rabbit').style.visibility = 'visible';
    document.getElementById('cat').remove();
    document.getElementById('dog').remove();
}

else {
    alert (`Sorry we do not have a ${check}`)
}

// To do list:

// Sort out socialise option for rabbits
// Make skills component effect dog
// Cat additions:
// Dog additions: Train
// Rabbit additions:
// General additions: Wash