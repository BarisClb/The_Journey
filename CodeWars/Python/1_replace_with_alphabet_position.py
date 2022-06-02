# Welcome.

# In this kata you are required to, given a string, replace every letter with its position in the alphabet.

# If anything in the text isn't a letter, ignore it and don't return it.

# "a" = 1, "b" = 2, etc.


# MY ANSWER


alphabet_lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s",
                      "t", "u", "v", "w", "x", "y", "z"]
alphabet_uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S",
                      "T", "U", "V", "W", "X", "Y", "Z"]


def alphabet_position(text):
    phrase = ""
    for letter in text:
        if letter in alphabet_lowercase:
            phrase = phrase + str(alphabet_lowercase.index(letter) + 1)
        elif letter in alphabet_uppercase:
            phrase = phrase + str(alphabet_uppercase.index(letter) + 1)
        else:
            phrase = phrase + letter
    return phrase

print(alphabet_position(input("Text: ")))


# BEST ANSWERS



# def alphabet_position(text):
#     return ' '.join(str(ord(c) - 96) for c in text.lower() if c.isalpha())




# def alphabet_position(s):
#   return " ".join(str(ord(c)-ord("a")+1) for c in s.lower() if c.isalpha())




# alphabet = 'abcdefghijklmnopqrstuvwxyz'

# def alphabet_position(text):
#     if type(text) == str:
#         text = text.lower()
#         result = ''
#         for letter in text:
#             if letter.isalpha() == True:
#                 result = result + ' ' + str(alphabet.index(letter) + 1)
#         return result.lstrip(' ')




# from string import ascii_lowercase

# def alphabet_position(text):
#     return ' '.join(str(ascii_lowercase.index(n.lower()) + 1) for n in text if n.isalpha())




# import string

# def alphabet_position(text):
#     return " ".join([str(string.lowercase.index(letter.lower())+1) for letter in list(text) if letter.isalpha()])




# def get_positions(text):
#     for char in text:
#         pos = ord(char)
#         if pos >= 65 and pos <= 90:
#             yield pos - 64
#         if pos >= 97 and pos <= 122:
#             yield pos - 96

# def alphabet_position(text):
#     return " ".join((str(char) for char in get_positions(text)))




# def alphabet_position(text):
#   al = 'abcdefghijklmnopqrstuvwxyz'
#   return " ".join(filter(lambda a: a != '0', [str(al.find(c) + 1) for c in text.lower()]))

