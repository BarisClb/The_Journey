# Description:
# In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

# Example:

# high_and_low("1 2 3 4 5")  # return "5 1"
# high_and_low("1 2 -3 4 5") # return "5 -3"
# high_and_low("1 9 3 4 -5") # return "9 -5"
# Notes:

# All numbers are valid Int32, no need to validate them.
# There will always be at least one number in the input string.
# Output string must be two numbers separated by a single space, and highest number is first.


# MY ANSWER


def high_and_low(numbers):
    numbers = numbers.split()
    y = str(numbers[0])
    z = str(numbers[0])
    for i in numbers:
        if int(i) < int(y):
            y = i
        elif int(i) > int(z):
            z = i  
    c = str(z + " " + y)
    return c

print(high_and_low(input("NUMBAHS: ")))


# BEST ANSWERS



# def high_and_low(numbers): #z.
#     nn = [int(s) for s in numbers.split(" ")]
#     return "%i %i" % (max(nn),min(nn))




# def high_and_low(numbers):
#   n = map(int, numbers.split(' '))
#   return str(max(n)) + ' ' + str(min(n))




# def high_and_low(numbers):
#     n = map(int, numbers.split(' '))
#     return "{} {}".format(max(n), min(n))




# def high_and_low(numbers):
#     nums = sorted(numbers.split(), key=int)
#     return '{} {}'.format(nums[-1], nums[0])




# def high_and_low(numbers):
#   return " ".join(x(numbers.split(), key=int) for x in (max, min))




# def high_and_low(numbers):
#   numbers = [int(c) for c in numbers.split(' ')]
#   return f"{max(numbers)} {min(numbers)}"




