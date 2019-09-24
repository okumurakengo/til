function buildName(firstName: string, lastName = "Smith") {
    return firstName + " " + lastName;
}

let result1 = buildName("Bob");                  // works correctly now, returns "Bob Smith"
let result2 = buildName("Bob", undefined);       // still works, also returns "Bob Smith"
let result22 = buildName("Bob", null); // Bob null
// let result3 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
let result4 = buildName("Bob", "Adams");         // ah, just right

console.log(result1, result2, result22, result4)
