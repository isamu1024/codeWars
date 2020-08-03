using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace IQtest
{
    class Program
    {
        static void Main(string[] args) { 

        string test = "2 4 7 8 10";
        string test2 = "1 2 1 1";

            Console.WriteLine(Test2(test));
            Console.WriteLine(Test2(test2));

            Console.Read();
        

        }

            public static int Test(string numbers)
            {
                int[] toIntArrray = Regex.Split(numbers, @"\D+").Select(x => int.Parse(x)).ToArray();

                if (toIntArrray.Where(x => x%2 == 0).ToArray().Length > 1)
                {
                    int culprit = toIntArrray.Where(x => x % 2 == 1).ToArray()[0];
                    return Array.IndexOf(toIntArrray,culprit) +1;
                } 

                else
                {
                    int culprit = toIntArrray.Where(x => x % 2 == 0).ToArray()[0];
                    return Array.IndexOf(toIntArrray, culprit) + 1;
                }

            }

            public static int Test2(string numbers)
        {
            int[] toIntArrray = Regex.Split(numbers, @"\D+").Select(x => int.Parse(x)).ToArray();

            return toIntArrray.Where(x => x % 2 == 0).ToArray().Length > 1 ?
                Array.IndexOf(toIntArrray, toIntArrray.Where(x => x % 2 == 1).ToArray()[0]) + 1 :
                Array.IndexOf(toIntArrray, toIntArrray.Where(x => x % 2 == 0).ToArray()[0]) + 1;

        }

    }
}
