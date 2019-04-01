using System;

public class Test
{
    public static void Main ()
    {
        Console.WriteLine("a".GetType()); // System.String
        Console.WriteLine(1.GetType()); // System.Int32
        Console.WriteLine(1.5.GetType()); // System.Double
    }
}
