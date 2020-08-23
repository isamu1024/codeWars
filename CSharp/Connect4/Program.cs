using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;

namespace Connect4
{
    class Program
    {
        static void Main()
        {





            


            Console.Read();
        }

        public class Connect4 {

            List<int>[] grid = new List<int>[7];
            int currentPlayer;
            Boolean hasPlayed;

            public Connect4()
            {
            }

            private void Populate()
            {
                for (int i = 0; i < grid.Length; i++)
                {
                    grid[i] = new List<int>();
                }
            }

            public string play(int col)
            {
                grid[col].ToArray().Length < 1 ? grid[col].Add(currentPlayer) : hasPlayed = false;
    
            return "";
            }

        }
    }

}


