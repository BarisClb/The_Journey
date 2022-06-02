# def is_solved(board):
#     if 0 in board:
#         return "-1"
#     else:
#         for i in range(2):
#             if board[i][0] == board[i][1] == board[i][2]:
#                 return board[i][0]
#             elif board[0][i] == board[1][i] == board[2][i]:
#                 return board[0][i]
#             else:
#                 return 0





import re
def count_smileys(arr):
    count = 0
    for i in arr:
        print(re.match("(:|;)(-|~)*(\)|D)", i))
        if re.match("(:|;)(-|~)*(\)|D)", i) != None:
            count += 1
    return count

print(count_smileys([';]', ':[', ';*', ':$', ';-D']))