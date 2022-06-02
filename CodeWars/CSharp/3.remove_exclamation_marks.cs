// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

// My Answer

public class Kata
{
   public static string RemoveExclamationMarks(string s)
   {
      string answer = "";
      for (int i = 0; i < s.Length; i++)
      {
         if (s[i] != '!')
         {
            answer += s[i];
         }
      }
      return answer;
   }
}

// Best Answers

public class Kata
{
   public static string RemoveExclamationMarks(string s)
   {
      return s.Replace("!", "");
   }
}

public class Kata
{
   public static string RemoveExclamationMarks(string s)
   {
      return string.IsNullOrEmpty(s) ? s : s.Replace("!", "");
   }
}

public class Kata
{
   public static string RemoveExclamationMarks(string s) => s.Replace("!", "");
}