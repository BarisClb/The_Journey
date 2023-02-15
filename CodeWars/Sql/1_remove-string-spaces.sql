-- Simple, remove the spaces from the string, then return the resultant string.

-- # write your SQL statement here: you are given a table 'nospace' with column 'x', return a table with column 'x' and your result in a column named 'res'.


-- My Answer

select x, replace(x, ' ', '') as res from nospace


-- Best Answers

SELECT x, TRIM(regexp_replace(x, '[\s+]', '', 'g')) AS res FROM nospace
