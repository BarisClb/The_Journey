-- Now you have to write a function that takes an argument and returns the square of it.

--# write your SQL statement here: 
-- you are given a table 'square' with column 'n'
-- return a table with:
--   this column and your result in a column named 'res'


-- My Answer

select n, n*n as res from square 


-- Best Answers

SELECT n, CAST(POWER(n, 2)as int) as res FROM square

select n, power(n,2)::int as res from square
