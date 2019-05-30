using System;

class User {
    private string name = "me!";
    public string Name {
        get { return this.name; }
        set {
            if (value != "") {
                this.name = value; 
            }
        }
    }
    // public string Name { get; set; } = "me!!!";
}

class MyApp {
    static void Main() {
        User user = new User();
        Console.WriteLine(user.Name);
        user.Name = "taguchi";
        Console.WriteLine(user.Name);
        user.Name = "";
        Console.WriteLine(user.Name);
    }
}
