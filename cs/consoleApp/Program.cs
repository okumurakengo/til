﻿using System;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;

namespace TeleprompterConsole
{
    class Program
    {
        static IEnumerable<string> ReadFrom(string file)
        {
            string line;
            using (var reader = File.OpenText(file))
            {
                while ((line = reader.ReadLine()) != null)
                {
                    var words = line.Split(' ');
                    var lineLength = 0;
                    foreach (var word in words)
                    {
                        yield return word + " ";
                        lineLength += word.Length + 1;
                        if (lineLength > 700)
                        {
                            yield return Environment.NewLine;
                            lineLength = 0;
                        }
                    }
                }
            }
        }

        static void Main(string[] args)
        {
            var lines = ReadFrom("sampleQuotes.txt");
            foreach (var line in lines)
            {
                Console.WriteLine(line);
                if (!string.IsNullOrWhiteSpace(line))
                {
                    var pause = Task.Delay(200);
                    // Synchronously waiting on a task is an
                    // anti-pattern. This will get fixed in later
                    // steps.
                    pause.Wait();
                }
            }
        }
    }
}
