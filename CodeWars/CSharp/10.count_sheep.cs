// If you can't sleep, just count sheep!!
// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

// My Answer

using System;

public static class Kata
{
   public static string CountSheep(int n)
   {
      string answer = "";
      for (int i = 1; i <= n; i++)
      {
         answer += $"{i} sheep...";
      }
      return answer;
   }
}

// Best Answer

// using System.Linq;

public static class Kata
{
   public static string CountSheep(int n)
   {
      return string.Concat(Enumerable.Range(1, n).Select(i => $"{i} sheep..."));
   }
}