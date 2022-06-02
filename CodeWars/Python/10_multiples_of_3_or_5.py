# If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

# Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

# Note: If the number is a multiple of both 3 and 5, only count it once. Also, if a number is negative, return 0(for languages that do have them)


# MY ANSWERS



def solution(number):    
    x = 0
    for i in range(1,number):
        a = i / 3
        b = i / 5
        if a.is_integer() and b.is_integer():
            x = x + i
        elif a.is_integer() and b.is_integer() == False:
            x = x + i
        elif a.is_integer() == False and b.is_integer():
            x = x + i        
        else:
            pass
    return x

number = int(input("Enter a number: "))

print(solution(number))


# BEST ANSWERS



# def solution(number):
#     return sum(x for x in range(number) if x % 3 == 0 or x % 5 == 0)




# def solution(number):
#     sum = 0
#     for i in range(number):
#         if (i % 3) == 0 or (i % 5) == 0:
#             sum += i
#     return sum
