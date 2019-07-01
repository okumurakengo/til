using System;
using System.Collections.Generic;

class MyApp {
    static void Main() {
        Dictionary<string, int> users = new Dictionary<string, int>() {
            {"taguchi", 50},
            {"fkoji", 80},
        };
        users.Add("dotinstall", 40);
        Console.WriteLine(users["fkoji"]);
        users["taguchi"] = 60;
        foreach (KeyValuePair<string, int> user in users) {
            Console.WriteLine($"{user.Key}: {user.Value}");
        }
    }
}
