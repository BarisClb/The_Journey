-- For this kata we will be using the https://www.postgresqltutorial.com/postgresql-getting-started/postgresql-sample-database/

-- You are working for a company that wants to reward its top 10 customers with a free gift. You have been asked to generate a simple report that returns the top 10 customers by total amount spent ordered from highest to lowest. Total number of payments has also been requested.

-- The query should output the following columns:

-- customer_id [int4]
-- email [varchar]
-- payments_count [int]
-- total_amount [float]
-- and has the following requirements:

-- only returns the 10 top customers, ordered by total amount spent from highest to lowest


-- Best Answers

SELECT
   customer.customer_id,
   customer.email,
   COUNT(payment.payment_id) AS payments_count,
   CAST(SUM(payment.amount) AS float) AS total_amount
FROM customer
JOIN payment
   ON customer.customer_id = payment.customer_id
GROUP BY customer.customer_id
ORDER BY total_amount DESC
LIMIT 10

SELECT c.customer_id, c.email, payments_count, total_amount
   FROM 
(
   SELECT customer_id,
         COUNT(*) payments_count,
         SUM(amount)::float total_amount
      FROM payment
   GROUP BY customer_id
   ORDER BY total_amount DESC
   LIMIT 10
) q JOIN customer c
      ON q.customer_id = c.customer_id
   ORDER BY total_amount DESC
