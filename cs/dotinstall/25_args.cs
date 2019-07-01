using System;

class MyApp {

    static void SayHi(string name, int age = 23) {
        Console.WriteLine($"hi! {name} ({age})");
    }

    static void Main() {
        SayHi("Tom", 30);
        SayHi("Bob");
        SayHi(age: 26, name: "Steve");
    }
}
