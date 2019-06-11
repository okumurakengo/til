// using System;
using DotinstallName;

namespace DotinstallName {
    class User {
        public void SayHi() {
            System.Console.WriteLine("hi!");
        }
    }
}

class MyApp {
    static void Main() {
        User user = new DotinstallName.User();
        user.SayHi();
    }
}
