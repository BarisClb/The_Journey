// Very simple, given an integer or a floating-point number, find its opposite.

// Examples:

// 1: -1
// 14: -14
// -34: 34

// My Answer

using System;

public class Kata
{
   public static int Opposite(int number) => number <= 0 ? Math.Abs(number) : 0 - number;
}

// Best Answers

public class Kata
{
   public static int Opposite(int number)
   {
      // Happy Coding
      return -number;
   }
}

public class Kata
{
   public static int Opposite(int n)
   {
      return n * -1;
   }
}