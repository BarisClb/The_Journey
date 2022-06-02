// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
// Note: input will never be an empty string

// My Answer

using System;
public class Kata
{
   public static string FakeBin(string x)
   {
      string answer = "";
      foreach (var num in x)
      {
         if (Char.GetNumericValue(num) < 5)
         {
            answer += 0;
         }
         else
         {
            answer += 1;
         }
      }
      return answer;
   }
}

// Best Answer

// using System.Linq;

public class Kata
{
   public static string FakeBin(string x)
   {
      return string.Concat(x.Select(a => a < '5' ? "0" : "1"));
   }
}

// using System.Text;
public class Kata
{
   public static string FakeBin(string x)
   {
      StringBuilder builder = new StringBuilder();

      foreach (char t in x)
      {
         builder.Append(t >= '5' ? '1' : '0');
      }

      return builder.ToString();
   }
}

// using System.Text.RegularExpressions;
public class Kata
{
   public static string FakeBin(string x)
   {
      x = Regex.Replace(x, "[4321]", "0");
      x = Regex.Replace(x, "[56789]", "1");
      return x;
   }
}

public class Kata
{
   public static string FakeBin(string x)
   {
      string result = "";

      foreach (char c in x)
         result += c < '5' ? "0" : "1";

      return result;
   }
}

// using System.Linq;

public class Kata
{
   public static string FakeBin(string x)
   {
      return string.Concat(x.Select(c => c / '5'));
   }
}