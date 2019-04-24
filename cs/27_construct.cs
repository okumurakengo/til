using System;

class User {
    public string name = "me";
    public User(string name) {
        this.name = name;
    }
    // public User() { // オーバーロード
    //     this.name = "nobody";
    // }
    public User(): this("nobody") { // オーバーロード
    }
    public void SayHi() {
        Console.WriteLine($"hi {name}");
    }
}

class MyApp {

    static void Main() {
        User tom = new User("Tom");
        tom.SayHi();
        User user = new User();
        user.SayHi();
    }
}
