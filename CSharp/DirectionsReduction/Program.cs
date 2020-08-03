using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DirectionsReduction
{
    class Program
    {

        static void Main(string[] args)
        {

            string[] a = new string[] { "NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST" };
            dirReduc(a);

            Console.WriteLine();

            Console.Read();

        }

        public static string[] dirReduc(String[] arr)
        {

            IDictionary<string, int> directions = new Dictionary<string, int>()
                                            {
                                                {"NORTH",1},
                                                {"SOUTH",2},
                                                {"WEST",3},
                                                {"EAST",4},
                                            };
            string value;

            int output;
            Console.WriteLine(directions.TryGetValue("SOUTH", out output ));
            Console.WriteLine(output);

            for (int i = 0; i < arr.Length-1; i++)
            {
                int val1;
                directions.TryGetValue(arr[i], out val1);
                int val2;
                int calc =  + directions.TryGetValue(arr[i + 1], out val2);
            };

            return arr;
        }

    }
}
