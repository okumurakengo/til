using System;

class MyApp {
    static void Main() {
        var scores = new[] {10, 30, 30};

        scores[1] = 40;
        Console.WriteLine(scores[1]);
    }
}
