using System;

class MyApp {

    static void Main() {
        Console.WriteLine("hello " + "world");
        Console.WriteLine("he\nllo " + "wo\trld");

        var name = "taguchi";
        var score = 52.3;
        Console.WriteLine(string.Format("{0} [{1}]", name, score));
        Console.WriteLine($"{name} [{score}]");
        Console.WriteLine($"{name, -10} [{score, 10}]");
        Console.WriteLine($"{name, -10} [{score, 10:0.00}]");
        Console.WriteLine($"{name, -10} [{score + 25, 10:0.00}]");
    }

}