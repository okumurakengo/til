using System;

class User {
    public string name = "me";
    public void SayHi() {
        Console.WriteLine($"hi {name}");
    }
}

class MyApp {

    static void Main() {
        User user = new User();
        Console.WriteLine(user.name);
        user.name = "taguchi";
        user.SayHi();
    }
}
