enum Status { Ready, Waiting };
enum Color { Red, Blue, Green };

let a: Status = 1;
let b: number = Status.Ready;
let c: Status = Color.Red; // Error

// let status = Status.Ready;
// status = Color.Green;  // Error
