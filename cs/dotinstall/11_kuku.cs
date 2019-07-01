using System;

class Tes
{
   static void Main()
   {
        string s = "";
        for (int i = 1; i <= 9; i++)
        {
            for (int j=1; j<=9; j++){
                s += (i * j).ToString() + " ";
            }
            Console.WriteLine(s);
            s = "";
        }
   }
}
