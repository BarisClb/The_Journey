-- Trolls are attacking your comment section!

-- A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

-- Your task is to write a function that takes a string and return a new string with all vowels removed.

-- For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

-- Note: for this kata y isn't considered a vowel.


-- My Answer

-- # write your SQL statement here: you are given a table 'disemvowel' with column 'str', return a table with column 'str' and your result in a column named 'res'.

select str, regexp_replace(str, '[aeiou]', '', 'gi') as res from disemvowel


-- Best Answers

SELECT str, TRANSLATE(str, 'aeiouAEIOU', '') AS res 
FROM disemvowel

SELECT str, REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(str, 'a', ''), 'e', ''), 'i', ''), 'o', ''), 'u', ''), 'A', ''), 'E', ''), 'I', ''), 'O', ''), 'U', '') AS res FROM disemvowel;
