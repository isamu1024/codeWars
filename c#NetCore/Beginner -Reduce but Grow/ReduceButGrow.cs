using System.Linq;

public class Kata
{
    public static int Grow(int[] x)
    {
        return x.Aggregate((a, b) => (a * b));
    }

}

