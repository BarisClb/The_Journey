// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

// My Answer

public class Kata
{
   public static int FindSmallestInt(int[] args)
   {
      int lowestNum = args[0];
      for (int i = 1; i < args.Length; i++)
      {
         if (args[i] < lowestNum)
         {
            lowestNum = args[i];
         }
      }
      return lowestNum;
   }
}

// Best Answers

// using System.Linq;

public class Kata
{
   public static int FindSmallestInt(int[] args)
   {
      return args.Min();
   }
}

// using System.Linq;

public class Kata
{
   public static int FindSmallestInt(int[] args) => args.Min();

}

// using System;
// using System.Collections;

public class Kata
{
   public static int FindSmallestInt(int[] args)
   {
      Array.Sort(args);

      return args[0];
   }
}