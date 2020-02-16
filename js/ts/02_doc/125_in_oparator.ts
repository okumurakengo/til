interface Bird {
    fly();
    layEggs();
}

interface Fish {
    swim();
    layEggs();
}

function getSmallPet(): Fish | Bird {
    return {
        fly() {
            console.log('fly')
        },
        swim() {
            console.log('swim')
        },
        layEggs(){
            console.log('layEggs')
        }
     };
}

let pet = getSmallPet();

function move(pet: Fish | Bird) {
    if ("swim" in pet) {
        return pet.swim();
    }
    return pet.fly();
}
move(pet)