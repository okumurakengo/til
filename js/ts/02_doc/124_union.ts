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

function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
}

if (isFish(pet)) {
    pet.swim();
}
else {
    pet.fly();
}
