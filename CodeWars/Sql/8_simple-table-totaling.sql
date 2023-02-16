-- For this challenge you need to create a simple query to display each unique clan with their total points and ranked by their total points.

-- people table schema
-- name
-- points
-- clan
-- You should then return a table that resembles below

-- select on
-- rank
-- clan
-- total_points
-- total_people
-- The query must rank each clan by their total_points, you must return each unqiue clan and if there is no clan name (i.e. it's an empty string) you must replace it with [no clan specified], you must sum the total_points for each clan and the total_people within that clan.

-- ##Note The data is loaded from the live leaderboard, this means values will change but also could cause the kata to time out retreiving the information.

-- NOTE: You're solution should use pure SQL. Ruby is used within the test cases to do the actual testing.


-- My Answer

select rank() over (order by sum(tbl.points) desc) as rank, tbl.clan, sum(tbl.points) as total_points, count(tbl.clan) as total_people from
(select name, case when clan is null or clan = '' then '[no clan specified]' else clan end as clan, points from people) tbl 
group by tbl.clan
order by sum(tbl.points) desc

select rank() over (order by sum(points) desc) as rank, 
case when clan is null or clan = '' then '[no clan specified]' else clan end as clan, 
sum(points) as total_points, count(clan) as total_people from people
group by clan
order by sum(points) desc


-- Best Answers

SELECT RANK() OVER (ORDER BY SUM(points) DESC),
   COALESCE(NULLIF(clan,''), '[no clan specified]') AS clan,
   SUM(points) AS total_points,
   COUNT(*) AS total_people
FROM people 
GROUP BY clan
ORDER BY total_points DESC
