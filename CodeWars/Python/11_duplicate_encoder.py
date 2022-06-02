# The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

# Examples
# "din"      =>  "((("
# "recede"   =>  "()()()"
# "Success"  =>  ")())())"
# "(( @"     =>  "))((" 
# Notes

# Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!


# MY ANSWER


def duplicate_encode(word):
    sentence = ""
    word = word.lower()
    for i in word:
        if word.count(i) > 1:
            sentence = sentence + ")"
        else:
            sentence = sentence + "("
    return sentence


word = input("Enter a word: ")

print(duplicate_encode(word))


# BEST ANSWERS



# def duplicate_encode(word):
#     return "".join(["(" if word.lower().count(c) == 1 else ")" for c in word.lower()])




# from collections import Counter

# def duplicate_encode(word):
#     word = word.lower()
#     counter = Counter(word)
#     return ''.join(('(' if counter[c] == 1 else ')') for c in word)




# def duplicate_encode(word):
#     word = word.lower()
#     return ''.join('(' if word.count(x) == 1 else ')' for x in word)




# def duplicate_encode(word):
#     new_string = ""
#     word = word.lower()
    
#     for char in word:
#         new_string += (")" if (word.count(char) > 1) else "(")
            
#     return new_string
