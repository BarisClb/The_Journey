# equation = []
# def zero(0 = None): 
#     return 0
# def one():
#     equation.append("1")
#     return
# def two():
#     equation.append("2")
#     return
# def three(): 
#     equation.append("3")
#     return
# def four(): 
#     equation.append("4")
#     return
# def five():
#     equation.append("5")
#     return
# def six():
#     equation.append("6")
#     return
# def seven(): 
#     equation.append("7")
#     return
# def eight(): 
#     equation.append("8")
#     return
# def nine(): 
#     equation.append("9")
#     return
# def plus(): 
#     equation.append("+")
#     return
# def minus(): 
#     equation.append("-")
#     return
# def times(): 
#     equation.append("*")
#     return

# def divided_by(): 
#     equation.append("%")
#     return    

# def assert_equals():    
#     if equation[1] == "+":
#         return int(equation[2]) + int(equation[0]) 
#     elif equation[1] == "-":
#         return int(equation[2]) - int(equation[0]) 
#     elif equation[1] == "*":
#         return int(equation[2]) * int(equation[0])
#     else:
#         return int(equation[2]) % int(equation[0])


# print(assert_equals(seven(times(five())))





def multi(*args):
    result = 1
    for number in args:
        result *= number
    print(result)

multi(9, 3, 0, 4)


