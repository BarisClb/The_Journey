# Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

# Examples input/output:

# XO("ooxx") => true
# XO("xooxx") => false
# XO("ooxXm") => true
# XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
# XO("zzoo") => false


# MY ANSWER


def xo(s):
    if s.count("x") + s.count("X") != s.count("o") + s.count("O"):
        return False
    else:
        return True


print(xo(input("Put IT: ")))


# BEST ANSWERS



# def xo(s):
#     s = s.lower()
#     return s.count('x') == s.count('o')




# def xo(s):
#     return s.lower().count('x') == s.lower().count('o')




# def xo(s):

#   exes = 0
#   ohs = 0

#   for c in s.lower():
#     if c == 'x':
#       exes += 1
#     elif c == 'o':
#       ohs += 1

#   return exes == ohs




# from collections import Counter

# def xo(s):
#     d = Counter(s.lower())
#     return d.get('x', 0) == d.get('o', 0)




# def xo(s):
#     return True if s.lower().count('x') == s.lower().count('o') else False
