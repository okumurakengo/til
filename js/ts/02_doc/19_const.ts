const numLivesForCat = 9;
const kitty = {
    name: "Aurora",
    numLives: numLivesForCat,
}
console.log(kitty)

// all "okay"
kitty.name = "Rory";
console.log(kitty)
kitty.name = "Kitty";
console.log(kitty)
kitty.name = "Cat";
console.log(kitty)
kitty.numLives--;
console.log(kitty)
