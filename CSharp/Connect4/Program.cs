using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Connect4
{
    class Program
    {
        static void Main(string[] args)
        {
            Connect4 game = new Connect4();
        }


    }

    public class Connect4
    {
        public int[] grid = new int[42]; //the answer to life the universe and everything
        public int currentPlayer = 1;

        public Connect4()
        {
           
        }

        private string addToSelectedCol(int col)
        {
            int index = (col-1) * 6;
            bool empty = false;

            while (!empty)
            {
                empty = grid[index] == 0 ? true : false;
                index++;
                if (index == index + 6)
                    return "Column full";
            }

            grid[index] = currentPlayer;
            return $"Player ${currentPlayer}, has played";
        }

        private string Winner()
        {
            // check inlineWin

        }
    }


}
