# Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

# Examples
# pig_it('Pig latin is cool') # igPay atinlay siay oolcay
# pig_it('Hello world !')     # elloHay orldway !


# MY ANSWER


def pig_it(text):
    words = text.split()
    x = 0
    for i in words:
        if i.isalpha():
            i = i + i[0] + "ay"
            words[x] = i[1: ]
            x += 1
    else:
        pass
    return " ".join(words)       

text = input("Write something (but leave space between last letter and punctuation): ")

print(pig_it(text))


# def pig_it(text):
#     words = text.split()
#     for i in words:
#         if i == "!":
#             pass
#         else:
#             i = i + i[0] + "ay"
#             i = i[1: ]
#     return words 

# print(pig_it('Hello world !'))


# BEST ANSWERS



# def pig_it(text):
#     lst = text.split()
#     return ' '.join( [word[1:] + word[:1] + 'ay' if word.isalpha() else word for word in lst])




# def pig_it(text):
#     return " ".join(x[1:] + x[0] + "ay" if x.isalnum() else x for x in text.split())




# def pig_it(text):
#     res = []
    
#     for i in text.split():
#         if i.isalpha():
#             res.append(i[1:]+i[0]+'ay')
#         else:
#             res.append(i)
            
#     return ' '.join(res)




# import re

# def pig_it(text):
#     return re.sub(r'([a-z])([a-z]*)', r'\2\1ay', text, flags=re.I)




# def solution(number):
#     a3 = (number-1)/3
#     a5 = (number-1)/5
#     a15 = (number-1)/15
#     result = (a3*(a3+1)/2)*3 + (a5*(a5+1)/2)*5 - (a15*(a15+1)/2)*15
#     return result




# def solution(number):
#     threes = range(3, number, 3)
#     fives = range(5, number, 5)
#     return sum(list(set(threes + fives)))
