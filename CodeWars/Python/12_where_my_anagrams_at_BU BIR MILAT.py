# What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

# 'abba' & 'baab' == true

# 'abba' & 'bbaa' == true

# 'abba' & 'abbba' == false

# 'abba' & 'abca' == false
# Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

# anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

# anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

# anagrams('laser', ['lazing', 'lazy',  'lacer']) => []


# MY ANSWER


def anagrams(word, words):
    x = 0
    answer = ""    
    for a in words:
        c = all(word.count(i) == a.count(i) for i in word) and all(a.count(f) == word.count(f) for f in a)
        if c == True:
            answer = answer + a + " "
        else:
            pass
    return answer.split()


print(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']))


# def anagrams(word, words):
#     x = 0
#     answer = ""    
#     for a in words:
#         c = True
#         for i in word:
#             if c == False:
#              pass
#             elif word.count(i) == a.count(i):
#                 continue
#             else:
#              c = False
#          answer = answer + word + " "
#     return answer[,-1]



# BEST ANSWERS



# def anagrams(word, words): return [item for item in words if sorted(item)==sorted(word)]




# def anagrams(word, words):
#     return filter(lambda x: sorted(word) == sorted(x), words)




# from collections import Counter

# def anagrams(word, words):
#     counts = Counter(word)
#     return [w for w in words if Counter(w) == counts]




# def anagrams(word, words):
#     match = sorted(word)
#     return [w for w in words if match == sorted(w)]
