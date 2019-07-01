using System;

delegate void MyDelegate();

class MyApp {

    // static void Sayhi() => Console.WriteLine("hi!");
    // static void Sayhello() => Console.WriteLine("hello!");

    static void Main() {
        MyDelegate ShowMessage;

        // 匿名メソッド
        ShowMessage = delegate {
            Console.WriteLine("hi!");
        };
        // ラムダ式
        ShowMessage += () => Console.WriteLine("hello!");

        ShowMessage();
    }
}
