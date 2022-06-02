# If we were to set up a Tic-Tac-Toe game, we would want to know whether the board's current state is solved, wouldn't we? Our goal is to create a function that will check that for us!

# Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty, 1 if it is an "X", or 2 if it is an "O", like so:

# [[0, 0, 1],
#  [0, 1, 2],
#  [2, 1, 0]]
# We want our function to return:

# -1 if the board is not yet finished (there are empty spots),
# 1 if "X" won,
# 2 if "O" won,
# 0 if it's a cat's game (i.e. a draw).


# MY ANSWER

def is_solved(board):
    for i in range(3):
        if board[i][0] == board[i][1] == board[i][2] != 0:
            return board[i][0]
        elif board[0][i] == board[1][i] == board[2][i] != 0:
            return board[0][i]
    if board[0][0] == board[1][1] == board[2][2] != 0:
        return board[0][0]
    elif board[0][2] == board[1][1] == board[2][0] != 0:
        return board[0][2]        
    elif 0 not in board[0] and 0 not in board[1] and 0 not in board[2]:
        return 0
    else:
        return -1



# BEST ANSWERS



# def isSolved(board):
#     for i in range(0,3):
#         if board[i][0] == board[i][1] == board[i][2] != 0:
#             return board[i][0]
#         elif board[0][i] == board[1][i] == board[2][i] != 0:
#             return board[0][i]
            
#     if board[0][0] == board[1][1] == board[2][2] != 0:
#         return board[0][0]
#     elif board[0][2] == board[1][1] == board[2][0] != 0:
#         return board[0][0]

#     elif 0 not in board[0] and 0 not in board[1] and 0 not in board[2]:
#         return 0
#     else:
#         return -1    




# import itertools

# def isSolved(board):
#     b = list(itertools.chain(*board))
#     for p, q, r in [(0, 1, 2), (3, 4, 5), (6, 7, 8), (0, 3, 6), (1, 4, 7), (2, 5, 8), (0, 4, 8), (2, 4, 6)]:
#         if b[p] == b[q] == b[r] != 0: return b[p]
#     return 0 if sum(b) == 13 else -1




# def some(f, xs): 
#     return reduce(lambda x,y: x or f(y), xs, False)

# def every(f, xs): 
#     return reduce(lambda x,y: x and f(y), xs, True)

# def wins(player, line): 
#     return every(lambda x: x == player, line)

# def isSolved(board):
#     rows = board
#     cols = zip(*board)
#     diag = [board[i][i] for i in range(3)]
#     anti = [board[i][2-i] for i in range(3)]

#     lines = rows + cols + [diag, anti]

#     for i in (1,2):
#         if some(lambda line: wins(i, line), lines):
#             return i

#     if some(lambda line: some(lambda y: y == 0, line), lines):
#         return -1
#     else:
#         return 0




# from operator import add

# # the indices of the flattened tic-tac-toe board
# # 0 1 2
# # 3 4 5
# # 6 7 8

# # win_patterns represents all possible lines, columns and diagonals in the board using digits as indices
# win_patterns = [ '012', '036', '678', '258', '048', '642', '345' ]

# def isSolved(board):
#   board = reduce(add,board)
#   filled_patterns = 0
#   # check all patterns(all possible lines/columns/diags)
#   for pattern in win_patterns:
#       # check which symbols fill each pattern
#       spots = [board[int(i)] for i in pattern]
#       # if the same side occupies an entire pattern, it wins
#       if   spots.count(1)==3: return 1              # 'X' victory
#       elif spots.count(2)==3: return 2              # 'Y' victory
#       elif spots.count(0)==0: filled_patterns +=1   # this pattern is occupied by both, therefore it can't be won.
  
#   # if all possible paths that can grant victory are filled, then there's a draw.
#   return 0 if filled_patterns==len(win_patterns) else -1
  
#   print(flattened)




# def isSolved(board):
#     for sign in [1, 2]:
#         win = [sign] * 3
#         if (win in board or
#             win in zip(*board[::-1]) or
#             win in [[board[x][0], board[1][1], board[2-x][2]] for x in [0, 2]]):
#                 return sign
#     return -1 if 0 in sum(board, []) else 0
