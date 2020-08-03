using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Remoting.Messaging;

namespace CountingDuplicates
{
    class Program
    {
        static void Main(string[] args)
        {
            string test = "aabbcdeaAAac";

            Console.WriteLine(DuplicateCount(test));


            Console.Read();

        }

        public static int DuplicateCount(string str)
        {
            str = str.ToUpper();
            Stack<char> duplicateLetters = new Stack<char>();

            for (int i = 0; i < str.Length; i++)
            {

                if (!duplicateLetters.Contains(str[i]) && str.Where(x => x == str[i]).Count() > 1)
                {
                    duplicateLetters.Push(str[i]);
                }

            }

            return duplicateLetters.Count();

        }
    }
}
