using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Runtime.CompilerServices;
using System.Runtime.InteropServices.WindowsRuntime;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;

namespace Connect4
{
    class Program
    {
        static void Main()
        {

            Connect4 test1 = new Connect4();

            test1.play(0);
            test1.play(0);
            test1.play(0);
            test1.play(0);



        }

        public class Connect4 {

            int[,] grid = new int[6,7];
            int currentPlayer = 1;
            Boolean hasPlayed = false;

            public Connect4()
            {
                
            }


            public string play(int col)
            {
                
                if (grid[col].Count >= 6 )
                {
                    
                    return "Column full!";

                }

                grid[col].Add(currentPlayer);

                currentPlayer = currentPlayer == 1 ? 2 : 1;

                return $"Player ${currentPlayer} has a turn";
            }

            public static Boolean checkWin(List<int>[] grid)
            {

                Boolean win = false;

                // vérification en ligne

                for (int lines = 0; lines < grid.Length - 1; lines++)
                {
                    int count = 0;
                    for (int row = 0; row < grid.Length; row++)
                    {
                        
                    }
                }

            }

        }
    }

}


