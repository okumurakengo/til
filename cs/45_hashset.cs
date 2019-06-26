using System;
using System.Collections.Generic;

class MyApp {
    static void Main() {
        HashSet<int> answers = new HashSet<int>() {3, 5, 8, 5};
        answers.Add(10);
        answers.Remove(3);
        Console.WriteLine(answers.Contains(3));
        foreach (var answer in answers) {
            Console.WriteLine(answer);
        }
    }
}
