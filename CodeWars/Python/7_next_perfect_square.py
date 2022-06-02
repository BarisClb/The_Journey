# You might know some pretty large perfect squares. But what about the NEXT one?

# Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

# If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is positive.

# Examples:

# findNextSquare(121) --> returns 144
# findNextSquare(625) --> returns 676
# findNextSquare(114) --> returns -1 since 114 is not a perfect


# MY ANSWER


def find_next_square(sq):
    a = ((sq ** (1/2)) + 1 ) ** 2
    if a.is_integer():
        return a
    else:
        return -1

sq = int(input("Give number: "))

print(find_next_square(sq))


# BEST ANSWERS



# def find_next_square(sq):
#     root = sq ** 0.5
#     if root.is_integer():
#         return (root + 1)**2
#     return -1




# def find_next_square(sq):
#     x = sq**0.5    
#     return -1 if x % 1 else (x+1)**2




# import math

# def find_next_square(sq):
#     return (math.sqrt(sq) + 1) ** 2 if (math.sqrt(sq)).is_integer() else -1




#  from math import sqrt
# def find_next_square(sq):
#     return (sqrt(sq)+1)**2 if sqrt(sq)%1 == 0 else -1




# import math
# def find_next_square(sq):    
#     input = float(math.sqrt(sq))
#     if input % 1 == 0: # Check input whether it is an integer
#      return pow(int(input)+1,2) # Return the next square if sq is a square
#     return -1 # Return -1 otherwise
