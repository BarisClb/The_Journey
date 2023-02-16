-- You are given a table named repositories, format as below:

-- ** repositories table schema **

-- project
-- commits
-- contributors
-- address
-- The table shows project names of major cryptocurrencies, their numbers of commits and contributors and also a random donation address ( not linked in any way :) ).

-- Your job is to remove all numbers in the address column and replace with '!', then return a table in the following format:

-- ** output table schema **

-- project
-- commits
-- contributors
-- address
-- Case should be maintained.


-- My Answer

select project, commits, contributors, regexp_replace(address, '[0-9]', '!', 'gi') as address from repositories


-- Best Answers

SELECT PROJECT,
COMMITS,
CONTRIBUTORS,
TRANSLATE(ADDRESS,'1234567890','!!!!!!!!!!') AS ADDRESS
FROM REPOSITORIES

replace(replace(replace(replace(replace(replace(replace(replace(replace(address,'1','!'),'2','!'),'3','!'),'4','!'),'5','!'),'6','!'),'7','!'),'8','!'),'9','!') as address  from repositories

select project, commits, contributors, regexp_replace(address, '[[:digit:]]', '!', 'g') as address from repositories;

UPDATE repositories SET address = replace(address, '0', '' );
UPDATE repositories SET address = replace(address, '1', '' );
UPDATE repositories SET address = replace(address, '2', '' );
UPDATE repositories SET address = replace(address, '3', '' );
UPDATE repositories SET address = replace(address, '4', '' );
UPDATE repositories SET address = replace(address, '5', '' );
UPDATE repositories SET address = replace(address, '6', '' );
UPDATE repositories SET address = replace(address, '7', '' );
UPDATE repositories SET address = replace(address, '8', '' );
UPDATE repositories SET address = replace(address, '9', '' );
SELECT project, commits, contributors,
address FROM repositories