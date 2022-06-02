# Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

# It should remove all values from list a, which are present in list b.

# array_diff([1,2],[1]) == [2]
# If a value is present in b, all of its occurrences must be removed from the other:

# array_diff([1,2,2,2,3],[2]) == [1,3]


# MY ANSWER

def array_diff(a, b):
    answer = []
    for c in a:
        if c not in b:
            answer.append(c)
    return answer 


print(array_diff([1,2,3,2,3,2], [2]))


# BEST ANSWERS



# def array_diff(a, b):
#     return [x for x in a if x not in b]




# def array_diff(a, b):
#     return [x for x in a if x not in set(b)]



# def array_diff(a, b):
#     set_b = set(b)
#     return [i for i in a if i not in set_b]




# def array_diff(a, b):
#     #your code here
#     for i in range(len(b)):
#         while b[i] in a:
#             a.remove(b[i])
#     return a