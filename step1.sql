CREATE SCHEMA InteractionBetweenNodeAndBdd;

CREATE TABLE InteractionBetweenNodeAndBdd.users
(
  idUser INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  pseudo VARCHAR(45) NOT NULL
)
  ENGINE = InnoDB
  CHARSET = latin1;

CREATE TABLE InteractionBetweenNodeAndBdd.Post
(
  idPost  INT AUTO_INCREMENT PRIMARY KEY,
  title   VARCHAR(255) NOT NULL,
  content TEXT         NOT NULL
)
  ENGINE = InnoDB
  CHARSET = latin1;

CREATE TABLE InteractionBetweenNodeAndBdd.Comments
(
  idComments INT AUTO_INCREMENT PRIMARY KEY,
  comment    TEXT NOT NULL,
  idUser     INT  NOT NULL
)
  ENGINE = InnoDB
  CHARSET = latin1;


