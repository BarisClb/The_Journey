# Simple, given a string of words, return the length of the shortest word(s).

# String will never be empty and you do not need to account for different data types.


# MY ANSWER


def find_short(s):
    l = s.split()
    return len(min(l, key=len))


# BEST ANSWERS



# def find_short(s):
#     return min(len(x) for x in s.split())




# def find_short(s):
#     return len(min(s.split(' '), key=len))




# def find_short(s):
#     return min(map(len, s.split(' ')))




# def find_short(s):
#     sList = s.split()
#     shortestLength = len(sList[0])
#     for item in sList:
#         if len(item) < shortestLength:
#             shortestLength = len(item)
#     return shortestLength
