CREATE DATABASE survey_db;
USE survey_db;

CREATE TABLE feedback (
id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  rating INT,
  features TEXT,
  category VARCHAR(255)
);
