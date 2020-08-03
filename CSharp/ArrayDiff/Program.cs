using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ArrayDiff
{
    class Program
    {
        static void Main(string[] args)
        {

            int[] array1 = { 1, 2, 3, 4 };
            int[] array2 = { 2, 3 };
            int[] arrayDiff = ArrayDiff(array1, array2);

            Console.Read();

        }

        public static int[] ArrayDiff(int[] a, int[] b)
        {

            int[] result = a;

            for (int i = 0; i < b.Length; i++)
            {
                result = result.Where(x => x != b[i]).ToArray();
            }
            
            return result;
        }

    }


    

}
