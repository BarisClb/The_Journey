# Define a function that takes one integer argument and returns logical value true or false depending on if the integer is a prime.

# Per Wikipedia, a prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

# Requirements
# You can assume you will be given an integer input.
# You can not assume that the integer will be only positive. You may be given negative numbers as well (or 0).
# NOTE on performance: There are no fancy optimizations required, but still the most trivial solutions might time out. Numbers go up to 2^31 (or similar, depends on language version). Looping all the way up to n, or n/2, will be too slow.
# Example
# is_prime(1)  /* false */
# is_prime(2)  /* true  */
# is_prime(-1) /* false */


# MY ANSWER


def is_prime(num):
    if num <=1:
        return False
    if num > 1:
        for i in range(2,num-1):
            a = num / i
            if a.is_integer():
                return False
            else:
                pass    
    return True


num = int(input("Give number: "))

print(is_prime(num))


# from math import sqrt
# def is_prime(num):
#     if num <=1:
#         return False
#     if num == 2:
#         return True
#     if num % 2 == 0:
#         return False
#     b = int(sqrt(num)+1)
#     for i in range(3,b,2):
#         if num % i == 0:
#             return False   
#     return True




# BEST ANSWERS



# import random

# def even_odd(n):
#     s, d = 0, n
#     while d % 2 == 0:
#           s += 1
#           d >>= 1
#     return s, d

# def Miller_Rabin(a, p):
#     s, d = even_odd(p-1)
#     a = pow(a, d, p)
#     if a == 1: return True
#     for i in range(s):
#         if a == p-1: return True
#         a = pow(a, 2, p)
#     return False

# def is_prime(p):
#     if p == 2: return True
#     if p <= 1 or p % 2 == 0: return False
#     return all(Miller_Rabin(random.randint(2,p-1),p) for _ in range(40))



# from math import sqrt
# def is_prime(num):
#     if num <= 1:
#         return False
#     i = 2
#     while i <= sqrt(num):    
#         if num%i == 0:
#             return False
#         i += 1
#     return True 



# from math import sqrt

# def is_prime(n):
#   return n > 1 and all(n % d for d in xrange(2, int(sqrt(n)) + 1))
