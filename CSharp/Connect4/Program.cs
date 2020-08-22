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
            Game game = new Game();
            game.addToColumn(0);
            game.addToColumn(0);
            game.addToColumn(0);
            game.addToColumn(0);
            game.addToColumn(0);
            game.addToColumn(0);
            game.addToColumn(0);

            Console.Read();
        }
    }

    public struct Players
    {
        public Players(int id)
        {
            Id = id;
        }

        public int Id { get; private set; }

    }

    public struct Token
    {
        public int PlayerId { get; private set; }

        public Token(int playerId)
        {
            PlayerId = playerId;
        }

    }

    public class Game
    {
        private Stack<Token>[] grid;
        private Players[] players;
        public Game()
        {
            grid = new Stack<Token>[7];
            players = new Players[]{ new Players(1), new Players(2) };
            populate();
        }

        private void populate()
        {
            for (int i = 0; i < grid.Length; i++)
            {
                grid[i] = new Stack<Token>();
            }
        }

        public void addToColumn(int column)
        {
            if (grid[column].ToArray().Length != 5)
                grid[column].Push(new Token(1));
           
        }


    }
}


