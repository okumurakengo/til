using System;

delegate void MyDelegate();

class MyApp {
    static void Sayhi() => Console.WriteLine("hi!");
    static void Sayhello() => Console.WriteLine("hello!");
    static void Main() {
        MyDelegate ShowMessage;
        ShowMessage = Sayhi;
        ShowMessage += Sayhello;

        ShowMessage();
    }
}
