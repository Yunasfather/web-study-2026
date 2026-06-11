USE study_db;

DROP TABLE IF EXISTS students;

CREATE TABLE students (
    id INT,
    name VARCHAR(50),
    age INT
);

INSERT INTO students VALUES (1, 'Toraco', 39);
INSERT INTO students VALUES (2, 'jimin', 37);
INSERT INTO students VALUES (3, 'AKi', 30);

SELECT * FROM students;

UPDATE students
SET age = 17
WHERE name = 'jimin';

SELECT * FROM students;

DELETE FROM students
WHERE id = 3;

SELECT * FROM students;