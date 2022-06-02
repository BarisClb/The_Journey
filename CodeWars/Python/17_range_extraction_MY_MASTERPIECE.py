# A format for expressing an ordered list of integers is to use a comma separated list of either

# individual integers
# or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"
# Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

# Example:

# solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20])
# # returns "-6,-3-1,3-5,7-11,14,15,17-20"

# MY ANSWER


def solution(args):
    answer = []
    answer2 = ""
    c = 0
    for i in range(len(args)):
        a = str(min(args))
        answer.append(a)
        args.remove(int(a))
    for y in answer:
        if c > 0:
            c -= 1
            continue
        elif y == answer[-1] or y == answer[-2]:
            answer2 = answer2 + y + ","
        for x in range(1,len(answer) - answer.index(y) - 1):
            if c > 0:
                continue
            elif abs(int(y) - int(answer[-x])) == (len(answer) - x) - answer.index(y):
                answer2 = answer2 + y + "-" + answer[-x] + ","
                c += (len(answer) - x) - answer.index(y)
            elif x == len(answer) - answer.index(y) - 2:
                answer2 = answer2 + y + ","
    return answer2[:-1]



# DENEME 1

# def solution(args):
#     answer = []
#     answer2 = ""
#     for i in range(len(args)):
#         a = str(min(args))
#         answer.append(a)
#         args.remove(int(a))
#     for y in answer:
#         x = 1
#         while len(answer) - answer.index(y) >= x + 2:
#             if abs(int(y)) - abs(int(answer[-x])) == (len(answer) - x) - answer.index(y):
#                 answer2 = answer2 + y + "-" + answer[-x] + ","
#                 answer = answer - answer.range[answer.index(y):-x]
#             else:
#                 x += 1
#         answer2 = answer2 + y + ","
#     return answer2


# v2

# def solution(args):
#     answer = []
#     answer2 = ""
#     for i in range(len(args)):
#         a = str(min(args))
#         answer.append(a)
#         args.remove(int(a))
#     for y in answer:
#         for x in range(len(answer) - answer.index(y) - 1):
#             if x == len(answer) - answer.index(y) - 1:
#                 answer2 = answer2 + y + ","
#             elif abs(int(y)) - abs(int(answer[-x])) == (len(answer) - x) - answer.index(y):
#                 answer2 = answer2 + y + "-" + answer[-x] + ","
#                 del answer[answer.index(y):-x]
#                 x = x + 400
#     return answer2[:-1]


# v3

# def solution(args):
#     answer = []
#     answer2 = ""
#     c = 1
#     for i in range(len(args)):
#         a = str(min(args))
#         answer.append(a)
#         args.remove(int(a))
#     for y in answer:
#         for x in range(len(answer) - answer.index(y) - c):
#             if x == len(answer) - answer.index(y) - 1:
#                 answer2 = answer2 + y + ","
#             elif abs(abs(int(y)) - abs(int(answer[-x]))) == (len(answer) - x) - answer.index(y):
#                 answer2 = answer2 + y + "-" + answer[-x] + ","
#                 del answer[answer.index(y):-x]
#                 c -= 1
#     return answer2[:-1]


# v4

# def solution(args):
#     answer = []
#     answer2 = ""
#     c = 0
#     for i in range(len(args)):
#         a = str(min(args))
#         answer.append(a)
#         args.remove(int(a))
#     for y in answer:
#         if c > 0:
#             c -= 1
#             continue
#         for x in range(len(answer) - answer.index(y) - 1):
#             if c > 0:
#                 continue
#             elif abs(int(y) - int(answer[-x])) == (len(answer) - x) - answer.index(y):
#                 answer2 = answer2 + y + "-" + answer[-x] + ","
#                 c += (len(answer) - x) - answer.index(y)
#                 continue
#             elif x == len(answer) - answer.index(y) - 2:
#                 answer2 = answer2 + y + ","
#     return answer2[:-1]

# v5 LAST SECOND STRING

# def solution(args):
#     answer = []
#     answer2 = []
#     answer3 = ""
#     c = 0
#     for i in range(len(args)):
#         a = str(min(args))
#         answer.append(a)
#         args.remove(int(a))
#     for y in answer:
#         if c > 0:
#             c -= 1
#             continue
#         for x in range(len(answer) - answer.index(y) - 1):
#             if c > 0:
#                 continue
#             if abs(int(y) - int(answer[-x])) == (len(answer) - x) - answer.index(y):
#                 answer2.append(y + "-" + answer[-x])
#                 c += (len(answer) - x) - answer.index(y)
#                 continue
#             elif x == len(answer) - answer.index(y) - 2:
#                 answer2.append(y)
#     for z in answer2:
#         answer3 += z + ","
#     return answer3[:-1]





# THE OPPOSITE :
# https://stackoverflow.com/questions/6405208/how-to-convert-numeric-string-ranges-to-a-list-in-python


# BEST ANSWERS



# def solution(args):
#     out = []
#     beg = end = args[0]
    
#     for n in args[1:] + [""]:        
#         if n != end + 1:
#             if end == beg:
#                 out.append( str(beg) )
#             elif end == beg + 1:
#                 out.extend( [str(beg), str(end)] )
#             else:
#                 out.append( str(beg) + "-" + str(end) )
#             beg = n
#         end = n
    
#     return ",".join(out)




# def solution(arr):
#     ranges = []
#     a = b = arr[0]
#     for n in arr[1:] + [None]:
#         if n != b+1:
#             ranges.append(str(a) if a == b else "{}{}{}".format(a, "," if a+1 == b else "-", b))
#             a = n
#         b = n
#     return ",".join(ranges)




# def solution(args):
#     result = ""
#     i = 0
#     while i<len(args):
#         val = args[i]
#         while i+1<len(args) and args[i]+1==args[i+1]:
#             i+=1
#         if val == args[i]:
#             result += ",%s"%val
#         elif val+1 == args[i]:
#             result += ",%s,%s"%(val, args[i])
#         else:
#             result += ",%s-%s"%(val, args[i])
#         i+=1
#     return result.lstrip(",")




# from itertools import groupby
# def solution(args):
#     grps = ([v[1] for v in g] for _,g in groupby(enumerate(args), lambda p: p[1]-p[0]))
#     return ','.join('{}{}{}'.format(g[0],'-'if len(g)>2 else',',g[-1])
#         if len(g)>1 else str(g[0]) for g in grps)




# """ noob solution, explained for noobs :) """

# def printable(arr):
#     return (','.join(str(x) for x in arr) if len(arr) < 3  # one or two consecutive integers : comma separated
#             else f'{arr[0]}-{arr[-1]}')                    # more : dash separated first and last integer

# def solution(args):
#     chunk, ret = [], []                                    # instantiate variables

#     for i in args:                                         # for each integer
#         if not len(chunk) or i == chunk[-1] + 1:           #     if first or consecutive
#             chunk.append(i)                                #         add to current chunk
#         else:                                              #     else, it's a gap
#             ret.append(printable(chunk))                   #         save current chunk
#             chunk = [i]                                    #         and restart a new one

#     ret.append(printable(chunk))                           # do not forget last chunk !

#     return ','.join(ret)                                   # return comma separated chunks




# def solution(args):
#     lasts, r = [], []
#     for a in args:
#         r, lasts = (r + add(map(str, lasts)), [a]) if lasts and lasts[-1] + 1 != a else (r, lasts + [a])
#     return ','.join(r + add(map(str, lasts)))
    
# add = lambda e: [e[0]] if len(e) == 1 else [e[0], e[1]] if len(e) == 2 else [e[0] + '-' + e[-1]]    
