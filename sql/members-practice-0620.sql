USE study_db;

DROP TABLE IF EXISTS members;

CREATE TABLE members (
  id INT,
  name VARCHAR(50),
  age INT,
  city VARCHAR(20)
);

INSERT INTO members VALUES (1, '김철수', 25, '서울');
INSERT INTO members VALUES (2, '이영희', 30, '부산');
INSERT INTO members VALUES (3, '박지민', 22, '서울');
INSERT INTO members VALUES (4, '최수현', 28, '대구');

SELECT * FROM members;

SELECT name, age FROM members WHERE city = '서울';

SELECT * FROM members WHERE age >= 20 AND age <= 29;

SELECT * FROM members ORDER BY age ASC;

SELECT * FROM members ORDER BY age DESC;

SELECT * FROM members WHERE age >= 25 ORDER BY name ASC;

DELETE FROM members WHERE city = '부산';

SELECT * FROM members;