// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// Array can contain numbers or strings. X can be either.

// Return true if the array contains the value, false if not.

// My Answer

using System;
public class Kata
{
   public static bool Check(object[] a, object x) => Array.IndexOf(a, x) > -1 ? true : false;
}

// Best Answers

// using System.Linq;

public class Kata
{
   public static bool Check(object[] a, object v) => a.Contains(v);
}