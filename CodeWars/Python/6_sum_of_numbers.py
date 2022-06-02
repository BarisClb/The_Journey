# Given two integers a and b, which can be positive or negative, find the sum of all the integers between including them too and return it. If the two numbers are equal return a or b.

# Note: a and b are not ordered!

# Examples
# get_sum(1, 0) == 1   // 1 + 0 = 1
# get_sum(1, 2) == 3   // 1 + 2 = 3
# get_sum(0, 1) == 1   // 0 + 1 = 1
# get_sum(1, 1) == 1   // 1 Since both are same
# get_sum(-1, 0) == -1 // -1 + 0 = -1
# get_sum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2


# MY ANSWER


def get_sum(a, b):
    x = 0
    if a > b:
        while a >= b:
            x += a
            a -= 1
    elif b > a:
        while b >= a: 
            x += b
            b -= 1
    elif a == b:
         x = a
    return x

a = int(input("Enter first number: "))
b = int(input("Enter second number: "))

print(get_sum(a, b))


# BEST ANSWERS



# def get_sum(a,b):
#     return sum(xrange(min(a,b), max(a,b)+1))




# def get_sum(a, b):
#     return (a + b) * (abs(a - b) + 1) // 2




# def get_sum(a,b):
#     soma=0
#     if a==b:
#         return a
#     elif a > b:
#         for i in range(b,a+1):
#             soma += i
#         return soma
#     else:
#         for i in range(a,b+1):
#             soma += i
#         return soma




# def get_sum(a,b):
#     if a>b : a,b = b,a
#     return sum(range(a,b+1))




# def get_sum(a,b):
#     high = max(a, b)
#     low = min(a, b)
#     return sum(xrange(low, high+1))
