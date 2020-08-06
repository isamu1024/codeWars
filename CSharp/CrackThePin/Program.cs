using System;
using System.Security.Cryptography;
using System.Text;

namespace CrackThePin
{
    class Program
    {
        static void Main(string[] args)
        {

            Console.WriteLine(crack("827ccb0eea8a706c4c34a16891f84e7b"));
            Console.WriteLine(crack("86aa400b65433b608a9db30070ec60cd"));
            Console.WriteLine(crack("e85149c7d04d16f7d19c4d639cee8277"));
            Console.WriteLine(crack("8e3308c853e47411c761429193511819"));

            Console.Read();

        }

        public static string crack(string hash)
        {

            int current = 0;
            string format = "0"; // let assume that we don't have the length of the pin :D

            // Testing loop to match providing MD5
            while (hashMd5(current.ToString(format)) != hash)
            {
                current++;

                // Increasing the length of ToString() format 
                if (current.ToString().Length > format.Length)
                {
                    format += "0";
                    current = 0;
                }
            }

            return current.ToString(format);
        }

        public static string hashMd5(string chain)
        {
            using (MD5 md5 = MD5.Create())
            {
                byte[] inputBytes = System.Text.Encoding.ASCII.GetBytes(chain);
                byte[] hashBytes = md5.ComputeHash(inputBytes);

                StringBuilder sb = new StringBuilder();

                for (int i = 0; i < hashBytes.Length; i++)
                {
                    sb.Append(hashBytes[i].ToString("x2"));

                }

                return sb.ToString();
            }
        }
    }
}
