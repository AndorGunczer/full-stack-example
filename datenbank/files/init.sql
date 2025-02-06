DROP DATABASE IF EXISTS mr;
CREATE DATABASE mr;
USE mr;

DROP TABLE IF EXISTS user_info;

CREATE TABLE phase_info (
    id INT AUTO_INCREMENT PRIMARY KEY,
    phase VARCHAR(20)
);

CREATE TABLE car_info (
    id INT AUTO_INCREMENT PRIMARY KEY,
    tuem VARCHAR(20),
    vin VARCHAR(20)
);

CREATE TABLE user_info (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(20),
    last_name VARCHAR(20),
    car_id INT REFERENCES car_info(id),
    phase_id INT REFERENCES phase_info(id)
);

INSERT INTO phase_info (phase) VALUES ("phase0");
INSERT INTO phase_info (phase) VALUES ("phase1");
INSERT INTO phase_info (phase) VALUES ("phase2");
INSERT INTO phase_info (phase) VALUES ("phase3");
INSERT INTO phase_info (phase) VALUES ("phase4");
INSERT INTO phase_info (phase) VALUES ("phase5");

INSERT INTO car_info (tuem, vin) VALUES ("148728047512375", "WAUZZZFW5R7003037");

INSERT INTO user_info (first_name, last_name, car_id, phase_id) VALUES ("Andor", "Gunczer", (SELECT id FROM car_info WHERE vin = "WAUZZZFW5R7003037"), (SELECT id FROM phase_info WHERE phase = "phase0"));