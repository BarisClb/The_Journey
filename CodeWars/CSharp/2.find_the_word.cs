// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// find_needle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
// should return "found the needle at position 5" (in COBOL "found the needle at position 6")

// My Answer

using System;
public class Kata
{
   public static string FindNeedle(object[] haystack)
   {
      for (int i = 0; i < haystack.Length; i++)
      {
         if (haystack[i] == "needle")
         {
            return ($"found the needle at position {i}");
         }
      }
      return "";
   }
}

// Best Answers

public class Kata
{
   public static string FindNeedle(object[] haystack)
   {
      return "found the needle at position " + Array.IndexOf(haystack, "needle");
   }
}

public class Kata
{
   public static string FindNeedle(object[] haystack)
   {
      int i = 0;
      while (haystack[i] != "needle")
      {
         i++;
      }
      return "found the needle at position " + i;
   }
}

// using System.Linq;

class Kata
{
   public static string FindNeedle(object[] haystack)
   {
      return $"found the needle at position {haystack.ToList().IndexOf("needle")}";
   }
}